const express = require('express');
const cors = require('cors');

const app = express();

// Mengizinkan aplikasi frontend (jika ada) untuk menembak API ini
app.use(cors());
app.use(express.json());

// Mengambil URL Cloudflare Tunnel dari Environment Variable Vercel
const CLOUDFLARE_TUNNEL_URL = process.env.TUNNEL_URL;

// 1. Endpoint Utama: Tes apakah server Vercel aktif
app.get('/', (req, res) => {
    res.json({
        status: "Server Vercel Aktif!",
        tunnel_terhubung: CLOUDFLARE_TUNNEL_URL ? "Ya" : "Tidak (Variabel TUNNEL_URL belum diisi)"
    });
});

// 2. Endpoint untuk mengambil daftar text lagu (songs.TXT)
app.get('/api/songs-list', (req, res) => {
    if (!CLOUDFLARE_TUNNEL_URL) {
        return res.status(500).json({ error: "Konfigurasi TUNNEL_URL di Vercel belum di-set!" });
    }
    
    // Redirect langsung ke file songs.TXT di komputer lokal Anda via Cloudflare
    res.redirect(`${CLOUDFLARE_TUNNEL_URL}/songs.TXT`);
});

// 3. Endpoint untuk memutar/streaming lagu MP3 tertentu secara dinamis
// Contoh penggunaan: https://vercel.app. Serana.mp3
app.get('/api/play', (req, res) => {
    if (!CLOUDFLARE_TUNNEL_URL) {
        return res.status(500).json({ error: "Konfigurasi TUNNEL_URL di Vercel belum di-set!" });
    }

    const fileName = req.query.filename;

    if (!fileName) {
        return res.status(400).json({ error: "Parameter 'filename' wajib diisi! Contoh: /api/play?filename=1. Serana.mp3" });
    }

    // Melakukan encode pada nama file agar karakter spasi aman dibaca URL
    const fileUrl = `${CLOUDFLARE_TUNNEL_URL}/${encodeURIComponent(fileName)}`;

    // Mengalihkan traffic browser langsung mendownload/mendengar dari laptop Anda
    res.redirect(fileUrl);
});

// Menyesuaikan port otomatis untuk kebutuhan environment Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
