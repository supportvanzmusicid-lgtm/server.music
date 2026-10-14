const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const songsData = require("./songs.js"); 

const s3Client = new S3Client({
    endpoint: "https://storjshare.io",
    region: "us-east-1", 
    credentials: {
        accessKeyId: process.env.STORJ_ACCESS_KEY_ID,
        secretAccessKey: process.env.STORJ_SECRET_ACCESS_KEY
    },
    forcePathStyle: true 
});

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        const BUCKET_NAME = process.env.STORJ_BUCKET_NAME;

        const songsWithUrls = await Promise.all(
            songsData.map(async (song) => {
                const supabaseUrl = song.url || "";
                let fileName = supabaseUrl.substring(supabaseUrl.lastIndexOf('/') + 1);
                fileName = decodeURIComponent(fileName); 

                try {
                    const command = new GetObjectCommand({
                        Bucket: BUCKET_NAME,
                        Key: fileName,
                        // ✨ KUNCI UTAMA: Memaksa browser untuk memutar langsung (inline), bukan mengunduh (attachment)
                        ResponseContentDisposition: 'inline',
                        ResponseContentType: 'audio/mpeg' // Memastikan browser tahu ini file audio MP3
                    });

                    // Generate link Storj baru yang aktif selama 24 jam
                    const newStorjUrl = await getSignedUrl(s3Client, command, { expiresIn: 86400 });

                    return {
                        ...song,
                        url: newStorjUrl 
                    };
                } catch (songError) {
                    return {
                        ...song,
                        error: "File tidak ditemukan di Storj",
                        details: songError.message
                    };
                }
            })
        );
        
        res.status(200).json(songsWithUrls);
    } catch (error) {
        res.status(500).json({
            error: "Gagal memproses lagu",
            details: error.message
        });
    }
};
