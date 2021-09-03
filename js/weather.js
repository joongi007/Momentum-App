const API_KEY = "34361182a4900dc8d8c1e1b23c0d2ee7";

function onGeoOk(posistion){
    const lat = posistion.coords.latitude;
    const lon = posistion.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError(){
    alert("No Weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);