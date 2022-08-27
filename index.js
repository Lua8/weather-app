function updateDate(date) {
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayChange = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayChange];

  return `${day} ${hour}:${minutes}`;
}

let hours = document.querySelector(".date-time");
let nowTime = new Date();
hours.innerHTML = updateDate(nowTime);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let fahrenheit = document.querySelector("#temperature");
  fahrenheit.innerHTML = temperature;

  let cityName = document.querySelector("#city");
  let cityOutput = response.data.name;
  cityName.innerHTML = cityOutput;

  let description = document.querySelector(".description");
  description.innerHTML = response.data.weather[0].description;

  let icon = document.querySelector("#icon");
  icon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );

  let humidity = response.data.main.humidity;
  let levelHumidity = document.querySelector("#humidity");
  levelHumidity.innerHTML = humidity;

  let windy = Math.round(response.data.wind.speed);
  let levelWind = document.querySelector("#wind");
  levelWind.innerHTML = windy;
}

function cities(city) {
  let apiKey = "dca6cc88ddd104c61405d706452d9719";
  let units = "imperial";
  let cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(cityUrl).then(showTemperature);
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city-input").value;
  cities(cityInput);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "dca6cc88ddd104c61405d706452d9719";
  let units = "imperial";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let cityInput = document.querySelector("#search-city");
cityInput.addEventListener("submit", searchCity);

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

cities("Ceres");
