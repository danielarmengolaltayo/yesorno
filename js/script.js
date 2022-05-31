const yes = new Audio('audio/yes.mp3');
const no = new Audio('audio/no.mp3');
const button = document.getElementById("button");
let timer;

function startStop() {
  if (button.textContent === "START") {
    console.log("START");
    timer = setInterval(function () {
      let i = Math.floor(Math.random() * 2);
      if (i === 0) {
        no.play();
        console.log("NO");
      } else if (i === 1) {
        yes.play();
        console.log("YES");
      } else {
        console.log("ERROR");
      }
    }, 1000);
    button.textContent = "STOP";
    button.style.background = "red";
  } else if (button.textContent === "STOP") {
    console.log("STOP");
    clearInterval(timer);
    button.textContent = "START"
    button.style.background = "limegreen";
  }

}
