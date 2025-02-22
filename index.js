/**
 * Random Anime Video API
 * Author: Your Name
 */

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const animeVideos = [
  "https://example.com/video1.mp4",
  "https://example.com/video2.mp4",
  "https://example.com/video3.mp4",
  // Add more anime video links
];

const authorName = "Your Name"; // Replace with your actual name

app.get("/video", (req, res) => {
  const randomVideo = animeVideos[Math.floor(Math.random() * animeVideos.length)];
  res.json({ author: authorName, video: randomVideo });
});

// Export the app for Vercel (IMPORTANT)
module.exports = app;
