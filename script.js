function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  document.getElementById("clock").textContent = time;
}

function updateViews() {
  const key = "xyzawut_views";
  let views = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, views);
  document.getElementById("views").textContent =
    String(views).padStart(6, "0");
}

updateClock();
setInterval(updateClock, 1000);
updateViews();
