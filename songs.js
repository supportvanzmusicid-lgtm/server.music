const songs = [
  {
    "id": 1,
    "title": "We Hug Now",
    "artist": "Sydney Rose",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/86.%20We%20Hug%20Now..mp3"
  },
  {
    "id": 2,
    "title": "Cintamu Untuk Siapa",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/87.%20Cintamu%20Untuk%20Siapa..mp3"
  },
  {
    "id": 3,
    "title": "Hope",
    "artist": "XXXTENTACION",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/87.%20Hope.mp3..mp3"
  },
  {
    "id": 4,
    "title": "Rasa Cinta Ini",
    "artist": "Ghea Indrawari",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/87.%20Rasa%20Cinta%20Ini..mp3"
  },
  {
    "id": 5,
    "title": "Those Eyes",
    "artist": "New West",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/87.%20Those%20Eyes..mp3"
  },
  {
    "id": 6,
    "title": "bad",
    "artist": "wave to earth",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/88.%20bad.mp3..mp3"
  },
  {
    "id": 7,
    "title": "EEEE A",
    "artist": "dia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/1.%20EEEE%20A..mp3"
  },
  {
    "id": 8,
    "title": "Hatiku Bagai Disangkar Emas",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/1.%20Hatiku%20Bagai%20Disangkar%20Emas..mp3"
  },
  {
    "id": 9,
    "title": "Indonesia Raya - Chorus Version",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/1.%20Indonesia%20Raya..mp3"
  },
  {
    "id": 10,
    "title": "Kehilangan",
    "artist": "Christina The",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/1.%20Kehilangan..mp3"
  },
  {
    "id": 11,
    "title": "Pencinta Wanita",
    "artist": "Irwansyah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/1.%20Pencinta%20Wanita..mp3"
  },
  {
    "id": 12,
    "title": "Pokoke Joget",
    "artist": "Mr NurBayan",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/1.%20Pokoke%20Joget..mp3"
  },
  {
    "id": 13,
    "title": "Sedia Aku Sebelum Hujan",
    "artist": "Idgitaf",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/1.%20Sedia%20Aku%20Sebelum%20Hujan..mp3"
  },
  {
    "id": 14,
    "title": "Serana",
    "artist": "For Revenge",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/1.%20Serana.mp3..mp3"
  },
  {
    "id": 15,
    "title": "Sesi Potret",
    "artist": "eńau/Ari Lesmana",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/1.%20Sesi%20Potret..mp3"
  },
  {
    "id": 16,
    "title": "33x",
    "artist": "Perunggu",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%2033x.mp3..mp3"
  },
  {
    "id": 17,
    "title": "About You",
    "artist": "The 1975",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%20About%20You..mp3"
  },
  {
    "id": 18,
    "title": "Berdua Lebih Baik",
    "artist": "Acha Septriasa",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%20Berdua%20Lebih%20Baik..mp3"
  },
  {
    "id": 19,
    "title": "Cinta Semusim",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%20Cinta%20Semusim..mp3"
  },
  {
    "id": 20,
    "title": "Februari",
    "artist": "Rony Parulian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%20Februari..mp3"
  },
  {
    "id": 21,
    "title": "Kekasih Bayangan",
    "artist": "Cakra Khan",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%20Kekasih%20Bayangan..mp3"
  },
  {
    "id": 22,
    "title": "Maju Tak Gentar",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%20Maju%20Tak%20Gentar..mp3"
  },
  {
    "id": 23,
    "title": "Menepi - Cover",
    "artist": "Guyon Waton",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%20Menepi..mp3"
  },
  {
    "id": 24,
    "title": "SENCY",
    "artist": "dia/Tenxi",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%20SENCY..mp3"
  },
  {
    "id": 25,
    "title": "Teh Hijau",
    "artist": "Tulus",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/2.%20Teh%20Hijau..mp3"
  },
  {
    "id": 26,
    "title": "Garam & Madu (Sakit Dadaku) [Sped Up]",
    "artist": "Tenxi/Jemsii/Naykilla",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/3.%20Garam%20%26%20Madu%20(Sakit%20Dadaku)%20%5BSped%20Up%5D.mp3.mp3"
  },
  {
    "id": 27,
    "title": "Garuda Pancasila",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/3.%20Garuda%20Pancasila.mp3..mp3"
  },
  {
    "id": 28,
    "title": "iqro'",
    "artist": "Raim Laode",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/3.%20iqro'..mp3"
  },
  {
    "id": 29,
    "title": "Menghitung Hari 2",
    "artist": "Anda Perdana",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/3.%20Menghitung%20Hari%202..mp3"
  },
  {
    "id": 30,
    "title": "Merindumu lagi",
    "artist": "Khifnu",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/3.%20Merindumu%20lagi..mp3"
  },
  {
    "id": 31,
    "title": "Merry Christmas, Please Don't Call",
    "artist": "Bleachers",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/3.%20Merry%20Christmas%2C%20Please%20Don't%20Call..mp3"
  },
  {
    "id": 32,
    "title": "Suara Hati",
    "artist": "Ayu Ting Ting",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/3.%20Suara%20Hati..mp3"
  },
  {
    "id": 33,
    "title": "Tentang Perasaanku",
    "artist": "Irwansyah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/3.%20Tentang%20Perasaanku..mp3"
  },
  {
    "id": 34,
    "title": "WAKTU",
    "artist": "dia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/3.%20WAKTU..mp3"
  },
  {
    "id": 35,
    "title": "Bunga Kasih Yang Merana",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20Bunga%20Kasih%20Yang%20Merana..mp3"
  },
  {
    "id": 36,
    "title": "everything u are",
    "artist": "Hindia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20everything%20u%20are.mp3..mp3"
  },
  {
    "id": 37,
    "title": "Hari ini,Esok dan Seterusnya/HES",
    "artist": "Nirina Zubir",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20Hari%20ini%2CEsok%20dan%20Seterusnya_HES..mp3"
  },
  {
    "id": 38,
    "title": "Hope",
    "artist": "XXXTENTACION",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20Hope.mp3..mp3"
  },
  {
    "id": 39,
    "title": "Indonesia Tetap Merdeka",
    "artist": "Merpati Singers",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20Indonesia%20Tetap%20Merdeka..mp3"
  },
  {
    "id": 40,
    "title": "Jangan Paksa Rindu",
    "artist": "Ifan Seventeen",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20Jangan%20Paksa%20Rindu..mp3"
  },
  {
    "id": 41,
    "title": "Kenangan Terindah",
    "artist": "SAMSONS",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20Kenangan%20Terindah..mp3"
  },
  {
    "id": 42,
    "title": "MALU MALU",
    "artist": "dia/INDAHKUS",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20MALU%20MALU..mp3"
  },
  {
    "id": 43,
    "title": "Shape of My Heart",
    "artist": "Backstreet Boys",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20Shape%20of%20My%20Heart.mp3..mp3"
  },
  {
    "id": 44,
    "title": "Wals Akhir Zaman",
    "artist": "Rony Parulian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/4.%20Wals%20Akhir%20Zaman.mp3..mp3"
  },
  {
    "id": 45,
    "title": "EMANK ENAK",
    "artist": "dia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/5.%20EMANK%20ENAK..mp3"
  },
  {
    "id": 46,
    "title": "Hingga Tua Bersama",
    "artist": "Rizky Febian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/5.%20Hingga%20Tua%20Bersama.mp3..mp3"
  },
  {
    "id": 47,
    "title": "Juara Khatulistiwa",
    "artist": "Ayunda Risu/Moona Hoshinova/Airani Iofifteen/Kureiji Ollie/Anya Melfissa/Pavolia Reine/Vestia Zeta/Kaela Kovalskia/Kobo Kanaeru/hololive (Indonesia)",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/5.%20Juara%20Khatulistiwa.mp3..mp3"
  },
  {
    "id": 48,
    "title": "Ku Ingin Jumpa",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/5.%20Ku%20Ingin%20Jumpa..mp3"
  },
  {
    "id": 49,
    "title": "Mendung",
    "artist": "Yura Yunita/Idgitaf",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/5.%20Mendung..mp3"
  },
  {
    "id": 50,
    "title": "Monolog",
    "artist": "Pamungkas",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/5.%20Monolog..mp3"
  },
  {
    "id": 51,
    "title": "Perempuanku",
    "artist": "Irwansyah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/5.%20Perempuanku..mp3"
  },
  {
    "id": 52,
    "title": "Risk It All",
    "artist": "Bruno Mars",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/5.%20Risk%20It%20All..mp3"
  },
  {
    "id": 53,
    "title": "Sorak-Sorak Bergembira",
    "artist": "Orkes Lokanada",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/5.%20Sorak..mp3"
  },
  {
    "id": 54,
    "title": "changes",
    "artist": "XXXTENTACION",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20changes..mp3"
  },
  {
    "id": 55,
    "title": "Die On This Hill",
    "artist": "SIENNA SPIRO",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20Die%20On%20This%20Hill.mp3..mp3"
  },
  {
    "id": 56,
    "title": "kota ini tak sama tanpamu",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20kota%20ini%20tak%20sama%20tanpamu..mp3"
  },
  {
    "id": 57,
    "title": "Sampai Menutup Mata",
    "artist": "Acha Septriasa",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20Sampai%20Menutup%20Mata..mp3"
  },
  {
    "id": 58,
    "title": "Selamat (Selamat Tinggal)",
    "artist": "Virgoun/Audy",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20Selamat%20(Selamat%20Tinggal)..mp3"
  },
  {
    "id": 59,
    "title": "Semakin Ku Kejar Semakin Kau Jauh (SKSJ)",
    "artist": "Five Minutes",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20Semakin%20Ku%20Kejar%20Semakin%20Kau%20Jauh%20(SKSJ)..mp3"
  },
  {
    "id": 60,
    "title": "Tak Ada Ujungnya",
    "artist": "Rony Parulian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20Tak%20Ada%20Ujungnya.mp3..mp3"
  },
  {
    "id": 61,
    "title": "Teguh Kukuh Berlapis Baja - Chorus Version",
    "artist": "Merpati Singers",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20Teguh%20Kukuh%20Berlapis%20Baja..mp3"
  },
  {
    "id": 62,
    "title": "Yang Mengharapkan",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20Yang%20Mengharapkan.mp3..mp3"
  },
  {
    "id": 63,
    "title": "YANK PERTAMA",
    "artist": "dia/Yung Caters",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/6.%20YANK%20PERTAMA..mp3"
  },
  {
    "id": 64,
    "title": "10 Tahun Lebih Dewasa",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/7.%2010%20Tahun%20Lebih%20Dewasa..mp3"
  },
  {
    "id": 65,
    "title": "Alamat Palsu",
    "artist": "Ayu Ting Ting",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/7.%20Alamat%20Palsu..mp3"
  },
  {
    "id": 66,
    "title": "Bahagia Lagi",
    "artist": "Piche Kota",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/7.%20Bahagia%20Lagi..mp3"
  },
  {
    "id": 67,
    "title": "bergema sampai selamanya - Stripped Version",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/7.%20bergema%20sampai%20selamanya..mp3"
  },
  {
    "id": 68,
    "title": "Berkibarlah Benderaku",
    "artist": "Patriot Nusantara",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/7.%20Berkibarlah%20Benderaku..mp3"
  },
  {
    "id": 69,
    "title": "Camelia",
    "artist": "Irwansyah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/7.%20Camelia..mp3"
  },
  {
    "id": 70,
    "title": "Pencinta Wanita",
    "artist": "Irwansyah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/7.%20Pencinta%20Wanita..mp3"
  },
  {
    "id": 71,
    "title": "Seandainya",
    "artist": "Vierra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/7.%20Seandainya..mp3"
  },
  {
    "id": 72,
    "title": "Who Knows",
    "artist": "Daniel Caesar",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/7.%20Who%20Knows..mp3"
  },
  {
    "id": 73,
    "title": "Aku Milikmu",
    "artist": "Dewa 19",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/8.%20Aku%20Milikmu..mp3"
  },
  {
    "id": 74,
    "title": "Backburner",
    "artist": "NIKI",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/8.%20Backburner..mp3"
  },
  {
    "id": 75,
    "title": "Cinta Terbaik",
    "artist": "Cassandra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/8.%20Cinta%20Terbaik..mp3"
  },
  {
    "id": 76,
    "title": "Dari Barat Sampai Ke Timur",
    "artist": "Orkes Lokanada",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/8.%20Dari%20Barat%20Sampai%20Ke%20Timur..mp3"
  },
  {
    "id": 77,
    "title": "I Knew It, I Knew You - From \"Toy Story 5\"",
    "artist": "Taylor Swift",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/8.%20I%20Knew%20It%2C%20I%20Knew%20You..mp3"
  },
  {
    "id": 78,
    "title": "Lifeline",
    "artist": "Dauble",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/8.%20Lifeline..mp3"
  },
  {
    "id": 79,
    "title": "Surat Cinta Untuk Starla",
    "artist": "Virgoun",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/8.%20Surat%20Cinta%20Untuk%20Starla..mp3"
  },
  {
    "id": 80,
    "title": "Tergores Cinta Palsu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/8.%20Tergores%20Cinta%20Palsu..mp3"
  },
  {
    "id": 81,
    "title": "Berdua Lebih Baik",
    "artist": "Acha Septriasa",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/9.%20Berdua%20Lebih%20Baik..mp3"
  },
  {
    "id": 82,
    "title": "Cinta Satu Malam",
    "artist": "Melinda",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/9.%20Cinta%20Satu%20Malam.mp3..mp3"
  },
  {
    "id": 83,
    "title": "Dari Sabang Sampai Merauke",
    "artist": "Merpati Singers",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/9.%20Dari%20Sabang%20Sampai%20Merauke..mp3"
  },
  {
    "id": 84,
    "title": "Disarankan di Bandung",
    "artist": "Dongker/Jason Ranti",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/9.%20Disarankan%20di%20Bandung..mp3"
  },
  {
    "id": 85,
    "title": "Masih Ada Rasa Cinta",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/9.%20Masih%20Ada%20Rasa%20Cinta..mp3"
  },
  {
    "id": 86,
    "title": "Pertiwi",
    "artist": "Yura Yunita",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/9.%20Pertiwi..mp3"
  },
  {
    "id": 87,
    "title": "Sadrah",
    "artist": "For Revenge",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/9.%20Sadrah.mp3..mp3"
  },
  {
    "id": 88,
    "title": "Tentang Perasaanku",
    "artist": "Irwansyah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/9.%20Tentang%20Perasaanku..mp3"
  },
  {
    "id": 89,
    "title": "The Visitor",
    "artist": "SIENNA SPIRO",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/9.%20The%20Visitor..mp3"
  },
  {
    "id": 90,
    "title": "august",
    "artist": "Taylor Swift",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/10.%20august..mp3"
  },
  {
    "id": 91,
    "title": "Bhinneka Tunggal Ika",
    "artist": "Merpati Singers",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/10.%20Bhinneka%20Tunggal%20Ika..mp3"
  },
  {
    "id": 92,
    "title": "Hujan",
    "artist": "Utopia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/10.%20Hujan..mp3"
  },
  {
    "id": 93,
    "title": "Jakarta Hari Ini",
    "artist": "For Revenge/Stereo Wall",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/10.%20Jakarta%20Hari%20Ini.mp3..mp3"
  },
  {
    "id": 94,
    "title": "Kekasihku",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/10.%20Kekasihku..mp3"
  },
  {
    "id": 95,
    "title": "Mendung",
    "artist": "Idgitaf",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/10.%20Mendung..mp3"
  },
  {
    "id": 96,
    "title": "Nina",
    "artist": ".Feast",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/10.%20Nina.mp3..mp3"
  },
  {
    "id": 97,
    "title": "Pacar Lima Langkah",
    "artist": "Iceu Wong",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/10.%20Pacar%20Lima%20Langkah.mp3..mp3"
  },
  {
    "id": 98,
    "title": "Duka",
    "artist": "Last Child",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/11.%20Duka.mp3..mp3"
  },
  {
    "id": 99,
    "title": "Halo-Halo Bandung",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/11.%20Halo..mp3"
  },
  {
    "id": 100,
    "title": "Menjaga Hati",
    "artist": "Yovie & Nuno",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/11.%20Menjaga%20Hati..mp3"
  },
  {
    "id": 101,
    "title": "Perih",
    "artist": "Vierra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/11.%20Perih..mp3"
  },
  {
    "id": 102,
    "title": "Sambalado",
    "artist": "Ayu Ting Ting",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/11.%20Sambalado..mp3"
  },
  {
    "id": 103,
    "title": "SHOPPING PARIS",
    "artist": "Mc Morena/ILYAH/T-Koor/DINASTICA",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/11.%20SHOPPING%20PARIS..mp3"
  },
  {
    "id": 104,
    "title": "Sorai",
    "artist": "Nadin Amizah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/11.%20Sorai.mp3..mp3"
  },
  {
    "id": 105,
    "title": "the cure",
    "artist": "Olivia Rodrigo",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/11.%20the%20cure..mp3"
  },
  {
    "id": 106,
    "title": "Tiada Dusta Dihatiku",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/11.%20Tiada%20Dusta%20Dihatiku..mp3"
  },
  {
    "id": 107,
    "title": "Ada titik-titik di ujung doa",
    "artist": "Sal Priadi",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/12.%20Ada%20titik..mp3"
  },
  {
    "id": 108,
    "title": "Bangun Pemudi Pemuda",
    "artist": "KHP Kridhamardawa Karaton Ngayogyakarta Hadiningrat",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/12.%20Bangun%20Pemudi%20Pemuda..mp3"
  },
  {
    "id": 109,
    "title": "Beranjak Dewasa",
    "artist": "Nadin Amizah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/12.%20Beranjak%20Dewasa.mp3..mp3"
  },
  {
    "id": 110,
    "title": "Hati Yang Rindu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/12.%20Hati%20Yang%20Rindu.mp3..mp3"
  },
  {
    "id": 111,
    "title": "Locked out of Heaven",
    "artist": "Bruno Mars",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/12.%20Locked%20out%20of%20Heaven..mp3"
  },
  {
    "id": 112,
    "title": "Pernikahan Dini",
    "artist": "Cita Citata",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/12.%20Pernikahan%20Dini.mp3..mp3"
  },
  {
    "id": 113,
    "title": "Sadrah",
    "artist": "For Revenge",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/12.%20Sadrah..mp3"
  },
  {
    "id": 114,
    "title": "Seandainya",
    "artist": "Vierra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/12.%20Seandainya..mp3"
  },
  {
    "id": 115,
    "title": "Suara (Ku Berharap)",
    "artist": "Hijau Daun",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/12.%20Suara%20(Ku%20Berharap)..mp3"
  },
  {
    "id": 116,
    "title": "1000 Alasan",
    "artist": "Zaskia Gotik",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/13.%201000%20Alasan..mp3"
  },
  {
    "id": 117,
    "title": "Cintailah Aku",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/13.%20Cintailah%20Aku..mp3"
  },
  {
    "id": 118,
    "title": "Monokrom",
    "artist": "Tulus",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/13.%20Monokrom..mp3"
  },
  {
    "id": 119,
    "title": "Rumah Ke Rumah",
    "artist": "Hindia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/13.%20Rumah%20Ke%20Rumah..mp3"
  },
  {
    "id": 120,
    "title": "Sandiwara Cinta",
    "artist": "Repvblik",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/13.%20Sandiwara%20Cinta..mp3"
  },
  {
    "id": 121,
    "title": "Siapkah Kau 'Tuk Jatuh Cinta Lagi",
    "artist": "Hivi!",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/13.%20Siapkah%20Kau%20'Tuk%20Jatuh%20Cinta%20Lagi..mp3"
  },
  {
    "id": 122,
    "title": "The Man Who Can't Be Moved",
    "artist": "The Script",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/13.%20The%20Man%20Who%20Can't%20Be%20Moved..mp3"
  },
  {
    "id": 123,
    "title": "Api Kemerdekaan",
    "artist": "Merpati Singers",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/14.%20Api%20Kemerdekaan.mp3..mp3"
  },
  {
    "id": 124,
    "title": "Bersamamu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/14.%20Bersamamu..mp3"
  },
  {
    "id": 125,
    "title": "Cincin",
    "artist": "Hindia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/14.%20Cincin..mp3"
  },
  {
    "id": 126,
    "title": "Cinta Ini Membunuhku",
    "artist": "D’MASIV",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/14.%20Cinta%20Ini%20Membunuhku..mp3"
  },
  {
    "id": 127,
    "title": "Hujan",
    "artist": "Utopia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/14.%20Hujan.mp3..mp3"
  },
  {
    "id": 128,
    "title": "Oh! Asmara",
    "artist": "Kobo Kanaeru",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/14.%20Oh!%20Asmara..mp3"
  },
  {
    "id": 129,
    "title": "Outro",
    "artist": "T-Koor/DINASTICA",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/14.%20Outro..mp3"
  },
  {
    "id": 130,
    "title": "Send My Love (To Your New Lover)",
    "artist": "Adele",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/14.%20Send%20My%20Love%20(To%20Your%20New%20Lover)..mp3"
  },
  {
    "id": 131,
    "title": "Hari Merdeka",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/15.%20Hari%20Merdeka..mp3"
  },
  {
    "id": 132,
    "title": "Heaven",
    "artist": "Bryan Adams",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/15.%20Heaven..mp3"
  },
  {
    "id": 133,
    "title": "I I I",
    "artist": "宝鐘マリン/Kobo Kanaeru",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/15.%20I%20I%20I.mp3..mp3"
  },
  {
    "id": 134,
    "title": "Monolog",
    "artist": "Pamungkas",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/15.%20Monolog..mp3"
  },
  {
    "id": 135,
    "title": "Penyangkalan",
    "artist": "For Revenge",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/15.%20Penyangkalan..mp3"
  },
  {
    "id": 136,
    "title": "Rapsodi",
    "artist": "JKT48",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/15.%20Rapsodi..mp3"
  },
  {
    "id": 137,
    "title": "Semua Aku Dirayakan",
    "artist": "Nadin Amizah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/15.%20Semua%20Aku%20Dirayakan..mp3"
  },
  {
    "id": 138,
    "title": "Sendiri Lagi",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/15.%20Sendiri%20Lagi..mp3"
  },
  {
    "id": 139,
    "title": "Yank",
    "artist": "Wali",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/15.%20Yank..mp3"
  },
  {
    "id": 140,
    "title": "Aishiteru",
    "artist": "Zivilia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/16.%20Aishiteru..mp3"
  },
  {
    "id": 141,
    "title": "Bilakah",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/16.%20Bilakah..mp3"
  },
  {
    "id": 142,
    "title": "Evakuasi",
    "artist": "Hindia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/16.%20Evakuasi..mp3"
  },
  {
    "id": 143,
    "title": "id:entity voices",
    "artist": "hololive (Indonesia)",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/16.%20id_entity%20voices.mp3..mp3"
  },
  {
    "id": 144,
    "title": "Rahasia Hati",
    "artist": "Nidji",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/16.%20Rahasia%20Hati..mp3"
  },
  {
    "id": 145,
    "title": "Rayuan Pulau Kelapa",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/16.%20Rayuan%20Pulau%20Kelapa..mp3"
  },
  {
    "id": 146,
    "title": "Seberapa Pantas",
    "artist": "Sheila On 7",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/16.%20Seberapa%20Pantas..mp3"
  },
  {
    "id": 147,
    "title": "Tell Me Now",
    "artist": "Dauble",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/16.%20Tell%20Me%20Now..mp3"
  },
  {
    "id": 148,
    "title": "To Love You More - Radio Edit",
    "artist": "Céline Dion",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/16.%20To%20Love%20You%20More..mp3"
  },
  {
    "id": 149,
    "title": "Bahagia Lagi",
    "artist": "Piche Kota",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/17.%20Bahagia%20Lagi..mp3"
  },
  {
    "id": 150,
    "title": "Cukup Sudah",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/17.%20Cukup%20Sudah..mp3"
  },
  {
    "id": 151,
    "title": "Jurus Rahasia Teleport",
    "artist": "JKT48",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/17.%20Jurus%20Rahasia%20Teleport..mp3"
  },
  {
    "id": 152,
    "title": "Mencintamu Sampai Mati - Remastered 2025",
    "artist": "Utopia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/17.%20Mencintamu%20Sampai%20Mati..mp3"
  },
  {
    "id": 153,
    "title": "Nanti Kita Seperti Ini",
    "artist": "Batas Senja",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/17.%20Nanti%20Kita%20Seperti%20Ini..mp3"
  },
  {
    "id": 154,
    "title": "Satu Nusa Satu Bangsa - Chorus Version",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/17.%20Satu%20Nusa%20Satu%20Bangsa..mp3"
  },
  {
    "id": 155,
    "title": "Secukupnya",
    "artist": "Hindia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/17.%20Secukupnya..mp3"
  },
  {
    "id": 156,
    "title": "What If I Call (Merry Christmas, i miss you)",
    "artist": "Alex Crichton",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/17.%20What%20If%20I%20Call%20(Merry%20Christmas%2C%20i%20miss%20you).mp3..mp3"
  },
  {
    "id": 157,
    "title": "Aku Cinta Kamu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/18.%20Aku%20Cinta%20Kamu..mp3"
  },
  {
    "id": 158,
    "title": "Dramatic XViltration",
    "artist": "Ayunda Risu/Moona Hoshinova/Airani Iofifteen",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/18.%20Dramatic%20XViltration..mp3"
  },
  {
    "id": 159,
    "title": "Isimo",
    "artist": "Bleachers",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/18.%20Isimo.mp3..mp3"
  },
  {
    "id": 160,
    "title": "Platine",
    "artist": "Blasko/T-Koor/DINASTICA",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/18.%20Platine..mp3"
  },
  {
    "id": 161,
    "title": "Rahasia Hati",
    "artist": "Nidji",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/18.%20Rahasia%20Hati..mp3"
  },
  {
    "id": 162,
    "title": "Rajuan Pulau Kelapa",
    "artist": "Orkes Lokanada",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/18.%20Rajuan%20Pulau%20Kelapa..mp3"
  },
  {
    "id": 163,
    "title": "Seandainya",
    "artist": "Vierra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/18.%20Seandainya..mp3"
  },
  {
    "id": 164,
    "title": "Stasiun Cinta",
    "artist": "Setia Band",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/18.%20Stasiun%20Cinta..mp3"
  },
  {
    "id": 165,
    "title": "Asia Afrika Bersatu",
    "artist": "Prohar Sudharnoto/Ansambel Gembira",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/19.%20Asia%20Afrika%20Bersatu..mp3"
  },
  {
    "id": 166,
    "title": "Kangen",
    "artist": "Dewa 19",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/19.%20Kangen..mp3"
  },
  {
    "id": 167,
    "title": "Karena Wanita (Ingin Dimengerti)",
    "artist": "Ada Band",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/19.%20Karena%20Wanita%20(Ingin%20Dimengerti)..mp3"
  },
  {
    "id": 168,
    "title": "Kembali Pulang",
    "artist": "Suara Kayu/Feby Putri",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/19.%20Kembali%20Pulang..mp3"
  },
  {
    "id": 169,
    "title": "Mungkinkah",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/19.%20Mungkinkah..mp3"
  },
  {
    "id": 170,
    "title": "Nina",
    "artist": ".Feast",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/19.%20Nina..mp3"
  },
  {
    "id": 171,
    "title": "Teh Hijau",
    "artist": "Tulus",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/19.%20Teh%20Hijau..mp3"
  },
  {
    "id": 172,
    "title": "Bagimu Neg'ri",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/20.%20Bagimu%20Neg'ri..mp3"
  },
  {
    "id": 173,
    "title": "Body On Mine",
    "artist": "Dauble",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/20.%20Body%20On%20Mine..mp3"
  },
  {
    "id": 174,
    "title": "Di Sisi Jurang Cinta",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/20.%20Di%20Sisi%20Jurang%20Cinta..mp3"
  },
  {
    "id": 175,
    "title": "Lesung Pipi",
    "artist": "Raim Laode",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/20.%20Lesung%20Pipi..mp3"
  },
  {
    "id": 176,
    "title": "Selamat (Selamat Tinggal)",
    "artist": "Virgoun/Audy",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/20.%20Selamat%20(Selamat%20Tinggal)..mp3"
  },
  {
    "id": 177,
    "title": "Sesi Potret",
    "artist": "eńau/Ari Lesmana",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/20.%20Sesi%20Potret..mp3"
  },
  {
    "id": 178,
    "title": "Untuk Mencintaimu",
    "artist": "Seventeen",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/20.%20Untuk%20Mencintaimu..mp3"
  },
  {
    "id": 179,
    "title": "back to friends",
    "artist": "sombr",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/21.%20back%20to%20friends..mp3"
  },
  {
    "id": 180,
    "title": "Cinta Terlarang",
    "artist": "The Virgin",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/21.%20Cinta%20Terlarang..mp3"
  },
  {
    "id": 181,
    "title": "Ku Bahagia",
    "artist": "Melly Goeslaw",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/21.%20Ku%20Bahagia..mp3"
  },
  {
    "id": 182,
    "title": "Lover, You Should've Come Over",
    "artist": "Jeff Buckley",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/21.%20Lover%2C%20You%20Should've%20Come%20Over.mp3..mp3"
  },
  {
    "id": 183,
    "title": "Runtuh",
    "artist": "Feby Putri/Fiersa Besari",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/21.%20Runtuh..mp3"
  },
  {
    "id": 184,
    "title": "Tanpa Cinta",
    "artist": "Yovie & Nuno",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/21.%20Tanpa%20Cinta..mp3"
  },
  {
    "id": 185,
    "title": "Dealova",
    "artist": "Once Mekel",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/22.%20Dealova..mp3"
  },
  {
    "id": 186,
    "title": "Futile Devices (Doveman Remix)",
    "artist": "Sufjan Stevens",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/22.%20Futile%20Devices%20(Doveman%20Remix).mp3..mp3"
  },
  {
    "id": 187,
    "title": "Hatiku Bagai Terpenjara",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/22.%20Hatiku%20Bagai%20Terpenjara..mp3"
  },
  {
    "id": 188,
    "title": "Ibu Kita Kartini",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/22.%20Ibu%20Kita%20Kartini.mp3..mp3"
  },
  {
    "id": 189,
    "title": "Karena Kamu",
    "artist": "Geisha",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/22.%20Karena%20Kamu..mp3"
  },
  {
    "id": 190,
    "title": "Mengejar Mimpi",
    "artist": "Yovie & Nuno",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/22.%20Mengejar%20Mimpi..mp3"
  },
  {
    "id": 191,
    "title": "Suara Hati Seorang Kekasih",
    "artist": "Melly Goeslaw",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/22.%20Suara%20Hati%20Seorang%20Kekasih..mp3"
  },
  {
    "id": 192,
    "title": "Time Feels so Slow",
    "artist": "Dauble",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/22.%20Time%20Feels%20so%20Slow..mp3"
  },
  {
    "id": 193,
    "title": "Bagai Lilin Kecil",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/23.%20Bagai%20Lilin%20Kecil.mp3..mp3"
  },
  {
    "id": 194,
    "title": "Masih Disini Masih Denganmu (MD2)",
    "artist": "Goliath",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/23.%20Masih%20Disini%20Masih%20Denganmu%20(MD2)..mp3"
  },
  {
    "id": 195,
    "title": "Merindukanmu",
    "artist": "Dash Uciha",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/23.%20Merindukanmu..mp3"
  },
  {
    "id": 196,
    "title": "Monokrom",
    "artist": "Tulus",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/23.%20Monokrom..mp3"
  },
  {
    "id": 197,
    "title": "Open Arms (feat. Travis Scott)",
    "artist": "SZA/Travis Scott",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/23.%20Open%20Arms%20(feat.%20Travis%20Scott).mp3..mp3"
  },
  {
    "id": 198,
    "title": "Rangkaian Melati",
    "artist": "Krontjong Ensemble Pantja Warna",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/23.%20Rangkaian%20Melati.mp3..mp3"
  },
  {
    "id": 199,
    "title": "Tampar",
    "artist": "Juicy Luicy",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/23.%20Tampar..mp3"
  },
  {
    "id": 200,
    "title": "Trully, Madly, Deeply Hate You",
    "artist": "Melly Goeslaw",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/23.%20Trully%2C%20Madly%2C%20Deeply%20Hate%20You.mp3..mp3"
  },
  {
    "id": 201,
    "title": "Aku Yang Tersakiti",
    "artist": "Judika",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/24.%20Aku%20Yang%20Tersakiti..mp3"
  },
  {
    "id": 202,
    "title": "Bandung Menangis Lagi",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/24.%20Bandung%20Menangis%20Lagi..mp3"
  },
  {
    "id": 203,
    "title": "Dimana Malumu",
    "artist": "Melly Goeslaw",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/24.%20Dimana%20Malumu..mp3"
  },
  {
    "id": 204,
    "title": "exile (feat. Bon Iver)",
    "artist": "Taylor Swift/Bon Iver",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/24.%20exile%20(feat.%20Bon%20Iver)..mp3"
  },
  {
    "id": 205,
    "title": "Gugur Bunga",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/24.%20Gugur%20Bunga..mp3"
  },
  {
    "id": 206,
    "title": "Interaksi",
    "artist": "Tulus",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/24.%20Interaksi..mp3"
  },
  {
    "id": 207,
    "title": "Sesuatu Di Jogja",
    "artist": "Mitty Zasia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/24.%20Sesuatu%20Di%20Jogja.mp3..mp3"
  },
  {
    "id": 208,
    "title": "Treat You Better",
    "artist": "Shawn Mendes",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/24.%20Treat%20You%20Better..mp3"
  },
  {
    "id": 209,
    "title": "Ada Apa Dengan Cinta (feat. Eric Erlangga)",
    "artist": "Melly Goeslaw/Eric Erlangga",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/25.%20Ada%20Apa%20Dengan%20Cinta%20(feat.%20Eric%20Erlangga).mp3..mp3"
  },
  {
    "id": 210,
    "title": "Deru Debu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/25.%20Deru%20Debu..mp3"
  },
  {
    "id": 211,
    "title": "Ketahuan",
    "artist": "Matta",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/25.%20Ketahuan..mp3"
  },
  {
    "id": 212,
    "title": "Lifeline - sped up",
    "artist": "Dauble",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/25.%20Lifeline..mp3"
  },
  {
    "id": 213,
    "title": "Mengheningkan Cipta - Instrumental",
    "artist": "Idris Sardi",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/25.%20Mengheningkan%20Cipta..mp3"
  },
  {
    "id": 214,
    "title": "Seluruh Nafas Ini (feat. Giselle)",
    "artist": "Last Child",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/25.%20Seluruh%20Nafas%20Ini%20(feat.%20Giselle)..mp3"
  },
  {
    "id": 215,
    "title": "Tetap Dalam Jiwa",
    "artist": "Isyana Sarasvati",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/25.%20Tetap%20Dalam%20Jiwa.mp3..mp3"
  },
  {
    "id": 216,
    "title": "That Should Be Me",
    "artist": "Justin Bieber",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/25.%20That%20Should%20Be%20Me.mp3..mp3"
  },
  {
    "id": 217,
    "title": "bergema sampai selamanya",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/26.%20bergema%20sampai%20selamanya..mp3"
  },
  {
    "id": 218,
    "title": "Bimbang",
    "artist": "Melly Goeslaw",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/26.%20Bimbang..mp3"
  },
  {
    "id": 219,
    "title": "bittersweet",
    "artist": "Madison Beer",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/26.%20bittersweet..mp3"
  },
  {
    "id": 220,
    "title": "Cinta Yang Hilang",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/26.%20Cinta%20Yang%20Hilang.mp3..mp3"
  },
  {
    "id": 221,
    "title": "Hymne Guru",
    "artist": "Instrumental Nusantara",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/26.%20Hymne%20Guru..mp3"
  },
  {
    "id": 222,
    "title": "Kesepian",
    "artist": "Vierra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/26.%20Kesepian..mp3"
  },
  {
    "id": 223,
    "title": "Rahasia Hati",
    "artist": "Element",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/26.%20Rahasia%20Hati..mp3"
  },
  {
    "id": 224,
    "title": "Tujuh Belas",
    "artist": "Tulus",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/26.%20Tujuh%20Belas..mp3"
  },
  {
    "id": 225,
    "title": "drop dead",
    "artist": "Olivia Rodrigo",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/27.%20drop%20dead..mp3"
  },
  {
    "id": 226,
    "title": "Ingin Mencintai dan Dicintai",
    "artist": "Melly Goeslaw",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/27.%20Ingin%20Mencintai%20dan%20Dicintai.mp3..mp3"
  },
  {
    "id": 227,
    "title": "Jakarta Hari Ini",
    "artist": "For Revenge/Stereo Wall",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/27.%20Jakarta%20Hari%20Ini.mp3..mp3"
  },
  {
    "id": 228,
    "title": "Keterlaluan",
    "artist": "The Potters",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/27.%20Keterlaluan..mp3"
  },
  {
    "id": 229,
    "title": "Separuh Aku",
    "artist": "Noah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/27.%20Separuh%20Aku..mp3"
  },
  {
    "id": 230,
    "title": "Tanah Tumpah Darahku",
    "artist": "Tri Ubaya Cakti",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/27.%20Tanah%20Tumpah%20Darahku..mp3"
  },
  {
    "id": 231,
    "title": "Tanpa Dirimu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/27.%20Tanpa%20Dirimu..mp3"
  },
  {
    "id": 232,
    "title": "Tarot",
    "artist": ".Feast",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/27.%20Tarot..mp3"
  },
  {
    "id": 233,
    "title": "Hanya",
    "artist": "Melly Goeslaw",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/28.%20Hanya.mp3..mp3"
  },
  {
    "id": 234,
    "title": "Jurang Pemisah",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/28.%20Jurang%20Pemisah..mp3"
  },
  {
    "id": 235,
    "title": "Monokrom",
    "artist": "Tulus",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/28.%20Monokrom..mp3"
  },
  {
    "id": 236,
    "title": "Mrs Magic (Strings Version)",
    "artist": "Strawberry Guy",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/28.%20Mrs%20Magic%20(Strings%20Version)..mp3"
  },
  {
    "id": 237,
    "title": "Ruang Rindu",
    "artist": "Letto",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/28.%20Ruang%20Rindu..mp3"
  },
  {
    "id": 238,
    "title": "Seandainya",
    "artist": "Vierra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/28.%20Seandainya..mp3"
  },
  {
    "id": 239,
    "title": "Syukur (Lagu Nasional Indonesia)",
    "artist": "Instrumental Nusantara",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/28.%20Syukur%20(Lagu%20Nasional%20Indonesia)..mp3"
  },
  {
    "id": 240,
    "title": "TÚ",
    "artist": "ILYAH/Peter Pann/Yael/T-Koor",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/28.%20T%C3%9A..mp3"
  },
  {
    "id": 241,
    "title": "Biarkan Orang Bicara",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/29.%20Biarkan%20Orang%20Bicara..mp3"
  },
  {
    "id": 242,
    "title": "everything u are",
    "artist": "Hindia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/29.%20everything%20u%20are..mp3"
  },
  {
    "id": 243,
    "title": "INDONESIA PUSAKA - Instrumental",
    "artist": "Ariblothong",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/29.%20INDONESIA%20PUSAKA..mp3"
  },
  {
    "id": 244,
    "title": "Jiwa Yang Bersedih",
    "artist": "Ghea Indrawari",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/29.%20Jiwa%20Yang%20Bersedih.mp3..mp3"
  },
  {
    "id": 245,
    "title": "Kutunggu Jandamu",
    "artist": "Irwansyah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/29.%20Kutunggu%20Jandamu..mp3"
  },
  {
    "id": 246,
    "title": "L",
    "artist": "Halstage",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/29.%20L..mp3"
  },
  {
    "id": 247,
    "title": "Location Unknown ◐ (feat. BEKA) - Brooklyn Session",
    "artist": "HONNE/BEKA",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/29.%20Location%20Unknown%20%E2%97%90%20(feat.%20BEKA)..mp3"
  },
  {
    "id": 248,
    "title": "Tentang Seseorang",
    "artist": "Anda Perdana",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/29.%20Tentang%20Seseorang.mp3..mp3"
  },
  {
    "id": 249,
    "title": "Akulah Dia",
    "artist": "Drive",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/30.%20Akulah%20Dia..mp3"
  },
  {
    "id": 250,
    "title": "Anything You Want",
    "artist": "Reality Club",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/30.%20Anything%20You%20Want.mp3..mp3"
  },
  {
    "id": 251,
    "title": "Denting",
    "artist": "Melly Goeslaw",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/30.%20Denting..mp3"
  },
  {
    "id": 252,
    "title": "Dirimu Yang Dulu",
    "artist": "Anggis Devaki",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/30.%20Dirimu%20Yang%20Dulu..mp3"
  },
  {
    "id": 253,
    "title": "Hari Hariku",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/30.%20Hari%20Hariku..mp3"
  },
  {
    "id": 254,
    "title": "Lesung Pipi",
    "artist": "Raim Laode",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/30.%20Lesung%20Pipi..mp3"
  },
  {
    "id": 255,
    "title": "Melati Suci",
    "artist": "Vina Panduwinata",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/30.%20Melati%20Suci..mp3"
  },
  {
    "id": 256,
    "title": "Penyangkalan",
    "artist": "For Revenge",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/30.%20Penyangkalan..mp3"
  },
  {
    "id": 257,
    "title": "Cintamu Untuk Siapa",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/31.%20Cintamu%20Untuk%20Siapa..mp3"
  },
  {
    "id": 258,
    "title": "Demikianlah",
    "artist": "Melly Goeslaw",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/31.%20Demikianlah..mp3"
  },
  {
    "id": 259,
    "title": "Ibu Pertiwi",
    "artist": "Carol Kuswanto/Pepita Salim",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/31.%20Ibu%20Pertiwi..mp3"
  },
  {
    "id": 260,
    "title": "Lara",
    "artist": "Dialog Senja",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/31.%20Lara.mp3..mp3"
  },
  {
    "id": 261,
    "title": "Let Down",
    "artist": "Radiohead",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/31.%20Let%20Down..mp3"
  },
  {
    "id": 262,
    "title": "Masa ini, Nanti, dan Masa Indah Lainnya",
    "artist": "Nuca",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/31.%20Masa%20ini%2C%20Nanti%2C%20dan%20Masa%20Indah%20Lainnya..mp3"
  },
  {
    "id": 263,
    "title": "Matahariku",
    "artist": "Agnes Monica",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/31.%20Matahariku..mp3"
  },
  {
    "id": 264,
    "title": "That Somebody",
    "artist": "Rafi Sudirman",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/31.%20That%20Somebody..mp3"
  },
  {
    "id": 265,
    "title": "Abadi",
    "artist": "Dendi Nata/Hendra Kumbara",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/32.%20Abadi.mp3..mp3"
  },
  {
    "id": 266,
    "title": "Api Cinta",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/32.%20Api%20Cinta..mp3"
  },
  {
    "id": 267,
    "title": "Galau",
    "artist": "Five Minutes",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/32.%20Galau..mp3"
  },
  {
    "id": 268,
    "title": "Indonesia Raya - Instrumental",
    "artist": "Lagu Nasional Indonesia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/32.%20Indonesia%20Raya..mp3"
  },
  {
    "id": 269,
    "title": "Kesalahan Terbesar",
    "artist": "Farelio",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/32.%20Kesalahan%20Terbesar..mp3"
  },
  {
    "id": 270,
    "title": "novocaine",
    "artist": "GenriX/CORBAL/Shiloh Dynasty",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/32.%20novocaine..mp3"
  },
  {
    "id": 271,
    "title": "One Less Lonely Girl",
    "artist": "Justin Bieber",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/32.%20One%20Less%20Lonely%20Girl..mp3"
  },
  {
    "id": 272,
    "title": "Wals Akhir Zaman",
    "artist": "Rony Parulian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/32.%20Wals%20Akhir%20Zaman.mp3..mp3"
  },
  {
    "id": 273,
    "title": "About You",
    "artist": "The 1975",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/33.%20About%20You..mp3"
  },
  {
    "id": 274,
    "title": "Gemuruh Riuh",
    "artist": "Mighfar Suganda",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/33.%20Gemuruh%20Riuh..mp3"
  },
  {
    "id": 275,
    "title": "Hapus Aku",
    "artist": "Nidji",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/33.%20Hapus%20Aku..mp3"
  },
  {
    "id": 276,
    "title": "Mengapa",
    "artist": "Rony Parulian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/33.%20Mengapa..mp3"
  },
  {
    "id": 277,
    "title": "past life - Orchestral Version",
    "artist": "skyemane/nimphia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/33.%20past%20life..mp3"
  },
  {
    "id": 278,
    "title": "Sepenggal Dusta",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/33.%20Sepenggal%20Dusta.mp3..mp3"
  },
  {
    "id": 279,
    "title": "This Side of Paradise",
    "artist": "Coyote Theory",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/33.%20This%20Side%20of%20Paradise..mp3"
  },
  {
    "id": 280,
    "title": "Better Off Alone",
    "artist": "Bailey Perrie",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/34.%20Better%20Off%20Alone..mp3"
  },
  {
    "id": 281,
    "title": "Heat Waves",
    "artist": "Glass Animals",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/34.%20Heat%20Waves..mp3"
  },
  {
    "id": 282,
    "title": "Relakan Dia Pergi",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/34.%20Relakan%20Dia%20Pergi.mp3..mp3"
  },
  {
    "id": 283,
    "title": "Send My Love (To Your New Lover)",
    "artist": "Adele",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/34.%20Send%20My%20Love%20(To%20Your%20New%20Lover)..mp3"
  },
  {
    "id": 284,
    "title": "Sepenuh Hati",
    "artist": "Rony Parulian/Andi Rianto",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/34.%20Sepenuh%20Hati..mp3"
  },
  {
    "id": 285,
    "title": "Takkan Pisah",
    "artist": "EREN",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/34.%20Takkan%20Pisah..mp3"
  },
  {
    "id": 286,
    "title": "Tarot",
    "artist": ".Feast",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/34.%20Tarot.mp3..mp3"
  },
  {
    "id": 287,
    "title": "April",
    "artist": "Fiersa Besari",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/35.%20April.mp3..mp3"
  },
  {
    "id": 288,
    "title": "Dekap Erat",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/35.%20Dekap%20Erat..mp3"
  },
  {
    "id": 289,
    "title": "Februari",
    "artist": "Rony Parulian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/35.%20Februari..mp3"
  },
  {
    "id": 290,
    "title": "I Thought I Saw Your Face Today",
    "artist": "She & Him",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/35.%20I%20Thought%20I%20Saw%20Your%20Face%20Today.mp3..mp3"
  },
  {
    "id": 291,
    "title": "Locked out of Heaven",
    "artist": "Bruno Mars",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/35.%20Locked%20out%20of%20Heaven..mp3"
  },
  {
    "id": 292,
    "title": "penjaga hati",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/35.%20penjaga%20hati..mp3"
  },
  {
    "id": 293,
    "title": "Sampai Menutup Mata",
    "artist": "Acha Septriasa",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/35.%20Sampai%20Menutup%20Mata..mp3"
  },
  {
    "id": 294,
    "title": "Bang Jono",
    "artist": "Zaskia Gotik",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/36.%20Bang%20Jono..mp3"
  },
  {
    "id": 295,
    "title": "Bernafas Tanpamu",
    "artist": "Last Child",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/36.%20Bernafas%20Tanpamu.mp3..mp3"
  },
  {
    "id": 296,
    "title": "Empat Mata",
    "artist": "D'Bagindas",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/36.%20Empat%20Mata..mp3"
  },
  {
    "id": 297,
    "title": "Ruang Dihatimu",
    "artist": "Lea Simanjuntak",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/36.%20Ruang%20Dihatimu..mp3"
  },
  {
    "id": 298,
    "title": "Somewhere Only We Know",
    "artist": "Keane",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/36.%20Somewhere%20Only%20We%20Know..mp3"
  },
  {
    "id": 299,
    "title": "Treat You Better",
    "artist": "Shawn Mendes",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/36.%20Treat%20You%20Better.mp3..mp3"
  },
  {
    "id": 300,
    "title": "Yang Tersayang",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/36.%20Yang%20Tersayang..mp3"
  },
  {
    "id": 301,
    "title": "Gita Cinta",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/37.%20Gita%20Cinta..mp3"
  },
  {
    "id": 302,
    "title": "I Wanna Be Yours",
    "artist": "Arctic Monkeys",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/37.%20I%20Wanna%20Be%20Yours.mp3..mp3"
  },
  {
    "id": 303,
    "title": "Manusia Biasa (CLB)",
    "artist": "Yovie & Nuno",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/37.%20Manusia%20Biasa%20(CLB)..mp3"
  },
  {
    "id": 304,
    "title": "Merindu Lagi (Pada Kekasih Orang)",
    "artist": "Yovie & Nuno",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/37.%20Merindu%20Lagi%20(Pada%20Kekasih%20Orang)..mp3"
  },
  {
    "id": 305,
    "title": "Paijo (feat. RPH & Donall)",
    "artist": "Zaskia Gotik/Donall/RPH",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/37.%20Paijo%20(feat.%20RPH%20%26%20Donall)..mp3"
  },
  {
    "id": 306,
    "title": "Serana",
    "artist": "For Revenge",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/37.%20Serana..mp3"
  },
  {
    "id": 307,
    "title": "WILDFLOWER",
    "artist": "Billie Eilish",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/37.%20WILDFLOWER..mp3"
  },
 
  {
    "id": 309,
    "title": "Bila Kau Tak Disampingku",
    "artist": "Sheila On 7",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/38.%20Bila%20Kau%20Tak%20Disampingku..mp3"
  },
  {
    "id": 310,
    "title": "Cincin",
    "artist": "Hindia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/38.%20Cincin..mp3"
  },
  {
    "id": 311,
    "title": "Mean It",
    "artist": "Lauv/LANY",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/38.%20Mean%20It..mp3"
  },
  {
    "id": 312,
    "title": "Sepenggal Dusta",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/38.%20Sepenggal%20Dusta.mp3..mp3"
  },
  {
    "id": 313,
    "title": "Tarik Selimut",
    "artist": "Zaskia Gotik",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/38.%20Tarik%20Selimut..mp3"
  },
  {
    "id": 314,
    "title": "Where We Are",
    "artist": "Westlife",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/38.%20Where%20We%20Are..mp3"
  },
  {
    "id": 315,
    "title": "1 Jam",
    "artist": "Zaskia Gotik",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/39.%201%20Jam.mp3..mp3"
  },
  {
    "id": 316,
    "title": "bergema sampai selamanya",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/39.%20bergema%20sampai%20selamanya..mp3"
  },
  {
    "id": 317,
    "title": "How You Won Me Over",
    "artist": "Bailey Perrie",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/39.%20How%20You%20Won%20Me%20Over..mp3"
  },
  {
    "id": 318,
    "title": "Mau Dibawa Kemana",
    "artist": "Armada",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/39.%20Mau%20Dibawa%20Kemana.mp3..mp3"
  },
  {
    "id": 319,
    "title": "Me & U",
    "artist": "Tems",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/39.%20Me%20%26%20U..mp3"
  },
  {
    "id": 320,
    "title": "Selimut Tetangga",
    "artist": "Repvblik",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/39.%20Selimut%20Tetangga..mp3"
  },
  {
    "id": 321,
    "title": "Yang Ku Tahu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/39.%20Yang%20Ku%20Tahu..mp3"
  },
  {
    "id": 322,
    "title": "Asal Kau Bahagia",
    "artist": "Armada",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/40.%20Asal%20Kau%20Bahagia.mp3..mp3"
  },
  {
    "id": 323,
    "title": "Dan...",
    "artist": "Sheila On 7",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/40.%20Dan.....mp3"
  },
  {
    "id": 324,
    "title": "I'd like to watch you sleeping",
    "artist": "Sal Priadi",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/40.%20I'd%20like%20to%20watch%20you%20sleeping.mp3..mp3"
  },
  {
    "id": 325,
    "title": "Raindance (feat. Tems)",
    "artist": "Dave/Tems",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/40.%20Raindance%20(feat.%20Tems)..mp3"
  },
  {
    "id": 326,
    "title": "Temani Aku Malam Ini",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/40.%20Temani%20Aku%20Malam%20Ini..mp3"
  },
  {
    "id": 327,
    "title": "Terima Kasih Cinta",
    "artist": "Afgan",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/40.%20Terima%20Kasih%20Cinta..mp3"
  },
  {
    "id": 328,
    "title": "Baik Baik Sayang",
    "artist": "Wali",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/41.%20Baik%20Baik%20Sayang..mp3"
  },
  {
    "id": 329,
    "title": "Lebih Baik Putus",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/41.%20Lebih%20Baik%20Putus.mp3..mp3"
  },
  {
    "id": 330,
    "title": "sayang,",
    "artist": "satchi!",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/41.%20sayang%2C..mp3"
  },
  {
    "id": 331,
    "title": "Separuh Aku",
    "artist": "Noah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/41.%20Separuh%20Aku..mp3"
  },
  {
    "id": 332,
    "title": "Terpikat Senyummu",
    "artist": "Idgitaf",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/41.%20Terpikat%20Senyummu.mp3..mp3"
  },
  {
    "id": 333,
    "title": "Aiaia",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/42.%20Aiaia.mp3..mp3"
  },
  {
    "id": 334,
    "title": "'Cause You Have To",
    "artist": "LANY",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/42.%20'Cause%20You%20Have%20To.mp3..mp3"
  },
  {
    "id": 335,
    "title": "Cinta Itu Buta",
    "artist": "Armada",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/42.%20Cinta%20Itu%20Buta..mp3"
  },
  {
    "id": 336,
    "title": "Nanti Kita Seperti Ini",
    "artist": "Batas Senja",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/42.%20Nanti%20Kita%20Seperti%20Ini..mp3"
  },
  {
    "id": 337,
    "title": "Sekarang Hingga Nanti Kita Tua",
    "artist": "Dimas M",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/42.%20Sekarang%20Hingga%20Nanti%20Kita%20Tua.mp3..mp3"
  },
  {
    "id": 338,
    "title": "Sempurna",
    "artist": "Andra & The Backbone",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/42.%20Sempurna..mp3"
  },
  {
    "id": 339,
    "title": "Beg U",
    "artist": "Weird Genius/Jessy Alexa",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/43.%20Beg%20U..mp3"
  },
  {
    "id": 340,
    "title": "Ingin Kembali Ke Masa Lalu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/43.%20Ingin%20Kembali%20Ke%20Masa%20Lalu..mp3"
  },
  {
    "id": 341,
    "title": "Let Down",
    "artist": "Radiohead",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/43.%20Let%20Down..mp3"
  },
  {
    "id": 342,
    "title": "My Heart",
    "artist": "Acha Septriasa/Irwansyah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/43.%20My%20Heart..mp3"
  },
  {
    "id": 343,
    "title": "Selesaikan Masa Lalumu Dulu",
    "artist": "Dimas M",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/43.%20Selesaikan%20Masa%20Lalumu%20Dulu..mp3"
  },
  {
    "id": 344,
    "title": "Serpihan Hati",
    "artist": "Utopia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/43.%20Serpihan%20Hati..mp3"
  },
  {
    "id": 345,
    "title": "Cinta Sejati",
    "artist": "Bunga Citra Lestari",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/44.%20Cinta%20Sejati..mp3"
  },
  {
    "id": 346,
    "title": "Cinta",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/44.%20Cinta.mp3..mp3"
  },
  {
    "id": 347,
    "title": "Ini Abadi",
    "artist": "Perunggu",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/44.%20Ini%20Abadi..mp3"
  },
  {
    "id": 348,
    "title": "Istana Bintang",
    "artist": "Setia Band",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/44.%20Istana%20Bintang..mp3"
  },
  {
    "id": 349,
    "title": "penjaga hati",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/44.%20penjaga%20hati..mp3"
  },
  {
    "id": 350,
    "title": "The Night We Met",
    "artist": "Lord Huron",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/44.%20The%20Night%20We%20Met.mp3..mp3"
  },
  {
    "id": 351,
    "title": "Hanya Rindu",
    "artist": "Andmesh",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/45.%20Hanya%20Rindu..mp3"
  },
  {
    "id": 352,
    "title": "Harmoni Semesta",
    "artist": "Limaraya",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/45.%20Harmoni%20Semesta..mp3"
  },
  {
    "id": 353,
    "title": "Kasmaran",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/45.%20Kasmaran..mp3"
  },
  {
    "id": 354,
    "title": "Mangu",
    "artist": "Fourtwnty/Charita Utami",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/45.%20Mangu.mp3..mp3"
  },
  {
    "id": 355,
    "title": "Salahkah Kita",
    "artist": "Robinhood/Asmirandah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/45.%20Salahkah%20Kita..mp3"
  },
  {
    "id": 356,
    "title": "Scott Street",
    "artist": "Phoebe Bridgers",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/45.%20Scott%20Street..mp3"
  },
  {
    "id": 357,
    "title": "Harus Terpisah",
    "artist": "Cakra Khan",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/46.%20Harus%20Terpisah..mp3"
  },
  {
    "id": 358,
    "title": "Jiwa Yang Bersedih",
    "artist": "Ghea Indrawari",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/46.%20Jiwa%20Yang%20Bersedih.mp3..mp3"
  },
  {
    "id": 359,
    "title": "Kembali Pulang",
    "artist": "Ariyo Wahab",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/46.%20Kembali%20Pulang..mp3"
  },
  {
    "id": 360,
    "title": "Menunggumu",
    "artist": "Noah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/46.%20Menunggumu..mp3"
  },
  {
    "id": 361,
    "title": "Niat Suci",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/46.%20Niat%20Suci..mp3"
  },
  {
    "id": 362,
    "title": "WILDFLOWER",
    "artist": "Billie Eilish",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/46.%20WILDFLOWER..mp3"
  },

  {
    "id": 364,
    "title": "Menerima Luka",
    "artist": "Natasya Sabella",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/47.%20Menerima%20Luka..mp3"
  },
  {
    "id": 365,
    "title": "No Surprises",
    "artist": "Radiohead",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/47.%20No%20Surprises..mp3"
  },
  {
    "id": 366,
    "title": "penjaga hati",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/47.%20penjaga%20hati..mp3"
  },
  {
    "id": 367,
    "title": "Relaku Di Pelukmu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/47.%20Relaku%20Di%20Pelukmu.mp3..mp3"
  },
  {
    "id": 368,
    "title": "Sempurna",
    "artist": "Andra & The Backbone",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/47.%20Sempurna..mp3"
  },
  {
    "id": 369,
    "title": "Kucinta Kau Apa Adanya - Remastered 2025",
    "artist": "Once Mekel",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/48.%20Kucinta%20Kau%20Apa%20Adanya..mp3"
  },
  {
    "id": 370,
    "title": "Pesan Terakhir",
    "artist": "Lyodra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/48.%20Pesan%20Terakhir..mp3"
  },
  {
    "id": 371,
    "title": "Senyum Senyum",
    "artist": "Sparkle",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/48.%20Senyum%20Senyum..mp3"
  },
  {
    "id": 372,
    "title": "Sesi Potret",
    "artist": "eńau/Ari Lesmana",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/48.%20Sesi%20Potret..mp3"
  },
  {
    "id": 373,
    "title": "Tak Terbatas",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/48.%20Tak%20Terbatas..mp3"
  },
  {
    "id": 374,
    "title": "XXL",
    "artist": "LANY",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/48.%20XXL.mp3..mp3"
  },
  {
    "id": 375,
    "title": "Cinta Monyet",
    "artist": "Goliath",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/49.%20Cinta%20Monyet..mp3"
  },
  {
    "id": 376,
    "title": "Entry Four",
    "artist": "Jaydes Archive",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/49.%20Entry%20Four..mp3"
  },
  {
    "id": 377,
    "title": "iqro'",
    "artist": "Raim Laode",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/49.%20iqro'.mp3..mp3"
  },
  {
    "id": 378,
    "title": "Jujur Saja",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/49.%20Jujur%20Saja..mp3"
  },
  {
    "id": 379,
    "title": "Penyangkalan",
    "artist": "For Revenge",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/49.%20Penyangkalan..mp3"
  },
  {
    "id": 380,
    "title": "Saat Kau Telah Mengerti",
    "artist": "Virgoun",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/49.%20Saat%20Kau%20Telah%20Mengerti..mp3"
  },
  {
    "id": 381,
    "title": "Beautiful (feat. Camila Cabello)",
    "artist": "Bazzi/Camila Cabello",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/50.%20Beautiful%20(feat.%20Camila%20Cabello)..mp3"
  },
  {
    "id": 382,
    "title": "Kekasih",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/50.%20Kekasih..mp3"
  },
  {
    "id": 383,
    "title": "Rindu ini tak pulang",
    "artist": "Deep Soul",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/50.%20Rindu%20ini%20tak%20pulang..mp3"
  },
  {
    "id": 384,
    "title": "SNAP",
    "artist": "Rosa Linn",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/50.%20SNAP.mp3..mp3"
  },
  {
    "id": 385,
    "title": "Tak Segampang Itu",
    "artist": "Anggi Marito",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/50.%20Tak%20Segampang%20Itu.mp3..mp3"
  },
  {
    "id": 386,
    "title": "Tiba-Tiba Cinta Datang",
    "artist": "Maudy Ayunda",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/50.%20Tiba..mp3"
  },
  {
    "id": 387,
    "title": "Kembali Padaku",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/51.%20Kembali%20Padaku..mp3"
  },
  {
    "id": 388,
    "title": "Separuh Aku",
    "artist": "Noah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/51.%20Separuh%20Aku..mp3"
  },
  {
    "id": 389,
    "title": "Timpang",
    "artist": "Gloria Jessica/Ade Govinda",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/51.%20Timpang..mp3"
  },
  {
    "id": 390,
    "title": "You'll Be in My Heart",
    "artist": "NIKI",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/51.%20You'll%20Be%20in%20My%20Heart..mp3"
  },
  {
    "id": 391,
    "title": "Jalan Kita Beda",
    "artist": "Rafa Purnama",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/52.%20Jalan%20Kita%20Beda..mp3"
  },
  {
    "id": 392,
    "title": "Janji Setia",
    "artist": "Tiara Andini",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/52.%20Janji%20Setia..mp3"
  },
  {
    "id": 393,
    "title": "Kembalikan",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/52.%20Kembalikan..mp3"
  },
  {
    "id": 394,
    "title": "Multo",
    "artist": "Cup of Joe",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/52.%20Multo.mp3..mp3"
  },
  {
    "id": 395,
    "title": "Staying",
    "artist": "Lizzy McAlpine",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/52.%20Staying..mp3"
  },
  {
    "id": 396,
    "title": "Bawa Dia Kembali",
    "artist": "Mahalini",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/53.%20Bawa%20Dia%20Kembali.mp3..mp3"
  },
  {
    "id": 397,
    "title": "Berapa Kali Kita Akan Saling Memaafkan",
    "artist": "Pamungkas",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/53.%20Berapa%20Kali%20Kita%20Akan%20Saling%20Memaafkan..mp3"
  },
  {
    "id": 398,
    "title": "Ku Ingin Bebas",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/53.%20Ku%20Ingin%20Bebas..mp3"
  },
  {
    "id": 399,
    "title": "Linger",
    "artist": "The Cranberries",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/53.%20Linger..mp3"
  },
  {
    "id": 400,
    "title": "Penyangkalan",
    "artist": "For Revenge",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/53.%20Penyangkalan..mp3"
  },
  {
    "id": 401,
    "title": "Dunia Yang Nanti",
    "artist": "Raim Laode",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/54.%20Dunia%20Yang%20Nanti.mp3..mp3"
  },
  {
    "id": 402,
    "title": "Hapus Aku",
    "artist": "Nidji",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/54.%20Hapus%20Aku..mp3"
  },
  {
    "id": 403,
    "title": "Lelah",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/54.%20Lelah.mp3..mp3"
  },
  {
    "id": 404,
    "title": "ours to keep",
    "artist": "Kendis/adis",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/54.%20ours%20to%20keep..mp3"
  },
  {
    "id": 405,
    "title": "Satu Atap Langit",
    "artist": "Limaraya",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/54.%20Satu%20Atap%20Langit..mp3"
  },
  {
    "id": 406,
    "title": "back to friends",
    "artist": "sombr",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/55.%20back%20to%20friends.mp3..mp3"
  },
  {
    "id": 407,
    "title": "Bertaut",
    "artist": "Nadin Amizah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/55.%20Bertaut..mp3"
  },
  {
    "id": 408,
    "title": "Tak Ingin Berpisah",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/55.%20Tak%20Ingin%20Berpisah.mp3..mp3"
  },
  {
    "id": 409,
    "title": "Terlalu Lama",
    "artist": "Vierra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/55.%20Terlalu%20Lama..mp3"
  },
  {
    "id": 410,
    "title": "Untuk Mencintaimu",
    "artist": "Seventeen",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/55.%20Untuk%20Mencintaimu.mp3..mp3"
  },
  {
    "id": 411,
    "title": "blue",
    "artist": "yung kai",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/56.%20blue.mp3..mp3"
  },
  {
    "id": 412,
    "title": "Lowkey",
    "artist": "Sunshine Girl",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/56.%20Lowkey..mp3"
  },
  {
    "id": 413,
    "title": "Sampai Akhir (feat. DuMa)",
    "artist": "Judika/Duma",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/56.%20Sampai%20Akhir%20(feat.%20DuMa)..mp3"
  },
  {
    "id": 414,
    "title": "Seluruh Nafas Ini",
    "artist": "Last Child/Gisel",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/56.%20Seluruh%20Nafas%20Ini.mp3..mp3"
  },
  {
    "id": 415,
    "title": "Tak Mungkin Kutinggalkan",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/56.%20Tak%20Mungkin%20Kutinggalkan..mp3"
  },
  {
    "id": 416,
    "title": "Bicara Cinta",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/57.%20Bicara%20Cinta..mp3"
  },
  {
    "id": 417,
    "title": "BIRDS OF A FEATHER",
    "artist": "Billie Eilish",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/57.%20BIRDS%20OF%20A%20FEATHER.mp3..mp3"
  },
  {
    "id": 418,
    "title": "Bukti",
    "artist": "Virgoun",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/57.%20Bukti.mp3..mp3"
  },
  {
    "id": 419,
    "title": "On Bended Knee",
    "artist": "Boyz II Men",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/57.%20On%20Bended%20Knee..mp3"
  },
  {
    "id": 420,
    "title": "Terpukau",
    "artist": "Astrid",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/57.%20Terpukau..mp3"
  },
  {
    "id": 421,
    "title": "Biarkanlah Aku Pergi",
    "artist": "Duo Antonia",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/58.%20Biarkanlah%20Aku%20Pergi..mp3"
  },
  {
    "id": 422,
    "title": "Januari",
    "artist": "Glenn Fredly",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/58.%20Januari..mp3"
  },
  {
    "id": 423,
    "title": "lovely (with Khalid)",
    "artist": "Billie Eilish/Khalid",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/58.%20lovely%20(with%20Khalid)..mp3"
  },
  {
    "id": 424,
    "title": "Tak Bisa",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/58.%20Tak%20Bisa..mp3"
  },
  {
    "id": 425,
    "title": "That’s So True",
    "artist": "Gracie Abrams",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/58.%20That%E2%80%99s%20So%20True..mp3"
  },
  {
    "id": 426,
    "title": "Berlari",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/59.%20Berlari..mp3"
  },
  {
    "id": 427,
    "title": "Jodoh Pasti Bertemu",
    "artist": "Afgan",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/59.%20Jodoh%20Pasti%20Bertemu..mp3"
  },
  {
    "id": 428,
    "title": "Kembali Pulang",
    "artist": "Suara Kayu/Feby Putri",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/59.%20Kembali%20Pulang..mp3"
  },
  {
    "id": 429,
    "title": "Sailor Song",
    "artist": "Gigi Perez",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/59.%20Sailor%20Song..mp3"
  },
  {
    "id": 430,
    "title": "Surat Cinta Untuk Starla",
    "artist": "Virgoun",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/59.%20Surat%20Cinta%20Untuk%20Starla..mp3"
  },
  {
    "id": 431,
    "title": "Aku Bukan Untukmu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/60.%20Aku%20Bukan%20Untukmu..mp3"
  },
  {
    "id": 432,
    "title": "BIRDS OF A FEATHER",
    "artist": "Billie Eilish",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/60.%20BIRDS%20OF%20A%20FEATHER.mp3..mp3"
  },
  {
    "id": 433,
    "title": "Mengenangmu",
    "artist": "Kerispatih",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/60.%20Mengenangmu..mp3"
  },
  {
    "id": 434,
    "title": "Reach for the Sky",
    "artist": "Daph Veil",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/60.%20Reach%20for%20the%20Sky..mp3"
  },
  {
    "id": 435,
    "title": "Runaway",
    "artist": "AURORA",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/60.%20Runaway..mp3"
  },
  {
    "id": 436,
    "title": "Rahasia Hati - Remastered 2023",
    "artist": "Element",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/61.%20Rahasia%20Hati%20-%20Remastered%202023.mp3"
  },
  {
    "id": 437,
    "title": "Rahasia Hati",
    "artist": "Nidji",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/61.%20Rahasia%20Hati..mp3"
  },
  {
    "id": 438,
    "title": "Setia Menanti",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/61.%20Setia%20Menanti..mp3"
  },
  {
    "id": 439,
    "title": "Sweater Weather",
    "artist": "The Neighbourhood",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/61.%20Sweater%20Weather.mp3..mp3"
  },
  {
    "id": 440,
    "title": "we can't be friends (wait for your love)",
    "artist": "Ariana Grande",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/61.%20we%20can't%20be%20friends%20(wait%20for%20your%20love)..mp3"
  },
  {
    "id": 441,
    "title": "Berartinya Dirimu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/62.%20Berartinya%20Dirimu..mp3"
  },
  {
    "id": 442,
    "title": "Die With A Smile",
    "artist": "Lady Gaga/Bruno Mars",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/62.%20Die%20With%20A%20Smile.mp3..mp3"
  },
  {
    "id": 443,
    "title": "Disarankan di Bandung",
    "artist": "Dongker/Jason Ranti",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/62.%20Disarankan%20di%20Bandung..mp3"
  },
  {
    "id": 444,
    "title": "Hingga Tua Bersama",
    "artist": "Rizky Febian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/62.%20Hingga%20Tua%20Bersama.mp3..mp3"
  },
  {
    "id": 445,
    "title": "Seamin Tak Seiman",
    "artist": "Mahen",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/62.%20Seamin%20Tak%20Seiman.mp3..mp3"
  },
  {
    "id": 446,
    "title": "Biar Aku Yang Pergi",
    "artist": "Aldy Maldini",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/63.%20Biar%20Aku%20Yang%20Pergi..mp3"
  },
  {
    "id": 447,
    "title": "End of Beginning",
    "artist": "Djo",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/63.%20End%20of%20Beginning.mp3..mp3"
  },
  {
    "id": 448,
    "title": "Her Sight",
    "artist": "Llayton",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/63.%20Her%20Sight..mp3"
  },
  {
    "id": 449,
    "title": "Jakarta Hari Ini",
    "artist": "For Revenge/Stereo Wall",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/63.%20Jakarta%20Hari%20Ini.mp3..mp3"
  },
  {
    "id": 450,
    "title": "Tak Kembali",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/63.%20Tak%20Kembali..mp3"
  },
  {
    "id": 451,
    "title": "All Too Well (Taylor's Version)",
    "artist": "Taylor Swift",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/64.%20All%20Too%20Well%20(Taylor's%20Version).mp3..mp3"
  },
  {
    "id": 452,
    "title": "Bawalah Cintaku",
    "artist": "Afgan",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/64.%20Bawalah%20Cintaku.mp3..mp3"
  },
  {
    "id": 453,
    "title": "Nina",
    "artist": ".Feast",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/64.%20Nina.mp3..mp3"
  },
  {
    "id": 454,
    "title": "Saatnya Aku",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/64.%20Saatnya%20Aku..mp3"
  },
  {
    "id": 455,
    "title": "Sedia Aku Sebelum Hujan",
    "artist": "Idgitaf",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/64.%20Sedia%20Aku%20Sebelum%20Hujan..mp3"
  },
  {
    "id": 456,
    "title": "Arti Kehilangan",
    "artist": "Deep Soul",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/65.%20Arti%20Kehilangan..mp3"
  },
  {
    "id": 457,
    "title": "Bukan Untuk Kita",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/65.%20Bukan%20Untuk%20Kita..mp3"
  },
  {
    "id": 458,
    "title": "Bunga Abadi",
    "artist": "Rio Clappy",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/65.%20Bunga%20Abadi..mp3"
  },
  {
    "id": 459,
    "title": "Kita usahakan rumah itu",
    "artist": "Sal Priadi",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/65.%20Kita%20usahakan%20rumah%20itu..mp3"
  },
  {
    "id": 460,
    "title": "La La Lost You - Acoustic Version",
    "artist": "NIKI/88rising",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/65.%20La%20La%20Lost%20You..mp3"
  },
  {
    "id": 461,
    "title": "Dunia Yang Nanti",
    "artist": "Raim Laode",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/66.%20Dunia%20Yang%20Nanti..mp3"
  },
  {
    "id": 462,
    "title": "Gala bunga matahari",
    "artist": "Sal Priadi",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/66.%20Gala%20bunga%20matahari..mp3"
  },
  {
    "id": 463,
    "title": "Location Unknown - feat. NIKI (10 Years)",
    "artist": "HONNE/NIKI",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/66.%20Location%20Unknown..mp3"
  },
  {
    "id": 464,
    "title": "Rumah",
    "artist": "Salma Salsabil",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/66.%20Rumah.mp3..mp3"
  },
  {
    "id": 465,
    "title": "Selamanya",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/66.%20Selamanya..mp3"
  },
  {
    "id": 466,
    "title": "Bawa Dia Kembali",
    "artist": "Mahalini",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/67.%20Bawa%20Dia%20Kembali.mp3..mp3"
  },
  {
    "id": 467,
    "title": "DJ 6.0",
    "artist": "Gunros",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/67.%20DJ%206.0..mp3"
  },
  {
    "id": 468,
    "title": "Jadi Kekasihku Saja",
    "artist": "Keisya Levronka",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/67.%20Jadi%20Kekasihku%20Saja..mp3"
  },
  {
    "id": 469,
    "title": "Ku Tahu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/67.%20Ku%20Tahu..mp3"
  },
  {
    "id": 470,
    "title": "Somebody's Pleasure (Extended Version)",
    "artist": "Aziz Hedra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/67.%20Somebody's%20Pleasure%20(Extended%20Version)..mp3"
  },
  {
    "id": 471,
    "title": "Bawa Dia Kembali",
    "artist": "Mahalini",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/68.%20Bawa%20Dia%20Kembali.mp3..mp3"
  },
  {
    "id": 472,
    "title": "Mangu",
    "artist": "Fourtwnty/Charita Utami",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/68.%20Mangu..mp3"
  },
  {
    "id": 473,
    "title": "Orang Yang Sama",
    "artist": "Virgoun",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/68.%20Orang%20Yang%20Sama.mp3..mp3"
  },
  {
    "id": 474,
    "title": "Payphone",
    "artist": "Maroon 5/Wiz Khalifa",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/68.%20Payphone..mp3"
  },
  {
    "id": 475,
    "title": "Persimpangan Jalan",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/68.%20Persimpangan%20Jalan..mp3"
  },
  {
    "id": 476,
    "title": "Cinta Abadi",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/69.%20Cinta%20Abadi..mp3"
  },
  {
    "id": 477,
    "title": "intro (end of the world)",
    "artist": "Ariana Grande",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/69.%20intro%20(end%20of%20the%20world)..mp3"
  },
  {
    "id": 478,
    "title": "Pesan Terakhir",
    "artist": "Lyodra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/69.%20Pesan%20Terakhir..mp3"
  },
  {
    "id": 479,
    "title": "Sadrah",
    "artist": "For Revenge",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/69.%20Sadrah..mp3"
  },
  {
    "id": 480,
    "title": "Satu Bulan",
    "artist": "Bernadya",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/69.%20Satu%20Bulan..mp3"
  },
  {
    "id": 481,
    "title": "Aku Yang Jatuh Cinta",
    "artist": "Dudy Oris",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/70.%20Aku%20Yang%20Jatuh%20Cinta..mp3"
  },
  {
    "id": 482,
    "title": "Baby Aku Rindu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/70.%20Baby%20Aku%20Rindu..mp3"
  },
  {
    "id": 483,
    "title": "ceilings",
    "artist": "Lizzy McAlpine",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/70.%20ceilings..mp3"
  },
  {
    "id": 484,
    "title": "Legawa",
    "artist": "Limaraya",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/70.%20Legawa..mp3"
  },
  {
    "id": 485,
    "title": "Tak Ingin Usai",
    "artist": "Keisya Levronka",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/70.%20Tak%20Ingin%20Usai..mp3"
  },
  {
    "id": 486,
    "title": "Bahagia Lagi",
    "artist": "Piche Kota",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/71.%20Bahagia%20Lagi..mp3"
  },
  {
    "id": 487,
    "title": "Hati-Hati di Jalan",
    "artist": "Tulus",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/71.%20Hati..mp3"
  },
  {
    "id": 488,
    "title": "Surat Hati",
    "artist": "Devano",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/71.%20Surat%20Hati..mp3"
  },
  {
    "id": 489,
    "title": "Ulangi",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/71.%20Ulangi..mp3"
  },
  {
    "id": 490,
    "title": "watch",
    "artist": "Billie Eilish",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/71.%20watch.mp3..mp3"
  },
  {
    "id": 491,
    "title": "bergema sampai selamanya",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/72.%20bergema%20sampai%20selamanya..mp3"
  },
  {
    "id": 492,
    "title": "Deslocado",
    "artist": "NAPA",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/72.%20Deslocado..mp3"
  },
  {
    "id": 493,
    "title": "Memori",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/72.%20Memori..mp3"
  },
  {
    "id": 494,
    "title": "Terus Berlari",
    "artist": "RANGR",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/72.%20Terus%20Berlari..mp3"
  },
  {
    "id": 495,
    "title": "Tutur Batin",
    "artist": "Yura Yunita",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/72.%20Tutur%20Batin..mp3"
  },
  {
    "id": 496,
    "title": "Andaikan Kau Datang",
    "artist": "Andmesh",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/73.%20Andaikan%20Kau%20Datang..mp3"
  },
  {
    "id": 497,
    "title": "Kita Lewati Berdua",
    "artist": "Overnight",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/73.%20Kita%20Lewati%20Berdua..mp3"
  },
  {
    "id": 498,
    "title": "Sedia Aku Sebelum Hujan",
    "artist": "Idgitaf",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/73.%20Sedia%20Aku%20Sebelum%20Hujan..mp3"
  },
  {
    "id": 499,
    "title": "The Winner Takes It All",
    "artist": "ABBA",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/73.%20The%20Winner%20Takes%20It%20All..mp3"
  },
  {
    "id": 500,
    "title": "Yah Sudah",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/73.%20Yah%20Sudah..mp3"
  },
  {
    "id": 501,
    "title": "Iris",
    "artist": "The Goo Goo Dolls",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/74.%20Iris.mp3..mp3"
  },
  {
    "id": 502,
    "title": "Just Friends",
    "artist": "Emily Simonian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/74.%20Just%20Friends..mp3"
  },
  {
    "id": 503,
    "title": "kota ini tak sama tanpamu",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/74.%20kota%20ini%20tak%20sama%20tanpamu..mp3"
  },
  {
    "id": 504,
    "title": "Lelaki Sejati",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/74.%20Lelaki%20Sejati..mp3"
  },
  {
    "id": 505,
    "title": "Separuh Nafas",
    "artist": "Dewa 19",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/74.%20Separuh%20Nafas..mp3"
  },
  {
    "id": 506,
    "title": "Ku Tak Sempurna",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/75.%20Ku%20Tak%20Sempurna..mp3"
  },
  {
    "id": 507,
    "title": "Lihat Kebunku (Taman Bunga)",
    "artist": "Aku Jeje",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/75.%20Lihat%20Kebunku%20(Taman%20Bunga)..mp3"
  },
  {
    "id": 508,
    "title": "Nobody Gets Me",
    "artist": "SZA",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/75.%20Nobody%20Gets%20Me..mp3"
  },
  {
    "id": 509,
    "title": "penjaga hati",
    "artist": "Nadhif Basalamah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/75.%20penjaga%20hati..mp3"
  },
  {
    "id": 510,
    "title": "Tak Dianggap",
    "artist": "Lyodra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/75.%20Tak%20Dianggap..mp3"
  },
  {
    "id": 511,
    "title": "Bayangku Hilang",
    "artist": "Pelan Saja",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/76.%20Bayangku%20Hilang..mp3"
  },
  {
    "id": 512,
    "title": "Foto kita blur",
    "artist": "Sal Priadi",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/76.%20Foto%20kita%20blur..mp3"
  },
  {
    "id": 513,
    "title": "Jangan Pikir Kau Paling Seksi",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/76.%20Jangan%20Pikir%20Kau%20Paling%20Seksi..mp3"
  },
  {
    "id": 514,
    "title": "Mati-Matian",
    "artist": "Mahalini",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/76.%20Mati..mp3"
  },
  {
    "id": 515,
    "title": "seasons",
    "artist": "wave to earth",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/76.%20seasons..mp3"
  },
  {
    "id": 516,
    "title": "mejikuhibiniu",
    "artist": "Tenxi/Suisei/Jemsii",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/77.%20mejikuhibiniu..mp3"
  },
  {
    "id": 517,
    "title": "Multo",
    "artist": "Cup of Joe",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/77.%20Multo.mp3..mp3"
  },
  {
    "id": 518,
    "title": "Pertama Kujatuh Cinta",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/77.%20Pertama%20Kujatuh%20Cinta..mp3"
  },
  {
    "id": 519,
    "title": "Sumpah Dan Cinta Matiku",
    "artist": "Nidji",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/77.%20Sumpah%20Dan%20Cinta%20Matiku..mp3"
  },
  {
    "id": 520,
    "title": "Titik Nadir (feat. Monita Tahalea)",
    "artist": "Kahitna/Monita Tahalea",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/77.%20Titik%20Nadir%20(feat.%20Monita%20Tahalea)..mp3"
  },
  {
    "id": 521,
    "title": "Cinnamon Girl",
    "artist": "Lana Del Rey",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/78.%20Cinnamon%20Girl..mp3"
  },
  {
    "id": 522,
    "title": "Cintaku Bukan Hiasan",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/78.%20Cintaku%20Bukan%20Hiasan..mp3"
  },
  {
    "id": 523,
    "title": "DICHOTOMY (The Chosen Ones)",
    "artist": "Gabriel Audee/Danny James (Lil Dee)/Saule Ilona Vaida",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/78.%20DICHOTOMY%20(The%20Chosen%20Ones)..mp3"
  },
  
  {
    "id": 525,
    "title": "Sisa Rasa",
    "artist": "Mahalini",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/78.%20Sisa%20Rasa..mp3"
  },
  {
    "id": 526,
    "title": "double take",
    "artist": "Dhruv",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/79.%20double%20take..mp3"
  },
  {
    "id": 527,
    "title": "Fast Ava",
    "artist": "Famy",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/79.%20Fast%20Ava..mp3"
  },
  {
    "id": 528,
    "title": "Hatiku Bagai Terpenjara",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/79.%20Hatiku%20Bagai%20Terpenjara..mp3"
  },
  {
    "id": 529,
    "title": "Melawan Restu",
    "artist": "Mahalini",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/79.%20Melawan%20Restu..mp3"
  },
  {
    "id": 530,
    "title": "Terbuang Dalam Waktu",
    "artist": "Barasuara",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/79.%20Terbuang%20Dalam%20Waktu..mp3"
  },
  {
    "id": 531,
    "title": "1000X",
    "artist": "Ghea Indrawari",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/80.%201000X..mp3"
  },
  {
    "id": 532,
    "title": "Hati Tergores Cinta (feat. Nafa Urbach)",
    "artist": "Rudy Chysara/Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/80.%20Hati%20Tergores%20Cinta%20(feat.%20Nafa%20Urbach)..mp3"
  },
  {
    "id": 533,
    "title": "Kasih Aba Aba",
    "artist": "Naykilla/Tenxi/Jemsii",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/80.%20Kasih%20Aba%20Aba..mp3"
  },
  {
    "id": 534,
    "title": "My Love Mine All Mine",
    "artist": "Mitski",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/80.%20My%20Love%20Mine%20All%20Mine..mp3"
  },
  {
    "id": 535,
    "title": "Peri Cintaku",
    "artist": "Ziva Magnolya",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/80.%20Peri%20Cintaku..mp3"
  },
  {
    "id": 536,
    "title": "I Love You So",
    "artist": "The Walters",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/81.%20I%20Love%20You%20So..mp3"
  },
  {
    "id": 537,
    "title": "Kekasihku",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/81.%20Kekasihku..mp3"
  },
  {
    "id": 538,
    "title": "Lifeline - slowed down",
    "artist": "Dauble",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/81.%20Lifeline..mp3"
  },
  {
    "id": 539,
    "title": "Rumah Singgah",
    "artist": "Fabio Asher",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/81.%20Rumah%20Singgah..mp3"
  },
  {
    "id": 540,
    "title": "SO ASU",
    "artist": "Naykilla",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/81.%20SO%20ASU..mp3"
  },
  {
    "id": 541,
    "title": "Bintang 5",
    "artist": "Tenxi/Jemsii",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/82.%20Bintang%205..mp3"
  },
  {
    "id": 542,
    "title": "drunk text",
    "artist": "Henry Moodie",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/82.%20drunk%20text..mp3"
  },
  {
    "id": 543,
    "title": "Kita Usahakan Lagi",
    "artist": "Batas Senja",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/82.%20Kita%20Usahakan%20Lagi..mp3"
  },
  {
    "id": 544,
    "title": "Kusadari",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/82.%20Kusadari..mp3"
  },
  {
    "id": 545,
    "title": "Tak Ingin Usai",
    "artist": "Keisya Levronka",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/82.%20Tak%20Ingin%20Usai..mp3"
  },
  {
    "id": 546,
    "title": "Biarkan Orang Bicara",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/83.%20Biarkan%20Orang%20Bicara..mp3"
  },
  {
    "id": 547,
    "title": "Dandelions",
    "artist": "Ruth B.",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/83.%20Dandelions..mp3"
  },
  {
    "id": 548,
    "title": "Duka",
    "artist": "Last Child",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/83.%20Duka.mp3..mp3"
  },
  {
    "id": 549,
    "title": "hoRRReg",
    "artist": "Tenxi/Naufal Syachreza/Jemsii",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/83.%20hoRRReg..mp3"
  },
  {
    "id": 550,
    "title": "Runtuh",
    "artist": "Feby Putri/Fiersa Besari",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/83.%20Runtuh..mp3"
  },
  {
    "id": 551,
    "title": "Berubah",
    "artist": "Tenxi/Jemsii",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/84.%20Berubah..mp3"
  },
  {
    "id": 552,
    "title": "Blood on the Petals",
    "artist": "Wispy Noir",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/84.%20Blood%20on%20the%20Petals..mp3"
  },
  {
    "id": 553,
    "title": "Jurang Pemisah",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/84.%20Jurang%20Pemisah..mp3"
  },
  {
    "id": 554,
    "title": "Tertawan Hati",
    "artist": "Awdella",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/84.%20Tertawan%20Hati..mp3"
  },
  {
    "id": 555,
    "title": "Deru Debu",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/85.%20Deru%20Debu..mp3"
  },
  {
    "id": 556,
    "title": "Jatuh Suka",
    "artist": "Tulus",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/85.%20Jatuh%20Suka..mp3"
  },
  {
    "id": 557,
    "title": "Photograph",
    "artist": "Ed Sheeran",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/85.%20Photograph..mp3"
  },
  {
    "id": 558,
    "title": "Sial",
    "artist": "Mahalini",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/85.%20Sial.mp3..mp3"
  },
  {
    "id": 559,
    "title": "TABOLA BALE",
    "artist": "Silet Open Up/Jacson Seran/Juan Reza/Diva Aurel",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/85.%20TABOLA%20BALE..mp3"
  },
  {
    "id": 560,
    "title": "Ego",
    "artist": "Lyodra",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/86.%20Ego.mp3..mp3"
  },
  {
    "id": 561,
    "title": "Hari Hariku",
    "artist": "Nafa Urbach",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/86.%20Hari%20Hariku..mp3"
  },
  {
    "id": 562,
    "title": "Hingga Tua Bersama",
    "artist": "Rizky Febian",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/86.%20Hingga%20Tua%20Bersama.mp3..mp3"
  },
  {
    "id": 563,
    "title": "Aku Jatuh Cinta",
    "artist": "Raden Rakha, Basmalah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/Aku%20Jatuh%20Cinta%20-%20Raden%20Rakha%2C%20Basmalah%20-%20%20(1).mp3"
  },
  {
    "id": 564,
    "title": "Aku Yang Jatuh Cinta",
    "artist": "Dudy Oris",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/Aku%20Yang%20Jatuh%20Cinta%20-%20Dudy%20Oris%20-%20.mp3"
  },
  {
    "id": 565,
    "title": "Aku Yang Jatuh Cinta",
    "artist": "Dudy Oris",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/Aku%20Yang%20Jatuh%20Cinta..mp3"
  },
  {
    "id": 566,
    "title": "Aku Jatuh Cinta",
    "artist": "Raden Rakha, Basmalah",
    "url": "https://zmuvbxgcvqdhhxprkady.supabase.co/storage/v1/object/public/server/Aku%20Jatuh%20Cinta..mp3"
  }
];

module.exports = songs;
