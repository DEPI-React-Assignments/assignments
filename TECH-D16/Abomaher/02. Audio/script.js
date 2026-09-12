const audio = document.getElementById("audio");

// Controllers
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const replayBtn = document.getElementById("replay");
const audioBar = document.getElementById("audioBar");
const audioVolume = document.getElementById("audioVolume");

// tracks
const firstTrack = document.getElementById("firstTrack");
const secondTrack = document.getElementById("secondTrack");
const thirdTrack = document.getElementById("thirdTrack");
const forthTrack = document.getElementById("forthTrack");

const trackSources = [
    "Assets/qfBenaYaSah.mp3",
    "Assets/yaSwaadAlAin.mp3",
    "Assets/waftarqna.mp3",
    "Assets/qaleqAnt.mp3",
];

// Buttons
playBtn.addEventListener("click", () => {
    audio.play();
});
pauseBtn.addEventListener("click", () => {
    audio.pause();
});
replayBtn.addEventListener("click", () => {
    audio.load();
    audio.play();
});

// Linking the bar and volume
audio.addEventListener("loadedmetadata", () => {
    audioBar.max = audio.duration;
});

audio.addEventListener("timeupdate", () => {
    audioBar.value = audio.currentTime;
});

audioBar.addEventListener("input", () => {
    audio.currentTime = audioBar.value;
});

audio.volume = audioVolume.value;

audioVolume.addEventListener("input", () => {
    audio.volume = audioVolume.value;
});

// Play audio tracks
let currentTrackIndex = 0;
function playTracks(index) {
    audio.src = trackSources[index];
    audio.play();
}

audio.addEventListener("ended", () => {
    currentTrackIndex = (currentTrackIndex + 1) % trackSources.length;
    playTracks(currentTrackIndex);
});

audio.src = trackSources[currentTrackIndex];

// Track buttons event listeners
firstTrack.addEventListener("click", () => {
    currentTrackIndex = 0;
    playTracks(currentTrackIndex);
});
secondTrack.addEventListener("click", () => {
    currentTrackIndex = 1;
    playTracks(currentTrackIndex);
    playTracks(1);
});
thirdTrack.addEventListener("click", () => {
    currentTrackIndex = 2;
    playTracks(currentTrackIndex);
    playTracks(2);
});
forthTrack.addEventListener("click", () => {
    currentTrackIndex = 3;
    playTracks(currentTrackIndex);
});
