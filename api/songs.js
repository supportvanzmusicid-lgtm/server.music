// api/songs.js
const { createClient } = require('@supabase/supabase-js');
const songsData = require("../songs.js"); 

// Inisialisasi Supabase Client
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        // Menggunakan bucket 'musicdoc' sesuai akun baru kamu
        const BUCKET_NAME = process.env.SUPABASE_BUCKET_NAME || "musicdoc";

        const songsWithUrls = await Promise.all(
            songsData.map(async (song) => {
                const songUrl = song.url || "";
                
                // Otomatis mengekstrak path setelah /public/musicdoc/
                // (Mendukung file di root, folder 'music/', maupun 'tulus/')
                let filePath = "";
                const marker = `/public/${BUCKET_NAME}/`;
                
                if (songUrl.includes(marker)) {
                    filePath = songUrl.split(marker)[1];
                } else {
                    filePath = songUrl;
                }
                
                filePath = decodeURIComponent(filePath); 

                try {
                    // Generate signed URL dari Supabase Storage yang aktif selama 24 jam (86400 detik)
                    const { data, error } = await supabase.storage
                        .from(BUCKET_NAME)
                        .createSignedUrl(filePath, 86400);

                    if (error) {
                        throw error;
                    }

                    return {
                        ...song,
                        url: data.signedUrl // URL publik diganti dengan signed URL yang aman dan bisa diputar
                    };
                } catch (songError) {
                    return {
                        ...song,
                        error: "File tidak ditemukan di Supabase Storage",
                        details: songError.message
                    };
                }
            })
        );
        
        res.status(200).json(songsWithUrls);
    } catch (error) {
        res.status(500).json({
            error: "Gagal memproses daftar lagu",
            details: error.message
        });
    }
};
