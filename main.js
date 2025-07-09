const tracks = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "",
    ""
];

let currentTrack = 0;
const audio = document.querySelector("audio");

function loadTrack(index) {
    audio.src = tracks[index];
    audio.play();
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
}

function prevTrack(){
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
}

function stopTrack(){
    audio.pause();
    audio.currentTime = 0;
}