const lines = [
  "lost somewhere between here and nowhere.",
  "@dailywithawut",
  "awutmessiah.",
  "developer.",
  "still here."
];

let index = 0;

function updateTyping(){
  document.getElementById("typing").textContent =
  lines[index];

  index = (index + 1) % lines.length;
}

setInterval(updateTyping,2500);
updateTyping();

function updateClock(){
  document.getElementById("clock").textContent =
  new Date().toLocaleTimeString();
}

setInterval(updateClock,1000);
updateClock();

const key = "awut_views";

let views =
Number(localStorage.getItem(key) || 0) + 1;

localStorage.setItem(key, views);

document.getElementById("views").textContent =
String(views).padStart(6,"0");
