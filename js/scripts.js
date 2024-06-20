//variaveis e seleção de elementos
const apiKey = "1b29938ec1a8fac18d5065c84e299b99"
const apiCountryURL = "https://flagsapi.com/png/"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

// funções
const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&leng=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    console.log(data);
}

const showWeatherData = (city) => {
    getWeatherData(city);
}

// eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const city = cityInput.value;

    console.log(city);
})