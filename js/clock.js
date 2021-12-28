<<<<<<< HEAD
// Displays the current time, minutes, and seconds.

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
=======
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
<<<<<<< HEAD
setInterval(getClock, 1000); // Run every second.
=======
setInterval(getClock, 1000);
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
