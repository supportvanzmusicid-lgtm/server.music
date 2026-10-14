const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const songsData = require("./songs.js"); // Mengambil data lagu dari songs.js Anda

// Inisialisasi S3 Client dengan kredensial Storj Anda
const s3Client = new S3Client({
    endpoint: "https://storjshare.io",
    region: "us-east-1", 
    credentials: {
        accessKeyId: process.env.STORJ_ACCESS_KEY_ID,
        secretAccessKey: process.env.STORJ_SECRET_ACCESS_KEY
    },
    forcePathStyle: true 
});

// Handler utama API Vercel
module.exports = async (req, res) => {
    // Mengizinkan CORS agar frontend Anda bisa mengakses API ini tanpa diblokir browser
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        const BUCKET_NAME = process.env.STORJ_BUCKET_NAME;

        // Otomatis generate link audio Storj untuk setiap lagu di songs.js
        const songsWithUrls = await Promise.all(
            songsData.map(async (song) => {
                const command = new GetObjectCommand({
                    Bucket: BUCKET_NAME,
                    Key: song.fileName // Nama file audio Anda di Storj (misal: "song.mp3")
                });

                // Link berlaku selama 24 jam (86400 detik) agar tidak cepat kedaluwarsa saat diputar
                const audioUrl = await getSignedUrl(s3Client, command, { expiresIn: 86400 });

                return {
                    ...song,
                    audioUrl: audioUrl // Ini link yang akan dimasukkan ke tag <audio src="..."> di frontend
                };
            })
        );
        
        res.status(200).json(songsWithUrls);
    } catch (error) {
        res.status(500).json({
            error: "maaf server kami sedang di pindahkan",
            details: error.message
        });
    }
};
