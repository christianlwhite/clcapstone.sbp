document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'f5d2faf614a425a373566261e86a270d';
    
    // Replace these values with the desired latitude and longitude
    const latitude = '38.25';
    const longitude = '-85.75';

    // Make the API call
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the temperature from the response
            const temperature = data.main.temp;

            // Display the temperature in the HTML
            const temperatureElement = document.getElementById('temperature');
            temperatureElement.textContent = `Temperature: ${temperature} °F`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'f5d2faf614a425a373566261e86a270d';
    
    // Replace these values with the desired latitude and longitude
    const latitude = '38.17';
    const longitude = '-85.63';

    // Make the API call
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the temperature from the response
            const temperature = data.main.temp;

            // Display the temperature in the HTML
            const temperatureElement = document.getElementById('temperature2');
            temperatureElement.textContent = `Temperature: ${temperature} °F`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});