<<<<<<< HEAD
// Show the weather using openweathermapi

const API_KEY = "34361182a4900dc8d8c1e1b23c0d2ee7";

function onGeoOk(posistion) {
    const lat = posistion.coords.latitude;
    const lon = posistion.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
=======
const API_KEY = "34361182a4900dc8d8c1e1b23c0d2ee7";

function onGeoOk(posistion){
    const lat = posistion.coords.latitude;
    const lon = posistion.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

<<<<<<< HEAD
function onGeoError() {
=======
function onGeoError(){
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    alert("No Weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);