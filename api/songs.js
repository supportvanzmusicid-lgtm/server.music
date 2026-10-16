// api/songs.js
const songsData = require("../songs.js"); 

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        // Gunakan raw/main/ agar langsung mengakses file tanpa redirect
        const BASE_URL = "https://huggingface.co/datasets/musicvalt/musicvalt-api/raw/main/";

        const formatPath = (pathStr) => {
            if (!pathStr) return "";
            let path = pathStr;
            if (path.includes('/public/')) {
                path = path.split('/public/')[1];
            }
            if (path.startsWith('http')) {
                try {
                    path = new URL(path).pathname;
                } catch (e) {}
            }
            path = decodeURIComponent(path);
            return path.replace(/^\/+/, ''); // Hapus slash di depan
        };

        const songsWithUrls = songsData.map((song) => {
            const songFilePath = formatPath(song.url || song.filename || song.path);
            
            // Ambil path cover dari properti cover / coverUrl / image
            const rawCover = song.cover || song.coverUrl || song.image || "";
            const coverFilePath = formatPath(rawCover);

            return {
                ...song,
                url: songFilePath ? `${BASE_URL}${songFilePath}` : "",
                cover: coverFilePath ? `${BASE_URL}${coverFilePath}` : (song.cover || "")
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
