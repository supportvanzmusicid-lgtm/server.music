const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'd8cvicyr',
  api_key: '645289879813673',
  api_secret: 'Qt94SSMtWWmSflkSFEj1qjS_pbl'
});

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const result = await cloudinary.api.resources({
      resource_type: 'video',
      type: 'upload',
      max_results: 100
    });

    const songs = result.resources.map((file) => ({
      id: file.public_id,
      title: file.public_id.split('/').pop().replace(/_/g, ' '),
      url: file.secure_url,
      format: file.format,
      created_at: file.created_at
    }));

    return res.status(200).json({
      success: true,
      total: songs.length,
      data: songs
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Gagal konek Cloudinary",
      error_detail: error.message || JSON.stringify(error),
      http_code: error.http_code || 500
    });
  }
};
