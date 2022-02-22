// The weather forecast

// container
const mainContainer = document.createElement("div");
mainContainer.id = "main-container";
mainContainer.style.backgroundImage = 'url("/assets/img/weather-bg.jpg")';
mainContainer.style.padding = "20px";
document.body.prepend(mainContainer);

// Current weather

const city = document.createElement("h1");
city.style.color = "white";
city.style.textDecoration = "underline";
city.className = "weather__city";
mainContainer.appendChild(city);

const forecastNowTitle = document.createElement("h2");
forecastNowTitle.style.color = "yellow";
forecastNowTitle.className = "weather__now";
forecastNowTitle.innerHTML = "Weather now:";
mainContainer.appendChild(forecastNowTitle);

const minTemp = document.createElement("p");
minTemp.className = "weather__forecast";
minTemp.style.color = "white";
mainContainer.appendChild(minTemp);

// variables

let myCity = localStorage.getItem("city"),
    currentTemp = localStorage.getItem("cTemp");

console.log(myCity);
console.log(currentTemp);

if (currentTemp === null) {
    updateLocalStorage();
} else {
    setTimeout(updateLocalStorage(), 7200000);
    alert("!");
}

function updateLocalStorage() {
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?id=689558&lang=en&appid=fb38d85502602fcfcb5c71216a074022"
    )
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            localStorage.setItem("city", data.name);
            localStorage.setItem("cTemp", Math.round(data.main.temp - 273));

            (myCity = localStorage.getItem("city")),
                (currentTemp = localStorage.getItem("cTemp"));

            console.log(myCity);
            console.log(currentTemp);

            city.textContent = myCity;
            minTemp.innerHTML = "Current temperature: " + currentTemp + "&deg;";
        })
        .then(function (timer) {
            setTimeout(updateLocalStorage(), 7200000);
        });
}

city.textContent = myCity;
minTemp.innerHTML = "Current temperature: " + currentTemp + "&deg;";
