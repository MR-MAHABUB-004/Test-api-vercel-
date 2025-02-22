const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const animeVideos = [
  "https://example.com/video1.mp4",
  "https://example.com/video2.mp4",
  "https://example.com/video3.mp4",
  // Add more anime video links
];

app.get("/video", async (req, res) => {
  try {
    const randomVideo = animeVideos[Math.floor(Math.random() * animeVideos.length)];
    res.json({ video: randomVideo });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
