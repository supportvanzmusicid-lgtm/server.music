module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const cloudName = 'd8cvicyr';
    const apiKey = '652472984813877';
    const apiSecret = 'P385PKmWGyhswdwml0Z3teLHRyY';

    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/video/upload?max_results=100`, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${auth}`
      }
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({
        success: false,
        message: "Ditolak Cloudinary",
        details: data
      });
    }

    const songs = data.resources.map((file) => ({
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
      message: "Gagal total",
      error_detail: error.message
    });
  }
};
