function refreshWeather(response) {
let temperatureElement= document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);
let iconElement = document.querySelector("#icon");


iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
cityElement.innerHTML = response.data.city;
timeElement.innerHTML = formatDate(date);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}`;
temperatureElement.innerHTML = Math.round(temperature);
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;

}


function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes <10) {
     minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;

}




function searchCity(city){
let apiKey = "8db2acdt108befcaed4d3o9902ea6bf1";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}



function handleSearchSubmit(event) {
  event.preventDefault();
  let SearchInput = document.querySelector("#search-form-input");
  
  searchCity(SearchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Maseru")
