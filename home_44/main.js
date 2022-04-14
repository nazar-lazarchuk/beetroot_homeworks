fetch('http://api.openweathermap.org/data/2.5/weather?id=689558&lang=en&appid=fb38d85502602fcfcb5c71216a074022').then(
    function (resp) {return resp.json() }).then(function (data) {

    document.getElementById("location").textContent = 'City:  ' + data.name;
    document.getElementById("currentTemperature").innerHTML = 'Current temperature:  ' + Math.round(data.main.temp - 273) + '&deg;';
    document.getElementById("description").textContent = 'Description:  ' + data.weather[0]['description'];
    })
    
    .catch(function () {
        alert('Oops something went wrong:)');
});
