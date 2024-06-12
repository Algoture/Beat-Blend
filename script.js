// Declarations
let previous = document.getElementById("previous");
let play = document.getElementById("play");
let next = document.getElementById("next");
let progressBar = document.getElementById("pBar");
let audioElement = new Audio("Songs/Aathma Raama.mp3");
let albumImg = document.getElementById("album");
let named = document.getElementById("songName");
let songIndex = 0;
let canvas = document.getElementById("visualizer");
let hamburger = document.getElementById("hamburger");
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let page = document.getElementById("hampage");
canvas.width = document.querySelector(".box").clientWidth;
progressBar.value = 0;

//Songs Data
let songs = [
  {
    songName: "Aathma Raama",
    filePath: "Songs/Aathma Raama.mp3",
    coverPath:
      "https://c.saavncdn.com/445/Aathma-Raama-Tamil-2022-20220401124604-500x500.jpg",
  },
  {
    songName: "Aigiri Nandini",
    filePath: "Songs/Aigiri Nandini (Brodha V).mp3",
    coverPath:
      "https://c.saavncdn.com/206/Aigiri-Nandini-Tamil-2022-20220401094056-500x500.jpg",
  },
  {
    songName: "The Nights",
    filePath: "Songs/The Nights.mp3",
    coverPath:
      "https://c.saavncdn.com/184/The-Nights-Avicii-By-Avicii-English-2015-500x500.jpg",
  },
  {
    songName: "Dheevara",
    filePath: "Songs/Bahubali Dheevara.mp3",
    coverPath:
      "https://c.saavncdn.com/542/Baahubali-The-Beginning-Telugu-2015-500x500.jpg",
  },
  {
    songName: "Chale Chalo",
    filePath: "Songs/Chale Chalo.mp3",
    coverPath:
      "https://c.saavncdn.com/078/Dev-Hindi-2021-20231013202844-500x500.jpg",
  },
  {
    songName: "Chaleya",
    filePath: "Songs/Chaleya.mp3",
    coverPath:
      "https://c.saavncdn.com/026/Chaleya-From-Jawan-Hindi-2023-20230814014337-500x500.jpg",
  },
  {
    songName: "Paisa Hain Toh",
    filePath: "Songs/Paisa Hai Toh.mp3",
    coverPath:
      "https://c.saavncdn.com/134/Farzi-Original-Series-Soundtrack-Hindi-2023-20230127110223-500x500.jpg",
  },
  {
    songName: "Heeriye",
    filePath: "Songs/Heeriye.mp3",
    coverPath:
      "https://c.saavncdn.com/022/Heeriye-feat-Arijit-Singh-Hindi-2023-20230928050405-500x500.jpg",
  },
  {
    songName: "Inkem Inkem",
    filePath: "Songs/Inkem Inkem.mp3",
    coverPath:
      "https://c.saavncdn.com/237/Geetha-Govindam-Telugu-2018-20180921-500x500.jpg",
  },
  {
    songName: "Azeem O Shaan",
    filePath: "Songs/Azeem O Shaan.mp3",
    coverPath:
      "https://c.saavncdn.com/016/Jodhaa-Akbar-Hindi-2007-20201029165330-500x500.jpg",
  },
  {
    songName: "City Slums",
    filePath: "Songs/City Slums.mp3",
    coverPath:
      "https://c.saavncdn.com/666/City-Slums-For-Hindi--Hindi-2017-20171003052244-500x500.jpg",
  },
  {
    songName: "Dirty South",
    filePath: "Songs/Dirty South.mp3",
    coverPath:
      "https://c.saavncdn.com/936/Dirty-South-Single-English-2020-20200601083243-500x500.jpg",
  },
  {
    songName: "Enjoy Enjaami",
    filePath: "Songs/Enjoy Enjaami.mp3",
    coverPath:
      "https://c.saavncdn.com/562/Enjoy-Enjaami-Tamil-2021-20210305234529-500x500.jpg",
  },
  {
    songName: "GigaChad Theme",
    filePath: "Songs/GigaChad Theme.mp3",
    coverPath:
      "https://c.saavncdn.com/321/GigaChad-Theme-Phonk-House-Version-Slowed-English-2022-20221013174716-500x500.jpg",
  },
  {
    songName: "Can We Kiss Forever",
    filePath: "Songs/Can We Kiss Forever.mp3",
    coverPath:
      "https://c.saavncdn.com/213/Can-We-Kiss-Forever-English-2018-20231003051919-500x500.jpg",
  },
  {
    songName: "Aalochane",
    filePath: "Songs/Aalochane.mp3",
    coverPath: "https://c.saavncdn.com/556/Romeo-Kannada-2012-500x500.jpg",
  },
  {
    songName: "Runaway",
    filePath: "Songs/Runaway.mp3",
    coverPath: "https://c.saavncdn.com/365/Runaway-English-2015-500x500.jpg",
  },
  {
    songName: "Play Date",
    filePath: "Songs/Play Date.mp3",
    coverPath: "https://i1.sndcdn.com/artworks-2ZeKq4hMEMgZ-0-t500x500.jpg",
  },
  {
    songName: "Sage",
    filePath: "Songs/Sage.mp3",
    coverPath:
      "https://c.saavncdn.com/557/Ved-Hindi-2019-20231013202834-500x500.jpg",
  },
  {
    songName: "Shape Of You",
    filePath: "Songs/Shape Of You.mp3",
    coverPath:
      "https://c.saavncdn.com/126/Shape-of-You-English-2017-500x500.jpg",
  },
  {
    songName:"Paon Ki Jutti",
    filePath:"Songs/Paon Ki Jutti.mp3",
    coverPath:"https://c.saavncdn.com/143/Pyaar-Ka-Badla-Punjabi-2024-20240530151725-500x500.jpg",
  },
  {
    songName: "Take It",
    filePath: "Songs/Take It.mp3",
    coverPath: "https://c.saavncdn.com/246/Take-It-English-2017-500x500.jpg",
  },
  {
    songName: "Vaishnavo Jana",
    filePath: "Songs/Vaishnavo Jana To.mp3",
    coverPath:
      "https://c.saavncdn.com/127/Vaishnava-Jana-To-Tamil-2022-20220404124225-500x500.jpg",
  },
  {
    songName: "Tujhe Dekha Toh",
    filePath: "Songs/Tujhe Dekha Toh.mp3",
    coverPath:
      "https://c.saavncdn.com/693/Tujhe-Dekha-To-English-2022-20230925214208-500x500.jpg",
  },
  {
    songName: "Thinbedakano",
    filePath: "Songs/Thinbedakano.mp3",
    coverPath: "https://c.saavncdn.com/112/Lucia-Kannada-2013-500x500.jpg",
  },
  {
    songName: "Gaatiya Ilidu",
    filePath: "Songs/Gaatiya Ilidu.mp3",
    coverPath:
      "https://c.saavncdn.com/419/Ulidavaru-Kandanthe-Kannada-2014-500x500.jpg",
  },
  {
    songName: "Gudilo Madilo",
    filePath: "Songs/Gudilo Madilo Budilo.mp3",
    coverPath: "https://c.saavncdn.com/622/DJ-Telugu-2017-500x500.jpg",
  },
  {
    songName: "In The End",
    filePath: "Songs/In The End.mp3",
    coverPath:
      "https://c.saavncdn.com/374/In-The-End-English-2019-20190320231044-500x500.jpg",
  },
  {
    songName: "Indian Summer",
    filePath: "Songs/Indian Summer.mp3",
    coverPath:
      "https://c.saavncdn.com/155/Indian-Summer-English-2015-20210526092803-500x500.jpg",
  },
  {
    songName: "Khalasi",
    filePath: "Songs/Khalasi.mp3",
    coverPath:
      "https://c.saavncdn.com/140/Khalasi-Coke-Studio-Bharat-Gujarati-2023-20230703053409-500x500.jpg",
  },
  {
    songName: "So Baby",
    filePath: "Songs/So Baby From Doctor.mp3",
    coverPath:
      "https://c.saavncdn.com/312/Doctor-Tamil-2021-20211005133149-500x500.jpg",
  },
  {
    songName: "Holi Re Rasiya",
    filePath: "Songs/Holi Re.mp3",
    coverPath:
      "https://c.saavncdn.com/750/Holi-Re-Rasiya-Hindi-2023-20230219053212-500x500.jpg",
  },
  {
    songName: "Jamal Kudu",
    filePath: "Songs/Jamal Kudu.mp3",
    coverPath:
      "https://c.saavncdn.com/624/Abrar-s-Entry-Jamal-Kudu-From-ANIMAL-Hindi-2023-20231206121002-500x500.jpg",
  },
];

