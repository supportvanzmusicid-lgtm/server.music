const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'd8cvicyr', 
  api_key: '852345123713169', 
  api_secret: 'DkwnDDPNErZuqrPpQAm1CVhDZEs' 
});

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    try {
        const result = await cloudinary.api.resources({
            type: 'upload',
            resource_type: 'video',
            max_results: 10
        });

        return res.status(200).json({
            success: true,
            total: result.resources.length,
            data: result.resources
        });

    } catch (error) {
        // Ini akan menampilkan alasan kenapa Cloudinary menolak koneksinya langsung di layar
        return res.status(200).json({
            success: false,
            error_message: error.message,
            error_http_code: error.http_code
        });
    }
};
