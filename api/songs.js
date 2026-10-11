module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const cloudName = 'd8cvicyr';

  // Daftar 36 lagu dari koleksi Cloudinary yang sudah dibersihkan otomatis
  const rawList = [
    { title: "Aku Jatuh Cinta", artist: "Raden Rakha Basmalah", file: "Aku_Jatuh_Cinta_-_Raden_Rakha_Basmalah_-_APLMate.com" },
    { title: "Aku Jatuh Cinta (Alt)", artist: "Raden Rakha Basmalah", file: "Aku_Jatuh_Cinta_-_Raden_Rakha_Basmalah_-_APLMate.com_1" },
    { title: "Aku Yang Jatuh Cinta", artist: "Dudy Oris", file: "Aku_Yang_Jatuh_Cinta_-_Dudy_Oris_-_APLMate.com" },
    { title: "Aku Yang Jatuh Cinta (Copy)", artist: "Dudy Oris", file: "Aku_Yang_Jatuh_Cinta_-_Dudy_Oris_-_APLMate.com_-_Copy" },
    { title: "Baik Baik Sayang", artist: "Wali", file: "Baik_Baik_Sayang_-_Wali_-_APLMate.com" },
    { title: "Berdua Lebih Baik", artist: "Acha Septriasa", file: "Berdua_Lebih_Baik_-_Acha_Septriasa_-_APLMate.com" },
    { title: "Biarlah Aku Mengalah", artist: "Nike Ardilla", file: "Biarlah_Aku_Mengalah_-_Nike_Ardilla_-_APLMate.com" },
    { title: "Bimbang (Remastered 2024)", artist: "Melly Goeslaw", file: "Bimbang_Remastered_2024_-_Melly_Goeslaw_-_APLMate.com" },
    { title: "Bimbang (Remastered 2024 Copy)", artist: "Melly Goeslaw", file: "Bimbang_Remastered_2024_-_Melly_Goeslaw_-_APLMate.com_-_Copy" },
    { title: "Bintang Kehidupan", artist: "Nike Ardilla", file: "Bintang_Kehidupan_-_Nike_Ardilla_-_APLMate.com" },
    { title: "Bunga Maaf", artist: "The Lantis", file: "Bunga_Maaf_-_The_Lantis_-_APLMate.com" },
    { title: "Bunga Maaf (Copy)", artist: "The Lantis", file: "Bunga_Maaf_-_The_Lantis_-_APLMate.com_-_Copy" },
    { title: "Cari Jodoh", artist: "Wali", file: "Cari_Jodoh_-_Wali_-_APLMate.com" },
    { title: "Cinta Dan Rahasia", artist: "Yura Yunita ft. Glenn Fredly", file: "Cinta_Dan_Rahasia_feat._Glenn_Fredly_-_Yura_Yunita_-_APLMate.com" },
    { title: "Cinta Dan Rahasia (Copy)", artist: "Yura Yunita ft. Glenn Fredly", file: "Cinta_Dan_Rahasia_feat._Glenn_Fredly_-_Yura_Yunita_-_APLMate.com_-_Copy" },
    { title: "Hal Hebat", artist: "Raffa Affar", file: "Hal_Hebat_-_Raffa_Affar_-_APLMate.com" },
    { title: "Harga Diriku", artist: "Wali", file: "Harga_Diriku_-_Wali_-_APLMate.com" },
    { title: "JODI (Jomblo Ditinggal Mati)", artist: "Wali", file: "JODI_Jomblo_Ditinggal_Mati_-_Wali_-_APLMate.com" },
    { title: "Kehilangan", artist: "Christina The", file: "Kehilangan_-_Christina_The_-_APLMate.com" },
    { title: "Kehilangan (Instrumental)", artist: "Heart", file: "Kehilangan_Instrumental_-_Heart_-_APLMate.com" },
    { title: "Lelaki Cadangan", artist: "T2", file: "Lelaki_Cadangan_-_T2_-_APLMate.com" },
    { title: "Mantan Terindah", artist: "Yovie Widianto & Raisa", file: "Mantan_Terindah_-_Yovie_Widianto_Raisa_-_APLMate.com" },
    { title: "Masa Lalu", artist: "T2", file: "Masa_Lalu_-_T2_-_APLMate.com" },
    { title: "Masing Masing", artist: "Ernie Zakri & Ade Govinda", file: "Masing_Masing_-_Ernie_Zakri_Ade_Govinda_-_APLMate.com" },
    { title: "Matahariku", artist: "Nike Ardilla", file: "Matahariku_-_Nike_Ardilla_-_APLMate.com" },
    { title: "Monokrom", artist: "Tulus", file: "Monokrom_-_Tulus_-_APLMate.com" },
    { title: "Sampai Menutup Mata", artist: "Muhammad Revan", file: "Muhammad_Revan_-_Sampai_Menutup_Mata" },
    { title: "My Heart", artist: "Acha Septriasa & Irwansyah", file: "My_Heart_-_Acha_Septriasa_Irwansyah_-_APLMate.com" },
    { title: "My Heart (Guitar Version)", artist: "Acha Septriasa & Irwansyah", file: "My_Heart_Guitar_Version_-_Acha_Septriasa_Irwansyah_-_APLMate.com" },
    { title: "Pecinta Wanita", artist: "Irwansyah", file: "Pecinta_Wanita_-_Irwansyah_-_APLMate.com" },
    { title: "Pudar", artist: "Rossa", file: "Pudar_-_Rossa_-_APLMate.com" },
    { title: "Pudar (New Version)", artist: "Rossa", file: "Pudar_New_Version_-_Rossa_-_APLMate.com" },
    { title: "Sambalado", artist: "Ayu Ting Ting", file: "Sambalado_-_Ayu_Ting_Ting_-_APLMate.com" },
    { title: "Sampai Menutup Mata", artist: "Vanz Music", file: "Sampai_Menutup_Mata" },
    { title: "Sampai Menutup Mata", artist: "Raden Rakha", file: "Sampai_Menutup_Mata_-_Raden_Rakha_-_APLMate.com" },
    { title: "Sandiwara Cinta", artist: "Nike Ardilla", file: "Sandiwara_Cinta_-_Nike_Ardilla_-_APLMate.com" }
  ];

  // Format ke output JSON standar aplikasi Vanz Music
  const songs = rawList.map((item, index) => ({
    id: `song_${index + 1}`,
    title: item.title,
    artist: item.artist,
    url: `https://res.cloudinary.com/${cloudName}/video/upload/${item.file}.mp3`,
    format: "mp3"
  }));

  // Fitur Pencarian (Search Query)
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
};
