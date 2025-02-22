/**
 * Random Anime Video API
 * Author: Your Name
 */

export default function handler(req, res) {
  const animeVideos = [
    "https://example.com/video1.mp4",
    "https://example.com/video2.mp4",
    "https://example.com/video3.mp4",
    // Add more anime video links
  ];

  const authorName = "Your Name"; // Replace with your actual name

  const randomVideo = animeVideos[Math.floor(Math.random() * animeVideos.length)];

  res.status(200).json({ author: authorName, video: randomVideo });
}
