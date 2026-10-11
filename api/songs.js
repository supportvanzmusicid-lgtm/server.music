module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Memanggil endpoint JSON publik resmi Cloudinary untuk akun d8cvicyr
    const response = await fetch('https://res.cloudinary.com/d8cvicyr/video/list/upload.json');
    const data = await response.json();

    const songs = (data.resources || []).map((file, index) => {
      const publicId = file.public_id;
      const fileName = publicId.split('/').pop();
      const cleanTitle = decodeURIComponent(fileName)
        .replace(/_/g, ' ')
        .replace(/-/g, ' ');

      return {
        id: publicId,
        title: cleanTitle || `Lagu ${index + 1}`,
        url: `https://res.cloudinary.com/d8cvicyr/video/upload/${publicId}.${file.format}`,
        format: file.format,
        created_at: file.created_at
      };
    });

    const { search } = req.query;
    let filteredSongs = songs;

    if (search) {
      const keyword = search.toLowerCase();
      filteredSongs = songs.filter(s => s.title.toLowerCase().includes(keyword));
    }

    return res.status(200).json({
      success: true,
      total: filteredSongs.length,
      data: filteredSongs
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Gagal mengambil daftar lagu",
      error_detail: error.message
    });
  }
};
