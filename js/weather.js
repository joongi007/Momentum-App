// Show the weather using openweathermapi

function onGeoOk(posistion) {
    const lat = posistion.coords.latitude;
    const lon = posistion.coords.longitude;

    // Call "openweathermapapi" using "serverless"
    const url = `https://my-api-server.netlify.app/.netlify/functions/weather?lat=${lat}&lon=${lon}`
    fetch(url).then(response => response.json()).then(data => {
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