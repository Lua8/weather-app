let now = new Date();
let date = document.querySelector(".date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
date.innerHTML = days[now.getDay()];

let hours = document.querySelector(".time");
let hour = now.getHours();
let minute = now.getMinutes();
hours.innerHTML = `${hour}:${minute}`;

function cities(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city-input");
  let cityName = document.querySelector("div.city");
  if (cityInput.value) {
    cityName.innerHTML = cityInput.value;
  }
}
let button = document.querySelector("#search-city");
button.addEventListener("submit", cities);

function changeCelcius() {
  let cLink = document.querySelector(".temperature");
  cLink.innerHTML = "37";
}
let cDegree = document.querySelector("#celciusDegree");
cDegree.addEventListener("click", changeCelcius);

function changeFahrenheit() {
  let fLink = document.querySelector(".temperature");
  fLink.innerHTML = "98";
}
let fDegree = document.querySelector("#fahrenheitDegree");
fDegree.addEventListener("click", changeFahrenheit);
