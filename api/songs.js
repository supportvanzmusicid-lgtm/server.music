const express = require('express');
const cors = require('cors');

const app = express();

// Mengizinkan aplikasi frontend / Android / iOS menembak API ini
app.use(cors());
app.use(express.json());

// Mengambil URL Cloudflare Tunnel dari Environment Variable Vercel
const CLOUDFLARE_TUNNEL_URL = process.env.TUNNEL_URL;

// 1. Endpoint Utama: Mengambil file songs.TXT dari laptop Anda
// URL Akses: https://vercel.app
app.get('/api/songs', (req, res) => {
    if (!CLOUDFLARE_TUNNEL_URL) {
        return res.status(500).json({ error: "Konfigurasi TUNNEL_URL di Vercel belum di-set!" });
    }
    
    // Redirect langsung ke file songs.TXT di laptop Anda via Cloudflare
    res.redirect(`${CLOUDFLARE_TUNNEL_URL}/songs.TXT`);
});

// 2. Endpoint Pemutar Musik (.mp3)
// URL Akses: https://vercel.app. Serana.mp3
app.get('/api/play', (req, res) => {
    if (!CLOUDFLARE_TUNNEL_URL) {
        return res.status(500).json({ error: "Konfigurasi TUNNEL_URL di Vercel belum di-set!" });
    }

    const fileName = req.query.filename;

    if (!fileName) {
        return res.status(400).json({ error: "Parameter 'filename' wajib diisi!" });
    }

    // Mengamankan karakter spasi nama lagu agar bisa dibaca URL browser
    const fileUrl = `${CLOUDFLARE_TUNNEL_URL}/${encodeURIComponent(fileName)}`;

    // Mengalihkan traffic langsung mengunduh/mendengar dari laptop Anda
    res.redirect(fileUrl);
});

// PENTING UNTUK VERCEL: Mengekspor aplikasi Express agar dijalankan sebagai Serverless Function
module.exports = app;
