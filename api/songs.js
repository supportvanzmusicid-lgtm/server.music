const express = require('express');
const axios = require('axios');
const app = express();

// Masukkan link Cloudflare Tunnel aktif Anda di sini
const CLOUDFLARE_TUNNEL_URL = "https://flashers-coming-expired-folder.trycloudflare.com";

// Endpoint untuk mendapatkan daftar lagu dari server lokal Anda
app.get('/api/songs', async (req, res) => {
    try {
        // Menembak link Cloudflare untuk mengambil data songs.TXT atau file lainnya
        const response = await axios.get(`${CLOUDFLARE_TUNNEL_URL}/songs.TXT`);
        res.send(response.data);
    } catch (error) {
        res.status(502).json({ error: "Gagal mengambil data dari Cloudflare Tunnel" });
    }
});

// Endpoint untuk memutar/streaming salah satu lagu .mp3
app.get('/api/play', (req, res) => {
    const namaLagu = "1. Serana.mp3"; // Contoh nama file lagu Anda
    const urlLagu = `${CLOUDFLARE_TUNNEL_URL}/${encodeURIComponent(namaLagu)}`;
    
    // Mengarahkan (redirect) user langsung ke file mp3 di laptop Anda
    res.redirect(urlLagu);
});

app.listen(8080, () => console.log('Server GitHub/Hosting jalan di port 8080'));
