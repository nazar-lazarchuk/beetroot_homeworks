// The weather forecast

// container
const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
mainContainer.style.backgroundImage = 'url("/assets/img/weather-bg.jpg")';
mainContainer.style.padding = "20px";
document.body.prepend(mainContainer);

// Current weather

const city = document.createElement('h1');
city.style.color = 'white';
city.style.textDecoration = 'underline';
city.className = 'weather__city';
mainContainer.appendChild(city);

const forecastNowTitle = document.createElement('h2');
forecastNowTitle.style.color = 'yellow';
forecastNowTitle.className = 'weather__now';
forecastNowTitle.innerHTML = 'Weather now:';
mainContainer.appendChild(forecastNowTitle);

const minTemp = document.createElement('p');
minTemp.className = 'weather__forecast';
minTemp.style.color = 'white';
mainContainer.appendChild(minTemp);

const descr = document.createElement('p');
descr.className = 'weather__desc';
descr.style.color = 'white';
mainContainer.appendChild(descr);

fetch('http://api.openweathermap.org/data/2.5/weather?id=689558&lang=en&appid=fb38d85502602fcfcb5c71216a074022').then(
    function (resp) {return resp.json() }).then(function (data) {

    document.querySelector('.weather__city').textContent = data.name;
    document.querySelector('.weather__forecast').innerHTML = 'Current temperature:  ' + Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.weather__desc').textContent = 'Description:  ' + data.weather[0]['description'];
    })
    
    .catch(function () {
        alert('Smth have gone wrong! Call to the lazy progger');
});
