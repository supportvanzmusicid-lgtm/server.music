// api/songs.js
const { createClient } = require('@supabase/supabase-js');
// Mengambil data dari file songs.js di luar folder api menggunakan "../"
const songsData = require("../songs.js"); 

// Inisialisasi Supabase Client menggunakan Environment Variables
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        const BUCKET_NAME = process.env.SUPABASE_BUCKET_NAME;

        const songsWithUrls = await Promise.all(
            songsData.map(async (song) => {
                const songUrl = song.url || "";
                let fileName = songUrl.substring(songUrl.lastIndexOf('/') + 1);
                fileName = decodeURIComponent(fileName); 

                try {
                    // Generate signed URL dari Supabase Storage yang aktif selama 24 jam (86400 detik)
                    const { data, error } = await supabase.storage
                        .from(BUCKET_NAME)
                        .createSignedUrl(fileName, 86400);

                    if (error) {
                        throw error;
                    }

                    return {
                        ...song,
                        url: data.signedUrl // Mengganti URL dengan signed URL dari Supabase
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
