document.addEventListener("DOMContentLoaded", () => {

const enterScreen =
document.getElementById("enter-screen");

const music =
document.getElementById("bgMusic");

enterScreen.addEventListener("click", () => {

enterScreen.style.display = "none";

if(music){

music.volume = 0.4;

music.play().catch(error=>{
console.log(error);
});

}

});

const typing =
document.getElementById("typing");

const texts = [
"lost somewhere between here and nowhere.",
".gg/revshit",
"messiah",
"BNG?",
"still here."
];

let current = 0;

setInterval(()=>{

typing.textContent = texts[current];

current++;

if(current >= texts.length){
current = 0;
}

},2500);

const clock =
document.getElementById("clock");

function updateClock(){

clock.textContent =
new Date().toLocaleTimeString();

}

updateClock();

setInterval(updateClock,1000);

const views =
document.getElementById("views");

let count =
localStorage.getItem("awut_views") || 0;

count++;

localStorage.setItem(
"awut_views",
count
);

views.textContent =
String(count).padStart(6,"0");

});
