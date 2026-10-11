const express = require('express');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi Cloudinary dengan API Key Master Admin yang baru
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

        // Mengambil file dari kategori video dan raw secara paralel menggunakan Admin API
        const [videoRes, rawRes] = await Promise.all([
            cloudinary.api.resources({ type: 'upload', resource_type: 'video', max_results: 500 }).catch(() => ({ resources: [] })),
            cloudinary.api.resources({ type: 'upload', resource_type: 'raw', max_results: 500 }).catch(() => ({ resources: [] }))
        ]);

        const allResources = [...videoRes.resources, ...rawRes.resources];

        let songsList = allResources.map((file, index) => {
            const cleanName = file.public_id.split('/').pop();
            return {
                id: index + 1,
                filename: cleanName,
                title: cleanName.replace(/[-_]/g, ' '), // Merapikan tanda - dan _ jadi spasi
                url: file.secure_url,
                format: file.format || 'mp3',
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
