const cloudinary = require('cloudinary').v2;

// Konfigurasi Master Admin Cloudinary
cloudinary.config({ 
  cloud_name: 'd8cvicyr', 
  api_key: '852345123713169', 
  api_secret: 'DkwnDDPNErZuqrPpQAm1CVhDZEs' 
});

export default async function handler(req, res) {
    // Mengizinkan CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        const rawSearch = req.query.search || '';

        // Mengambil data dari Cloudinary
        const result = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video',
            max_results: 100
        });

        let songsList = result.resources.map((file, index) => {
            const cleanName = file.public_id.split('/').pop();
            // Link otomatis untuk cover art/thumbnail album dari file audio
            const coverUrl = file.secure_url.replace(/\.[^/.]+$/, ".jpg");

            return {
                id: index + 1,
                filename: cleanName,
                title: cleanName.replace(/[-_]/g, ' '),
                url: file.secure_url,       // Link audio MP3
                cover_url: coverUrl,        // Link gambar cover
                format: file.format || 'mp3',
                created_at: file.created_at
            };
        });

        // Fitur Pencarian Fleksibel
        if (rawSearch.trim() !== '') {
            const cleanQuery = rawSearch.toLowerCase().replace(/[-_]/g, ' ');
            songsList = songsList.filter(song => {
                const targetName = song.filename.toLowerCase().replace(/[-_]/g, ' ');
                return targetName.includes(cleanQuery);
            });
        }

        return res.status(200).json({
            success: true,
            total: songsList.length,
            songs: songsList
        });

    } catch (error) {
        return res.status(500).json({ 
            success: false, 
            message: "Gagal mengambil data dari Cloudinary",
            error_detail: error.message 
        });
    }
}
