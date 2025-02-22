// api/random-video.js
export default function handler(req, res) {
  const videos = [
    'https://example.com/video1.mp4',
    'https://example.com/video2.mp4',
    'https://example.com/video3.mp4',
    // Add more video URLs as needed
  ];

  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  res.status(200).json({ url: randomVideo });
}
