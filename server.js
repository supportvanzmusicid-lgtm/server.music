const express = require('express');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 3000;

// Konfigurasi Cloudinary menggunakan data akunmu
cloudinary.config({ 
  cloud_name: 'd8cvicyr', 
  api_key: '377563146114928', 
  api_secret: 'PUJC1TvtBF-iA7j0nQS9PzYorh8' 
});

// Endpoint utama untuk mengecek server aktif
app.get('/', (req, res) => {
    res.json({ status: "Server Vanz Music Aktif!" });
});

// Endpoint API untuk dikonsumsi aplikasi Android
app.get('/api/songs', async (req, res) => {
    try {
        // Mengambil semua file dari folder di Cloudinary
        // Ubah prefix 'music/' sesuai nama folder tempat kamu upload lagu di Cloudinary. 
        // Jika lagunya tidak di dalam folder (di luar), hapus baris "prefix: 'music/',"
        const result = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video', // Di Cloudinary, file .mp3 masuk kategori 'video'
            prefix: 'music/',       
            max_results: 100        // Maksimal ambil 100 lagu
        });

        // Mapping data agar bersih dan mudah dibaca oleh Android
        const songsList = result.resources.map((file, index) => {
            return {
                id: index + 1,
                filename: file.public_id.split('/').pop(), // Ambil nama file bersih
                url: file.secure_url,                      // Link streaming MP3 langsung
                format: file.format,
                created_at: file.created_at
            };
        });

        res.json({
            success: true,
            total: songsList.length,
            songs: songsList
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// Jalankan server lokal (opsional kalau ditest di laptop)
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
