const apiKey = '11d59bef83msh7198de6731f32b7p196cc0jsn702408a3a70c';
const apiUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const min_temp = document.getElementById('min_temp');
const max_temp = document.getElementById('max_temp');
const wind_speed = document.getElementById('wind_speed');
const cityName = document.getElementById('cityName'); // Element to display city name

async function fetchWeatherData(city) {
    const url = `${apiUrl}?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // Access and display the properties from the result object
        temp.innerHTML = result.temp;
        humidity.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        cityName.innerHTML = city; // Display the city name

    } catch (error) {
        console.error(error);
    }
}

const submit = document.getElementById('submit');

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('city');
    const cityValue = cityInput.value;
    fetchWeatherData(cityValue);
});

fetchWeatherData("delhi");
