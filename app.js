// COPYRIGHT 
let today = new Date();
let year = today.getFullYear();

let el = document.getElementById('footer');
///el.innerHTML = '<p>Copyright &copy;' + year + '</p>';


//GOOGLE MAP API
document.getElementById("https://storage.googleapis.com/maps-solutions-4fwv6e5z9f/commutes/b80e/commutes.html").style.textAlign = "center";

//API KEY
const key = "9a6023f646a9435a07796af7375c6296";

function getWeather(latitude, longitude){
  let api = "https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}";

  fetch(api) .then( function(response){
                      let data = response.json();
                      return data;
                        .then ( function(data){
                          weather.temperature.value = data.main.temp;
                          weather.description = data.weather[0].icon;
              
              .then( function(){

                displayWeather();

              })            

                        })

  })
}
// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const notificationElement = document.querySelector(".notification");

//Data
const weather = {};

weather.temperature = {
  unit : "farenheight"
}

//CHECK IF BROWSER SUPPORTS GEOLOCATION
if("geolocation" in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
else{
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser doesn't support geolocation</p>";
}

// SET USER LOCATION
function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p> ${error.message} </p>";
}


// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
  let api = "https://api.openweathermap.org/data/2.5/weather?lat=38.25&lon=-85.76&appid=9a6023f646a9435a07796af7375c6296&units=imperial";

  fetch(api);
    .then(function(response){
      let data = response.json();
      return data;
    })
    .then(function(data){
      weather.temperature.value = (data.main.temp);
      weather.description = dataWeather[0].description;
      weather.iconId - data.weather[0].icon;
    })
    .then(function(){
      displayWeather();
    });
  }

  // DISPLAY WEATHER TO UI
  function displayWeather(){
    iconElement.innerHTML = '<img src="icons/${weather.iconId}.png"/>';
    tempElement.innerHTML = '${weather.temperature.value}°<span>F</span>';
    descElement.innerHTML = weather.description;
  }


