const axios = require("axios");
const api = {
    getWeatherByCity: function (city, apiKey) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=imperial");
    },
    getWeatherForecast: function(lat,lon,apiKey){
        return axios.get("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude={'+'}&appid="+apiKey+"&units=imperial");
    }
}
export default api;