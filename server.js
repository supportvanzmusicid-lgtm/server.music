const express = require('express');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi Cloudinary
cloudinary.config({ 
  cloud_name: 'd8cvicyr', 
  api_key: '377563146114928', 
  api_secret: 'PUJC1TvtBF-iA7j0nQS9PzYorh8' 
});

// Endpoint Utama (Cek Status Server)
app.get('/', (req, res) => {
    res.json({ status: "Server Vanz Music Online!" });
});

// Endpoint API Lagu & Pencarian Lengkap
app.get('/api/songs', async (req, res) => {
    try {
        const rawSearch = req.query.search || '';

        // 1. Ambil file dari tipe 'video' (kategori audio/video standar Cloudinary)
        const videoRes = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video',
            max_results: 500
        }).catch(() => ({ resources: [] }));

        // 2. Ambil file dari tipe 'raw' (kategori mentah MP3 Cloudinary)
        const rawRes = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'raw',
            max_results: 500
        }).catch(() => ({ resources: [] }));

        // Gabungkan hasil dari kedua kategori
        const allResources = [...videoRes.resources, ...rawRes.resources];

        // Format & Petakan Data Lagu
        let songsList = allResources.map((file, index) => {
            const cleanName = file.public_id.split('/').pop();
            return {
                id: index + 1,
                filename: cleanName,
                title: cleanName.replace(/[-_]/g, ' '), // Rapikan tanda - dan _ jadi spasi
                url: file.secure_url,
                format: file.format || 'mp3',
                resource_type: file.resource_type,
                created_at: file.created_at
            };
        });

        // Fitur Pencarian Jika Parameter `search` Diisi
        if (rawSearch.trim() !== '') {
            const cleanQuery = rawSearch.toLowerCase().replace(/[-_]/g, ' ');

            songsList = songsList.filter(song => {
                const targetName = song.filename.toLowerCase().replace(/[-_]/g, ' ');
                return targetName.includes(cleanQuery);
            });
        }

        res.json({
            success: true,
            total: songsList.length,
            songs: songsList
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false, 
            message: "Gagal mengambil data dari Cloudinary",
            error: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
