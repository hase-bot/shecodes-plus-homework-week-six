function showTemperature(response) {
 let cityElement = document.querySelector("#city");
 let temperatureElement = document.querySelector("#temperaturetoday");
 cityElement.innerHTML = response.data.name;
 temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}units=metric`;
  axios.get(`${apiURL}.then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchTextInputElement = document.querySelector("#search-text-input");
  search(searchTextInputElement.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);