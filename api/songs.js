// api/songs.js
const rawList = require('../lagu'); // Memanggil file lagu.js dari root folder

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const cloudName = 'd8cvicyr';

    const songs = rawList.map((item, index) => {
      const fileExt = item.file.endsWith('.mp3') ? item.file : `${item.file}.mp3`;
      return {
        id: `song_${index + 1}`,
        title: item.title,
        artist: item.artist,
        album: item.artist,
        url: `https://res.cloudinary.com/${cloudName}/video/upload/${fileExt}`,
        format: "mp3"
      };
    });

    const { search, artist } = req.query;
    let filtered = songs;

    if (search) {
      const kw = search.toLowerCase();
      filtered = songs.filter(s => 
        s.title.toLowerCase().includes(kw) || 
        s.artist.toLowerCase().includes(kw)
      );
    }

    if (artist) {
      filtered = songs.filter(s => s.artist.toLowerCase().includes(artist.toLowerCase()));
    }

    return res.status(200).json({
      success: true,
      total: filtered.length,
      data: filtered
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
      error: error.message
    });
  }
};
