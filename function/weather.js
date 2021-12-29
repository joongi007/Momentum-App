exports.handler = async function (event, context) {
    const params = JSON.parse(event.body);
    const { lat, lon } = params;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WM_API_KEY}&units=metric`;

    let weather, city;
    fetch(url).then(response => response.json()).then(data => {
        weather = data.name;
        city = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
    return {
        statusCode: 200,
        body: JSON.stringify({ weather: weather, city:city })
    };
}