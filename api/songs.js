const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
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

    return res.status(200).json({ success: true, total: songs.length, data: songs });
  } catch (error) {
    return res.status(500).json({ success: false, error_detail: error.message || error });
  }
};
