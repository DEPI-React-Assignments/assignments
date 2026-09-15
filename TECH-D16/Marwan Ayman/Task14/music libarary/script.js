var audio = document.getElementById("audio");
var source = document.getElementById("source");

var play = document.getElementById("play");
var pause = document.getElementById("pause");
var stop = document.getElementById("stop");
var mute = document.getElementById("mute");

var range = document.getElementById("range");
var volume = document.getElementById("volume");

var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");
var currentSong = 1;


play.addEventListener("click", function () {
    audio.play();
});


pause.addEventListener("click", function () {
    audio.pause();
});


stop.addEventListener("click", function () {
    audio.pause();
    audio.currentTime = 0;
});


mute.addEventListener("click", function () {

    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }

});


audio.addEventListener("timeupdate", function () {
    range.value = audio.currentTime;
});


audio.addEventListener("durationchange", function () {
    range.max = audio.duration;
});


range.addEventListener("input", function () {
    audio.currentTime = range.value;
});


volume.addEventListener("input", function () {
    audio.volume = volume.value;
});


song1.addEventListener("click", function () {
    currentSong = 1;
    source.src = "1.mp3";
    audio.load();
    audio.play();
});

song2.addEventListener("click", function () {
    currentSong = 2;
    source.src = "2.mp3";
    audio.load();
    audio.play();
});

song3.addEventListener("click", function () {
    currentSong = 3;
    source.src = "3.mp3";
    audio.load();
    audio.play();
});

song4.addEventListener("click", function () {
    currentSong = 4;
    source.src = "4.mp3";
    audio.load();
    audio.play();
});

audio.addEventListener("ended", function () {

    if (currentSong == 1) {
        currentSong = 2;
        source.src = "2.mp3";
    }
    else if (currentSong == 2) {
        currentSong = 3;
        source.src = "3.mp3";
    }
    else if (currentSong == 3) {
        currentSong = 4;
        source.src = "4.mp3";
    }
    else if (currentSong == 4) {
        currentSong = 1;
        source.src = "1.mp3";
    }

    audio.load();
    audio.play();

});