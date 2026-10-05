const lines = [
  "lost somewhere between here and nowhere.",
  ".gg/kupalside",
  "messiah",
  "revshit",
  "still here."
];

/* Typing Text */
let index = 0;

function updateTyping() {
  const typing = document.getElementById("typing");

  if (!typing) return;

  typing.textContent = lines[index];

  index = (index + 1) % lines.length;
}

setInterval(updateTyping, 2500);
updateTyping();

/* Clock */
function updateClock() {
  const clock = document.getElementById("clock");

  if (!clock) return;

  clock.textContent = new Date().toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

/* Visitor Counter */
const key = "awut_views";

let views = Number(localStorage.getItem(key) || 0) + 1;

localStorage.setItem(key, views);

const viewsElement = document.getElementById("views");

if (viewsElement) {
  viewsElement.textContent =
    String(views).padStart(6, "0");
}

/* Music + Enter Screen */
const enterScreen =
  document.getElementById("enter-screen");

const music =
  document.getElementById("bgMusic");

if (enterScreen && music) {

  enterScreen.addEventListener("click", () => {

    music.volume = 0.35;

    music.play().catch(() => {
      console.log("Music blocked by browser.");
    });

    enterScreen.style.opacity = "0";

    setTimeout(() => {
      enterScreen.style.display = "none";
    }, 500);

  });

}
