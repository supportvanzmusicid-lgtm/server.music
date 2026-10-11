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

// Endpoint Utama
app.get('/', (req, res) => {
    res.json({ status: "Server Vanz Music Online!" });
});

// Endpoint API Lagu & Pencarian (Menggunakan resource_type 'auto' agar semua mp3 terbaca)
app.get('/api/songs', async (req, res) => {
    try {
        const rawSearch = req.query.search || '';

        // Mengambil seluruh file dari Cloudinary tanpa batasan folder & tipe
        const result = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'auto', 
            max_results: 500
        });

        // Pembersihan & Pemetaan Data
        let songsList = result.resources.map((file, index) => {
            const cleanName = file.public_id.split('/').pop();
            return {
                id: index + 1,
                filename: cleanName,
                title: cleanName.replace(/[-_]/g, ' '), // Merapikan judul (menghapus - dan _)
                url: file.secure_url,
                format: file.format,
                created_at: file.created_at
            };
        });

        // Fitur Pencarian Fleksibel
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
