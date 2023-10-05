import axios from "axios";
function changeCity(event) {
  event.preventDefault();
  let newCity = document.querySelector("#weather-location");
  newCity.innerHTML = locationSearch.value;
  let units = "imperial";
  let apiKey = "6010503ffcf1560b8aef47f39758b9ba";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationSearch.value}&units=${units}&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#weather-description");
  description.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windSpeedElement = Math.round(document.querySelector("#wind-speed"));
  windSpeedElement.innerHTML = response.data.wind.speed;
  //let uvIndexElement = document.querySelector("#uv-index");
}

let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
if (hours < 10) {
  hours = `0${hours}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = days[now.getDay()];
let time = `${hours}:${minutes}`;
let dateAndTime = document.querySelector("#date-and-time");
dateAndTime.innerHTML = `${weekday}, ${time}`;

let locationSearch = document.querySelector("#city-search");
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);

//let fTemp = document.querySelector("#fahrenheit-link");
//fTemp.addEventListener("click", convertToF);
//let cTemp = document.querySelector("#celcius-link");
//cTemp.addEventListener("click", convertToC);

let currentLocationButton = document.querySelector("#current-location-btn");
