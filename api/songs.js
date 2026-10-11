module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const cloudName = 'd8cvicyr';
    const tagName = 'vanzmusic'; // Tag yang diisi di Cloudinary

    // Endpoint publik resmi Cloudinary berdasarkan Tag (bebas dari error 401 api_secret!)
    const response = await fetch(`https://res.cloudinary.com/${cloudName}/video/list/${tagName}.json`);
    
    if (!response.ok) {
      return res.status(500).json({
        success: false,
        message: "Gagal ambil tag. Pastikan fitur Resource List aktif dan tag 'vanzmusic' sudah dipasang pada lagu.",
      });
    }

    const data = await response.json();

    // Otomatis ubah nama file jadi Title & Artist yang rapi!
    const songs = (data.resources || []).map((file, index) => {
      const rawName = decodeURIComponent(file.public_id.split('/').pop());
      
      // Mengubah format nama file (contoh: "Denny_Caknan_-_Cundamani") jadi Title & Artist otomatis
      let artist = "Vanz Music";
      let title = rawName.replace(/_/g, ' ').replace(/-/g, ' ');

      if (title.includes(' - ')) {
        const parts = title.split(' - ');
        artist = parts[0].trim();
        title = parts[1].trim();
      }

      return {
        id: file.public_id,
        title: title,
        artist: artist,
        url: `https://res.cloudinary.com/${cloudName}/video/upload/${file.public_id}.${file.format}`,
        format: file.format,
        created_at: file.created_at
      };
    });

    const { search } = req.query;
    let filteredSongs = songs;

    if (search) {
      const keyword = search.toLowerCase();
      filteredSongs = songs.filter(s => 
        s.title.toLowerCase().includes(keyword) || 
        s.artist.toLowerCase().includes(keyword)
      );
    }

    return res.status(200).json({
      success: true,
      total: filteredSongs.length,
      data: filteredSongs
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Gagal total",
      error_detail: error.message
    });
  }
};
