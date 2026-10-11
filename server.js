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
    res.status(200).json({ status: "Server Vanz Music Online!" });
});

// Endpoint API Lagu & Pencarian
app.get('/api/songs', async (req, res) => {
    try {
        const rawSearch = req.query.search || '';

        // Request ke Cloudinary Admin API
        const result = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video',
            max_results: 100
        });

        let songsList = result.resources.map((file, index) => {
            const cleanName = file.public_id.split('/').pop();
            // Trik cover URL sederhana dari Cloudinary
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

        // Filter Pencarian Fleksibel
        if (rawSearch.trim() !== '') {
            const cleanQuery = rawSearch.toLowerCase().replace(/[-_]/g, ' ');
            songsList = songsList.filter(song => {
                const targetName = song.filename.toLowerCase().replace(/[-_]/g, ' ');
                return targetName.includes(cleanQuery);
            });
        }

        return res.status(200).json({
            success: true,
            total: songsList.length,
            songs: songsList
        });

    } catch (error) {
        // Menampilkan pesan error asli agar terbaca jelas di browser
        return res.status(200).json({ 
            success: false, 
            debug_info: "Terjadi error saat memanggil Cloudinary",
            error_message: error.message || "Unknown error",
            error_details: JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)))
        });
    }
});

// Handling 404 Route
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Endpoint tidak ditemukan" });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
