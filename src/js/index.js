const apiKey = "861494d705ed4c2299b233616242401"

const searchButton = document.querySelector('.btn-search');
searchButton.addEventListener('click', async() => {
    const city = document.getElementById('input-search').value;

    const data = await buscarDadosDeClimaDaCidade(city);

    if(data) escreverDadosNaTabela(data, city)
})

async function buscarDadosDeClimaDaCidade(city){
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=pt`;
    console.log(apiUrl)

    const response = await fetch(apiUrl);

    if(response.status !== 200) return;
    const data = response.json();
    return data;
}

function escreverDadosNaTabela(data, city){

    const temperature = data.current.temp_c;
    const weatherIcon = data.current.condition.icon;
    const weatherCondition = data.current.condition.text;
    const humidity = data.current.humidity;
    const windSpeed = data.current.wind_kph;

    document.getElementById('city').textContent = city;
    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('weather-icon').setAttribute('src', weatherIcon );
    document.getElementById('weather-condition').textContent = weatherCondition;
    document.getElementById('humidity').textContent = `${humidity}%`;
    document.getElementById('wind-speed').textContent = `${windSpeed} km/h`;
}