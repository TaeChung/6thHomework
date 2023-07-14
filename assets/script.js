var badRequestUrl = 'https://api.github.com/orgs/nodejs/oreps';
var api = "8c007301013778d3a7a4872094689f67"
var responsetext = document.getElementById('response-text');

var buttonEl = document.getElementById("soulsForSale")
var input = document.getElementById("damnation")
var weatherCurrentEl = document.getElementById("weatherCurrent")
console.log(weatherCurrentEl)
var fiveWeatherEl = document.getElementById("fiveWeather")


function getApi(requestUrl) {
    var city = input.value
    var geoURL = "http://api.openweathermap.org/geo/1.0/direct?q="+ city +"&appid="+ api
  fetch(geoURL)
    .then(function (response) {
      console.log(response.status);

      if (response.status !== 200) {

        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {

      console.log(data);
      var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?lat="+data[0].lat+"&lon="+data[0].lon+"&units=imperial&appid=" + api 
      return fetch (currentWeatherURL) 
    })
    .then(function (response){
        if (response.status !== 200) {
            responseText.textContent = response.status;
        }
        return response.json();
        
    })
    .then(function (data){
        console.log(data);
        var temp = document.createElement("p")
        temp.textContent = data.main.temp
        var humidity = document.createElement("p")
        humidity.textContent = data.main.humidity

        var wind = document.createElement("p")
        wind.textContent = data.wind.speed.
        
        weatherCurrentEl.append(temp)
        weatherCurrentEl.append(humidity)
        weatherCurrentEl.append(wind)
        var fiveWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+data.coord.lat+"&lon="+data.coord.lon+"&units=imperial&appid=" + api 
      return fetch (fiveWeatherURL) 
    })
    .then(function (response){
        if (response.status !== 200) {
            responseText.textContent = response.status;
        }
        return response.json();
        
    })
    .then(function (data){
        console.log(data);
        for (let i = 0; i < data.list.length; i+=8) {
            var day = data.list[i]
            console.log (day)

          }
    }) 
    
}


buttonEl.addEventListener("click", getApi)
