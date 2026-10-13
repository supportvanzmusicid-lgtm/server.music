const songs = require('../songs.js');

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    const searchQuery = req.query.search;
    let result = songs;

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        result = songs.filter(song => 
            song.title.toLowerCase().includes(query) || 
            song.artist.toLowerCase().includes(query)
        );
    }

    // Kirim Array langsung [ ... ] tanpa dibungkus object {}
    res.status(200).json(result);
};
