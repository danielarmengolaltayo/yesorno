let yes, no;
const button = document.getElementById("button");
const message = document.getElementById("message");

button.addEventListener('click', function () {
  if (button.textContent === "LOAD") {
    yes = new Howl({
      src: ['audio/yes.mp3']
    });
    no = new Howl({
      src: ['audio/no.mp3']
    });
    message.remove();
    button.textContent = "START"
    button.style.background = "limegreen";
  } else if (button.textContent === "START") {
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
});
