const express = require('express');
const cors = require('cors');

const app = express();

// Mengizinkan aplikasi frontend / Android / iOS menembak API ini
app.use(cors());
app.use(express.json());

// Mengambil URL Cloudflare Tunnel dari Environment Variable Vercel
const CLOUDFLARE_TUNNEL_URL = process.env.TUNNEL_URL;

// 1. Endpoint Utama: Cek status server Vercel
app.get('/', (req, res) => {
    res.json({
        status: "Server Vercel Aktif!",
        tunnel_terhubung: CLOUDFLARE_TUNNEL_URL ? "Ya" : "Tidak (Variabel TUNNEL_URL kosong)"
    });
});

// 2. Endpoint Utama Aplikasi Anda: Mengambil file songs.TXT dari laptop
// URL: https://server-music-plum.vercel.app/api/songs
app.get('/api/songs', (req, res) => {
    if (!CLOUDFLARE_TUNNEL_URL) {
        return res.status(500).json({ error: "Konfigurasi TUNNEL_URL di Vercel belum di-set!" });
    }
    
    // Redirect langsung ke file songs.TXT (Kapital sesuai struktur folder http-server Anda)
    res.redirect(`${CLOUDFLARE_TUNNEL_URL}/songs.TXT`);
});

// 3. Endpoint Cadangan: Mengantisipasi jika aplikasi meminta format .txt huruf kecil
app.get('/api/songs-lowercase', (req, res) => {
    if (!CLOUDFLARE_TUNNEL_URL) {
        return res.status(500).json({ error: "Konfigurasi TUNNEL_URL di Vercel belum di-set!" });
    }
    res.redirect(`${CLOUDFLARE_TUNNEL_URL}/songs (2).txt`);
});

// 4. Endpoint Pemutar Musik (.mp3)
// URL Contoh: https://vercel.app. Serana.mp3
app.get('/api/play', (req, res) => {
    if (!CLOUDFLARE_TUNNEL_URL) {
        return res.status(500).json({ error: "Konfigurasi TUNNEL_URL di Vercel belum di-set!" });
    }

    const fileName = req.query.filename;

    if (!fileName) {
        return res.status(400).json({ error: "Parameter 'filename' wajib diisi!" });
    }

    // Mengamankan karakter spasi dan simbol nama lagu agar bisa dibaca URL browser
    const fileUrl = `${CLOUDFLARE_TUNNEL_URL}/${encodeURIComponent(fileName)}`;

    // Mengalihkan traffic langsung mengunduh/mendengar dari laptop Anda
    res.redirect(fileUrl);
});

// Menyesuaikan port otomatis environment Vercel
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
