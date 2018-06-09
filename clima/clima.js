const axios = require('axios');


let getClima = async(lat, lng) => {
    let resp = await axios(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b52c703858526c77c8d696fb1ae20aa2&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}