const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const CLOUDFLARE_TUNNEL_URL = process.env.TUNNEL_URL;

// Rute tes utama
app.get('/api', (req, res) => {
    res.json({ message: "API Vercel Berhasil Aktif!" });
});

// Endpoint Utama Aplikasi Anda
app.get('/api/songs', (req, res) => {
    if (!CLOUDFLARE_TUNNEL_URL) {
        return res.status(500).json({ error: "Variabel TUNNEL_URL di Vercel belum diisi!" });
    }
    // Mengalihkan koneksi ke file database lagu di laptop Anda
    res.redirect(`${CLOUDFLARE_TUNNEL_URL}/songs.TXT`);
});

// Endpoint Pemutar Musik
app.get('/api/play', (req, res) => {
    if (!CLOUDFLARE_TUNNEL_URL) {
        return res.status(500).json({ error: "Variabel TUNNEL_URL di Vercel belum diisi!" });
    }

    const fileName = req.query.filename;
    if (!fileName) {
        return res.status(400).json({ error: "Parameter filename dibutuhkan!" });
    }

    const fileUrl = `${CLOUDFLARE_TUNNEL_URL}/${encodeURIComponent(fileName)}`;
    res.redirect(fileUrl);
});

// Wajib diekspor untuk arsitektur serverless Vercel
module.exports = app;
