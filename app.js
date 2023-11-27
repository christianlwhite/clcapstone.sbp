// COPYRIGHT
// Get the current year
const currentYear = new Date().getFullYear();

// Get the footer element
const footer = document.getElementById('footer');

// Update the footer with the copyright notice and current year
footer.textContent = `© ${currentYear} Small Batch Productions. All rights reserved.`;
//let today = new Date();
//let year = today.getFullYear();

let el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';

//TEXT AREA COUNTER
function updateCounter() {
  // Get the textarea and counter elements
  const textArea = document.getElementById('comments');
  const counter = document.getElementById('comments-count');

  // Update the counter with the length of the textarea value
  counter.textContent = textArea.value.length;
}


//const textArea = document.getElementById('comments');
//const charactersCount = document.getElementById('comments-count');

//textArea.oninput = () => {
  //let characters = textArea.value;
  //charactersCount.textContent = characters.replace(/\s/g, '').length;
//}

//(function () {
  //let comments      = document.getElementById('comments'); //<textarea> element
  //let commentsCount = document.getElementById('comments-count'); //Character count el

  //addEvent (comments, 'focus', updateCounter);    //call updateCounter() on focus
  //addEvent (comments, 'input', updateCounter);    //call updateCounter() on input

  //addEvent (comments, 'blur', function () {       //On leaving the element
    //if (comments.value.length <= 140) {           //If comments is not too long
      //commentsCount.className = 'hide';           //Hide the counter
    //}
  //});

  //function updateCounter(e) {
    //let target = e.target || e.srcElement;        //Get the terget of the event
    //let count = 140 - target.value.length;        //How many characters are left
    //if (count < 0) {                              //If less than 0 chars free 
      //commentsCount.className = 'error';          //Add class of error
    //} else if (count <= 15) {                     //If less than 15 chars free
      //commentsCount.className = 'warn';           //Add class of warn
    //} else {                                      //Otherwise
      //commentsCount.className = 'good';           //Add class of good
    //}
    //let charMsg = '<b>' + count + '</b>' + ' characters'; //Message to display
    //commentsCount.innerHTML = charMsg;                    //Update the counter element
  //}

//}());

//GOOGLE MAP API
document.getElementById("https://storage.googleapis.com/maps-solutions-4fwv6e5z9f/commutes/b80e/commutes.html").style.textAlign = "center";

//OPENWEATHER API ATTEMPT 1000
// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'f5d2faf614a425a373566261e86a270d';

// API endpoint URL
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=38.25&lon=-85.75&appid=f5d2faf614a425a373566261e86a270d&units=imperial';

c

// Fetch the weather data
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Display the temperature
        weatherDataElement.textContent = `The current temperature is ${data.main.temp}°F.`;
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });

    getWeather()


//OPENWEATHER API
// Replace 'YOUR_API_KEY' with your actual API key
////const apiKey = '112d6625d6f0e03f4707ed6dd2fb9e9c';

// Replace 'CITY_NAME' with the name of the city you want the weather for
//const city = 'LOUISVILLE';

// API endpoint URL
//const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

// Get the element to display the weather data
//const weatherDataElement = document.getElementById('weatherData');

// Fetch the weather data
//fetch(apiUrl)
    //.then(response => response.json())
    //.then(data => {
        // Display the temperature
        //weatherDataElement.textContent = `The current temperature in ${city} is ${data.main.temp}°C.`;
    //})
    //.catch(error => {
        // Handle any errors
        //console.error('Error:', error);
    //});

//API KEY
//const key = "9a6023f646a9435a07796af7375c6296";

//function getWeather(latitude, longitude){
  //let api = "https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}";

  //fetch(api) .then( function(response){
                      //let data = response.json();
                      //return data;
                        //.then ( function(data){
                          //weather.temperature.value = data.main.temp;
                          //weather.description = data.weather[0].icon;
              
              //.then( function(){

                //displayWeather();

              //})            

                        //})

  //})
//}
// SELECT ELEMENTS
//const iconElement = document.querySelector(".weather-icon");
//const tempElement = document.querySelector(".temperature-value p");
//const descElement = document.querySelector(".temperature-description p");
//const notificationElement = document.querySelector(".notification");

//Data
//const weather = {};

//weather.temperature = {
  //unit : "farenheight"
//}

//CHECK IF BROWSER SUPPORTS GEOLOCATION
//if("geolocation" in navigator){
  //navigator.geolocation.getCurrentPosition(setPosition, showError);
//else{
  //notificationElement.style.display = "block";
  //notificationElement.innerHTML = "<p>Browser doesn't support geolocation</p>";
//}

// SET USER LOCATION
//function setPosition(position){
  //let latitude = position.coords.latitude;
  //et longitude = position.coords.longitude;

  //getWeather(latitude, longitude);
//}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
//function showError(error){
  //notificationElement.style.display = "block";
  //notificationElement.innerHTML = "<p> ${error.message} </p>";
//}

// GET WEATHER FROM API PROVIDER
//function getWeather(latitude, longitude){
  //let api = "https://api.openweathermap.org/data/2.5/weather?lat=38.25&lon=-85.76&appid=9a6023f646a9435a07796af7375c6296&units=imperial";

  //fetch(api);
    //.then(function(response){
      //let data = response.json();
      //return data;
    //})
    //.then(function(data){
      //weather.temperature.value = (data.main.temp);
      //weather.description = dataWeather[0].description;
      //weather.iconId - data.weather[0].icon;
    //})
    //.then(function(){
      //displayWeather();
    //});
  //}

  // DISPLAY WEATHER TO UI
  //function displayWeather(){
    //iconElement.innerHTML = '<img src="icons/${weather.iconId}.png"/>';
    //tempElement.innerHTML = '${weather.temperature.value}°<span>F</span>';
    //descElement.innerHTML = weather.description;
  //}
