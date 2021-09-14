
let time = document.querySelector("#date")
let now = new Date();
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[now.getMonth()];

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = days[now.getDay()];

time.innerHTML = `${day} ${month} ${date}, ${hour}:${minutes}, ${year}`;



function celciusTemp(event) {
    event.preventDefault();
    document.querySelector("#temp").innerHTML = temperature;
}

function fahrenheitTemp(event) {
    event.preventDefault();
    document.querySelector("#temp").innerHTML = fahrenheitTemperature;
}

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", fahrenheitTemp);
let temperature = document.querySelector("#temp").textContent;
let fahrenheitTemperature = (temperature * 9) / 5 + 32;

let celcius = document.querySelector("#celcius");
celcius.addEventListener("click", celciusTemp);
temperature = document.querySelector("#temp").textContent;
// Search Engine week 5 Current Location
function showTemp(response) {
    let currentTemp = Math.round(response.data.list[0].main.temp);
    let currentTemperature = document.querySelector("#temp");
    currentTemperature.innerHTML = currentTemp;

    let currentHumid = Math.round(response.data.list[0].main.humidity);
    let humidity = document.querySelector("#humid");
    humidity.innerHTML = `${currentHumid}%`;

    let currentWind = (response.data.list[0].wind.speed) * 100;
    let windSpeed = document.querySelector("#speed");
    windSpeed.innerHTML = currentWind;

    let cityName = response.data.list[0].name;
    let currentCity = document.querySelector("#city-name");
    currentCity.innerHTML = cityName;
}


function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "a3b981fcdb00e192a7a49927e31c8d54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showTemp);
}

function getCurrentposition() {
    navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("#currentbtn");
button.addEventListener("click", getCurrentposition);


function searchTemp(response) {
    let searchTemp = Math.round(response.data.main.temp);
    let searchTemperature = document.querySelector("#temp");
    searchTemperature.innerHTML = searchTemp;

    let searchHumid = Math.round(response.data.main.humidity);
    let searchHumidity = document.querySelector("#humid");
    searchHumidity.innerHTML = `${searchHumid}%`;

    let searchWind = (response.data.wind.speed) * 100;
    let searchSpeed = document.querySelector("#speed");
    searchSpeed.innerHTML = searchWind;
}

function searchCity() {
    event.preventDefault();
    let input = document.querySelector("#city-input");
    let place = document.querySelector("#city-name");
    place.innerHTML = input.value;
    let searchPlace = input.value;
    let apiKeyy = "a3b981fcdb00e192a7a49927e31c8d54";
    let apiUrll = `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=${apiKeyy}&units=metric`
    axios.get(apiUrll).then(searchTemp);

}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);

