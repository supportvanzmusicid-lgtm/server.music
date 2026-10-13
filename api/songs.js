const songs = require('../songs.js');

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Ambil kata kunci dari parameter ?search=...
    const searchQuery = req.query.search;

    let result = songs;

    // Jika user mengetik pencarian, filter berdasarkan title atau artist
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = songs.filter(song => 
            song.title.toLowerCase().includes(query) || 
            song.artist.toLowerCase().includes(query)
        );
    }

    // Kirim hasil pencarian dalam bentuk JSON
    res.status(200).json(result);
};
