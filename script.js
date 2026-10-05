const enterScreen = document.getElementById("enter-screen");
const music = document.getElementById("bgMusic");

enterScreen.addEventListener("click", () => {

  enterScreen.style.display = "none";

  music.volume = 0.35;

  music.play();

});

/* Typing Animation */

const lines = [
  "lost somewhere between here and nowhere.",
  ".gg/kupalside",
  "messiah",
  "revshit",
  "still here."
];

let current = 0;

function updateTyping() {

  const typing = document.getElementById("typing");

  if (!typing) return;

  typing.textContent = lines[current];

  current++;

  if (current >= lines.length) {
    current = 0;
  }

}

updateTyping();

setInterval(updateTyping, 2500);

/* Clock */

function updateClock() {

  const clock = document.getElementById("clock");

  if (!clock) return;

  clock.textContent =
    new Date().to
