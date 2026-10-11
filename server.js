const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Daftar lagu (karena pakai role Media Library User, kita daftarkan list lagu dan link publik Cloudinary di sini)
const mySongs = [
    {
        id: 1,
        filename: "Pudar_-_Rossa_-_APLMate.com.mp3",
        title: "Pudar Rossa",
        // Masukkan link publik / secure_url asli dari file Cloudinary kamu di sini
        url: "https://res.cloudinary.com/d8cvicyr/video/upload/v12345678/Pudar_-_Rossa_-_APLMate.com.mp3", 
        format: "mp3"
    },
    // Tambahkan lagu-lagu lainnya di sini dengan format yang sama:
    /*
    {
        id: 2,
        filename: "Nama_File_Lagu_Lain.mp3",
        title: "Judul Lagu Lain",
        url: "LINK_CLOUDINARY_LAGU_TERSEBUT",
        format: "mp3"
    }
    */
];

// Endpoint Utama
app.get('/', (req, res) => {
    res.json({ status: "Server Vanz Music Online!" });
});

// Endpoint API Lagu & Pencarian
app.get('/api/songs', (req, res) => {
    try {
        const rawSearch = req.query.search || '';
        let songsList = [...mySongs];

        // Fitur Pencarian Fleksibel
        if (rawSearch.trim() !== '') {
            const cleanQuery = rawSearch.toLowerCase().replace(/[-_]/g, ' ');

            songsList = songsList.filter(song => {
                const targetName = song.filename.toLowerCase().replace(/[-_]/g, ' ');
                const targetTitle = song.title.toLowerCase();
                return targetName.includes(cleanQuery) || targetTitle.includes(cleanQuery);
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
            message: "Gagal memuat daftar lagu",
            error: error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
