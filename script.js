document.addEventListener("DOMContentLoaded", () => {

const enterScreen =
document.getElementById("enter-screen");

const music =
document.getElementById("bgMusic");

const musicToggle =
document.getElementById("musicToggle");

/* ENTER SCREEN */

if(enterScreen){

enterScreen.addEventListener("click", () => {

enterScreen.style.display = "none";

if(music){

music.volume = 0.4;

music.play().catch(err=>{
console.log(err);
});

}

});

}

/* MUSIC TOGGLE */

if(musicToggle && music){

musicToggle.addEventListener("click",()=>{

if(music.paused){

music.play();

musicToggle.textContent =
"🔊 Music ON";

}else{

music.pause();

musicToggle.textContent =
"🔇 Music OFF";

}

});

}

/* TYPING EFFECT */

const typing =
document.getElementById("typing");

const texts = [

"lost somewhere between here and nowhere.",
".gg/revshit",
"messiah",
"kupalside",
"still here."

];

let current = 0;

function updateTyping(){

if(!typing) return;

typing.textContent =
texts[current];

current++;

if(current >= texts.length){

current = 0;

}

}

updateTyping();

setInterval(updateTyping,2500);

/* CLOCK */

const clock =
document.getElementById("clock");

function updateClock(){

if(clock){

clock.textContent =
new Date().toLocaleTimeString();

}

}

updateClock();

setInterval(updateClock,1000);

/* VISITOR COUNTER */

const views =
document.getElementById("views");

let count =
Number(localStorage.getItem("awut_views") || 0);

count++;

localStorage.setItem(
"awut_views",
count
);

if(views){

views.textContent =
String(count).padStart(6,"0");

}

});
