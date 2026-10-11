module.exports = (req, res) => {
  res.status(200).json({
    status: "online",
    message: "API Server Music Vanz Siap Digunakan!",
    endpoint: "/api/songs"
  });
};