function visualizer() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 128;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  const source = audioContext.createMediaElementSource(audioElement);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  const ctx = canvas.getContext("2d");
  function renderFrame() {
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / bufferLength;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i] / 2;
      ctx.fillStyle = "#F4CE14";
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth + 5;
    }
    requestAnimationFrame(renderFrame);
  }
  renderFrame();
}

function ham(){
  bar1.classList.toggle("positive");
  bar2.classList.toggle("nothing");
  bar3.classList.toggle("negative");
  page.classList.toggle("active");
}  


function secondsToMinutesAndSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }
  var minutes = Math.floor(seconds / 60);
  var seconds = Math.floor(seconds % 60);
  var formattedTime =
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;
  return formattedTime;
}

function updateUI() {
  albumImg.src = songs[songIndex].coverPath;
  audioElement.src = songs[songIndex].filePath;
  named.textContent = songs[songIndex].songName;
}
updateUI();

function playNextSong() {
  songIndex++;
  updateUI();
  audioElement.src = songs[songIndex].filePath;
  audioElement.play();
}

audioElement.addEventListener("ended", () => {
  playNextSong();
});

function progressBarValue() {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
}

next.addEventListener("click", function () {
  if (songIndex >= 32) {
    songIndex = -1;
  }
  songIndex++;
  updateUI();
  audioElement.play();
  play.src = "pause.png";
});

