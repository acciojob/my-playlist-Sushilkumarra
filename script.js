//your JS code here. If required.

// Simple JS functionality – shows an alert when media starts playing

const videoPlayer = document.getElementById('videoPlayer');
const audioPlayer = document.getElementById('audioPlayer');

videoPlayer.addEventListener('play', () => {
  console.log("🎬 Video is now playing!");
});

audioPlayer.addEventListener('play', () => {
  console.log("🎵 Audio is now playing!");
});

