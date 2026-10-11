const express = require('express');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi Master Admin Cloudinary
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

        // Mengambil file dari Cloudinary
        const result = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video',
            max_results: 100
        });

        // Format data lagu + URL Audio + URL Cover Album
        let songsList = result.resources.map((file, index) => {
            const cleanName = file.public_id.split('/').pop();
            
            // Generate link cover otomatis dari Cloudinary (mengubah format audio jadi jpg/png)
            const coverUrl = file.secure_url.replace(/\.[^/.]+$/, ".jpg");

            return {
                id: index + 1,
                filename: cleanName,
                title: cleanName.replace(/[-_]/g, ' '),
                url: file.secure_url,     // Link streaming audio MP3
                cover_url: coverUrl,      // Link gambar cover/thumbnail
                format: file.format || 'mp3',
                created_at: file.created_at
            };
        });

        // Fitur Pencarian
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
        console.error("Cloudinary Error:", error);
        // Menampilkan pesan error lengkap ke browser jika terjadi masalah
        res.status(500).json({ 
            success: false, 
            error_message: error.message || "Terjadi kesalahan internal pada server",
            detail: error
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
