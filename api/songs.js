// api/songs.js
const songsData = require("../songs.js"); 

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        // Base URL Hugging Face Dataset Anda
        const HF_BASE_URL = "https://huggingface.co/datasets/musicvalt/musicvalt-api/resolve/main/";

        const songsWithUrls = songsData.map((song) => {
            const rawPath = song.url || song.filename || song.path || "";
            
            // Bersihkan path file agar bersih dari URL lama/folder public
            let cleanPath = rawPath;
            if (cleanPath.includes('/public/')) {
                cleanPath = cleanPath.split('/public/')[1];
            }
            if (cleanPath.startsWith('http')) {
                try {
                    const parsed = new URL(cleanPath);
                    cleanPath = parsed.pathname.replace(/^\/+/, '');
                    // Buang domain/prefix lama jika ada
                    cleanPath = cleanPath.replace(/^(datasets\/)?musicvalt\/musicvalt-api\/(resolve|raw)\/main\//, '');
                } catch (e) {}
            }
            cleanPath = decodeURIComponent(cleanPath).replace(/^\/+/, '');

            return {
                ...song,
                // Jika sudah berupa URL lengkap gunakan, jika belum gabungkan dengan Hugging Face
                url: cleanPath.startsWith('http') ? cleanPath : `${HF_BASE_URL}${cleanPath}`
            };
        });
        
        res.status(200).json(songsWithUrls);
    } catch (error) {
        res.status(500).json({
            error: "Gagal memproses daftar lagu",
            details: error.message
        });
    }
};
