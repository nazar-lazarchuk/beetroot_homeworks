const inputValue = document.querySelector(".weather__city");
const buttonSubmit = document.querySelector(".weather__button");
const infoBlock = document.querySelector(".weather__information");
const requestWeatherBlock = document.querySelector(".weather__get_info");


const getValue = (input) => {
  if (input.value === "") alert("Please enter the city!");
  return input;
};
const getCity = (data) => {
  const city = data.value;
  data.value = "";
  return city;
};
const getCorrectAPI = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14d731286fbfc652c8e7591ce3a999d0`;
};
const getInfo = async (API) => {
  let response = await fetch(API);
  if (response.ok) {
    let json = await response.json();
    return json
  } else {
    alert("Error HTTP: " + response.status);
  }
};
const showInfo =  (info) => {
  requestWeatherBlock.style.display = "none";
  buttonSubmit.style.display = "none";
  info.then(((info) => infoBlock.querySelector('#weather__city').innerText = `Name of city - ${info.name}, ${info.sys.country}`))
  info.then(((info) => infoBlock.querySelector('#weather__temp').innerText = `Temperature - ${Math.round(info.main.temp - 273)} °C`))
  info.then(((info) => infoBlock.querySelector('#weather__mintemp').innerText = `Min temperature - ${Math.floor(info.main.temp_min - 273)} °C`))
  info.then(((info) => infoBlock.querySelector('#weather__maxtemp').innerText = `Max temperature - ${Math.ceil(info.main.temp_max - 273)} °C`))
  info.then(((info) => infoBlock.querySelector('#weather__wind').innerText = `Wind speed - ${Math.round(info.wind.speed * 1.6)} km/h`))
  info.then(((info) => infoBlock.querySelector('#weather__details').innerText = `Description - ${info.weather[0].description} °C`))
  infoBlock.style.display = "block";
  return infoBlock
};


buttonSubmit.onclick = () => {
  return showInfo(getInfo(getCorrectAPI(getCity(getValue(inputValue)))));
};
