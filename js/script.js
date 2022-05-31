let yes;
let no;
const button = document.getElementById("button");

button.addEventListener('click', function () {
  if (button.textContent === "START") {
    console.log("START");
    timer = setInterval(function () {
      let i = Math.floor(Math.random() * 2);
      if (i === 0) {
        if(!no){
          no = new Audio('audio/no.mp3');
        }
        no.muted = false;
        no.play();
        console.log("NO");
      } else if (i === 1) {
        if(!yes){
          yes = new Audio('audio/yes.mp3');
        }
        yes.muted = false;
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
});