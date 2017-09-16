var axios = require('axios');

const OPEN_WEATHER_MAP_URL  ='http://api.openweathermap.org/data/2.5/find?units=metric&appid=0c654bef432cdae691ca6b366e9c730c';
//0c654bef432cdae691ca6b366e9c730c
//api.openweathermap.org/data/2.5/weather?q=London
//http://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=0c654bef432cdae691ca6b366e9c730c

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then((res)=>{
            // if (res.data.cod && res.data.message) {
            //     throw new Error(res.data.message);
            // } else {
                return res.data.list[0].main.temp;
            //}
        }, (res)=>{
            throw new Error(res.data.message);
        })
    }
}