previous.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 33;
  }
  songIndex--;
  updateUI();
  audioElement.play();
  play.src = "pause.png";
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  progressBar.value = progress;
  document.querySelector(
    ".playedTime"
  ).innerHTML = `${secondsToMinutesAndSeconds(audioElement.currentTime)}`;
  document.querySelector(".duration").innerHTML = `${secondsToMinutesAndSeconds(
    audioElement.duration
  )}`;
});

document.addEventListener("contextmenu", (event) => event.preventDefault());

play.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    play.src = "pause.png";
    audioElement.play();
    visualizer();
  } else {
    play.src = "play.png";
    audioElement.pause();
  }
});

progressBar.addEventListener("input", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    event.preventDefault();
    if (audioElement.currentTime === 0 || audioElement.paused) {
      audioElement.play();
      play.src = "pause.png";
    } else {
      audioElement.pause();
      play.src = "play.png";
    }
  }
  if (event.code === "ArrowRight") {
    event.preventDefault();
    var skipAmount = 10;
    var newPosition = audioElement.currentTime + skipAmount;
    if (newPosition < audioElement.duration) {
      audioElement.currentTime = newPosition;
      progressBar.value =
        (audioElement.currentTime / audioElement.duration) * 100;
    }
  }
  if (event.code === "ArrowLeft") {
    event.preventDefault();
    var skipAmount = 10;
    var newPosition = audioElement.currentTime - skipAmount;
    if (newPosition >= 0) {
      audioElement.currentTime = newPosition;
      progressBar.value =
        (audioElement.currentTime / audioElement.duration) * 100;
    } else {
      audioElement.currentTime = 0;
      progressBar.value = 0;
    }
  }
});
