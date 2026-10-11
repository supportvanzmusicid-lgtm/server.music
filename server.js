const express = require('express');
const cloudinary = require('cloudinary').v2;

const app = express();
const PORT = process.env.PORT || 3000;

cloudinary.config({ 
  cloud_name: 'd8cvicyr', 
  api_key: '852345123713169', 
  api_secret: 'DkwnDDPNErZuqrPpQAm1CVhDZEs' 
});

app.get('/', (req, res) => {
    res.json({ status: "Server Online!" });
});

app.get('/api/songs', async (req, res) => {
    try {
        // Tes ping langsung ke Cloudinary
        const result = await cloudinary.api.ping();
        
        res.json({
            success: true,
            message: "Koneksi ke Cloudinary Berhasil!",
            ping: result
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            error_message: error.message 
        });
    }
});

app.listen(PORT, () => {});
module.exports = app;
