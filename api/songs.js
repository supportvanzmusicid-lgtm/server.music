// api/songs.js
const songsData = require("../songs.js"); 

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        const BASE_URL = "https://huggingface.co/datasets/musicvalt/musicvalt-api/resolve/main/";

        const songsWithUrls = songsData.map((song) => {
            const songUrl = song.url || song.filename || song.path || "";
            
            // Ekstraksi path atau nama file dari URL lama jika ada
            let filePath = "";
            if (songUrl.includes('/public/')) {
                const parts = songUrl.split('/public/');
                filePath = parts[parts.length - 1];
            } else if (songUrl.startsWith('http')) {
                try {
                    const parsedUrl = new URL(songUrl);
                    filePath = parsedUrl.pathname.replace(/^\/+/, '');
                } catch (e) {
                    filePath = songUrl;
                }
            } else {
                filePath = songUrl;
            }
            
            filePath = decodeURIComponent(filePath); 
            // Bersihkan slash di awal jika ada untuk menghindari double slash
            filePath = filePath.replace(/^\/+/, '');

            return {
                ...song,
                url: `${BASE_URL}${filePath}` // Mengarahkan URL ke Hugging Face Dataset
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
