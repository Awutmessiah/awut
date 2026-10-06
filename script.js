document.addEventListener("DOMContentLoaded", () => {

  const enterScreen = document.getElementById("enter-screen");
  const music = document.getElementById("bgMusic");

  if (enterScreen) {

    enterScreen.addEventListener("click", async () => {

      enterScreen.style.opacity = "0";

      setTimeout(() => {
        enterScreen.style.display = "none";
      }, 500);

      if (music) {
        try {
          music.volume = 0.35;
          await music.play();
        } catch (err) {
          console.log("Music blocked:", err);
        }
      }

    });

  }

  const lines = [
    "lost somewhere between here and nowhere.",
    ".gg/kupalside",
    "messiah",
    "revshit",
    "still here."
  ];

  const typing = document.getElementById("typing");

  let current = 0;

  function updateTyping() {

    if (!typing) return;

    typing.textContent = lines[current];

    current++;

    if (current >= lines.length) {
      current = 0;
    }

  }

  updateTyping();

  setInterval(updateTyping, 2500);

  const clock = document.getElementById("clock");

  function updateClock() {

    if (!clock) return;

    clock.textContent =
      new Date().toLocaleTimeString();

  }

  updateClock();

  setInterval(updateClock, 1000);

  const viewsElement =
    document.getElementById("views");

  let views =
    Number(localStorage.getItem("awut_views") || 0);

  views++;

  localStorage.setItem("awut_views", views);

  if (viewsElement) {

    viewsElement.textContent =
      String(views).padStart(6, "0");

  }

});
