const express = require('express');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi Master Admin
cloudinary.config({ 
  cloud_name: 'd8cvicyr', 
  api_key: '852345123713169', 
  api_secret: 'DkwnDDPNErZuqrPpQAm1CVhDZEs' 
});

// Endpoint Utama
app.get('/', (req, res) => {
    res.json({ status: "Server Vanz Music Online!" });
});

// Endpoint API Lagu & Pencarian
app.get('/api/songs', async (req, res) => {
    try {
        const rawSearch = req.query.search || '';

        // Mengambil data dari Cloudinary
        const result = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video',
            max_results: 100
        });

        let songsList = result.resources.map((file, index) => {
            const cleanName = file.public_id.split('/').pop();
            const coverUrl = file.secure_url.replace(/\.[^/.]+$/, ".jpg");

            return {
                id: index + 1,
                filename: cleanName,
                title: cleanName.replace(/[-_]/g, ' '),
                url: file.secure_url,
                cover_url: coverUrl,
                format: file.format || 'mp3',
                created_at: file.created_at
            };
        });

        // Filter Pencarian
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
        // Menampilkan pesan error asli dari Cloudinary ke browser
        res.status(500).json({ 
            success: false, 
            error_code: error.http_code || 500,
            message: error.message || "Unknown Error",
            details: error
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
