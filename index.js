module.exports = (req, res) => {
  res.status(200).json({
    message: "Server Music API is running!",
    endpoint: "/api/songs"
  });
};
