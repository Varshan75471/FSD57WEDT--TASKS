const cities = ['Tokyo', 'New York', 'London', 'Paris', 'Mumbai']; // List of cities

const fetchWeather = (city) => {
    const apiKey = '4c2a4a75612e854c42cfc43698ab9e07'; // Your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a new div to hold each city's weather info
            const weatherDiv = document.createElement('div');
            weatherDiv.className = 'weather-card'; // Optional styling class

            weatherDiv.innerHTML = `
                <h3>${data.name}</h3>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            `;
            
            // Append the weather info to the main container
            document.getElementById('weather').appendChild(weatherDiv);
        })
        .catch(err => {
            console.error('Error fetching weather data for', city, err);
        });
};

// Fetch weather for all cities in the array
const fetchAllCitiesWeather = () => {
    cities.forEach(city => fetchWeather(city)); // Call fetchWeather for each city
};

// Call the function on page load
window.onload = fetchAllCitiesWeather;
