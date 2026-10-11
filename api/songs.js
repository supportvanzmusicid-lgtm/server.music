const cloudinary = require('cloudinary').v2;

// Konfigurasi Cloudinary Master Admin
cloudinary.config({ 
  cloud_name: 'd8cvicyr', 
  api_key: '852345123713169', 
  api_secret: 'DkwnDDPNErZuqrPpQAm1CVhDZEs' 
});

module.exports = async (req, res) => {
    // Header CORS agar Android App/Web bisa akses
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');

    const rawSearch = req.query.search || '';

    try {
        // Ambil resource dari Cloudinary
        const result = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video', // Audio MP3 di Cloudinary masuk resource_type video
            max_results: 100
        });

        if (!result || !result.resources) {
            return res.status(200).json({
                success: false,
                message: "Tidak ada data lagu yang ditemukan dari Cloudinary."
            });
        }

        let songsList = result.resources.map((file, index) => {
            const cleanName = file.public_id.split('/').pop();
            // Mengubah ekstensi MP3 jadi JPG untuk cover album otomatis
            const coverUrl = file.secure_url.replace(/\.[^/.]+$/, ".jpg");

            return {
                id: index + 1,
                filename: cleanName,
                title: cleanName.replace(/[-_]/g, ' '),
                url: file.secure_url,
                cover_url: coverUrl,
                format: file.format || 'mp3',
                created_at: file.created_at
            };
        });

        // Fitur Pencarian
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
        // Menangkap error Cloudinary secara transparan jika ada kendala
        return res.status(200).json({ 
            success: false, 
            message: "Terjadi kesalahan saat menghubungkan ke Cloudinary",
            error_detail: error.message || error.toString()
        });
    }
};
