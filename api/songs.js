module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const collectionUrl = 'https://collection.cloudinary.com/d8cvicyr/03fec99ea384fd67b1bc6f177a427cd0';
    
    // Ambil HTML dari halaman koleksi publik
    const response = await fetch(collectionUrl);
    const htmlText = await response.text();

    // Cari pola URL asset audio/video dari Cloudinary yang ada di halaman
    const mediaRegex = /https:\/\/res\.cloudinary\.com\/d8cvicyr\/[^\s"'<>]+/g;
    const matches = htmlText.match(mediaRegex) || [];

    // Filter link unik dan ambil yang berupa file media
    const uniqueUrls = [...new Set(matches)];
    
    const songs = uniqueUrls.map((url, index) => {
      const fileName = url.split('/').pop().split('?')[0];
      const cleanTitle = decodeURIComponent(fileName)
        .replace(/\.[^/.]+$/, "")
        .replace(/_/g, ' ')
        .replace(/-/g, ' ');

      return {
        id: `song_${index + 1}`,
        title: cleanTitle || `Lagu ${index + 1}`,
        url: url,
        format: "mp3"
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
      message: "Gagal mengambil data dari koleksi",
      error_detail: error.message
    });
  }
};
