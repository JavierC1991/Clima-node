const axios = require('axios');


let getLugarLatLng = async(direccion) => {
    let encodeURL = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyD1ZApVMVh6UXSPaKOHKCV5xIUpUHQ5OBY`);
    if (resp.data.status === 'ZERO_RESULTS') {
        return new Error('No se encontro la ciudad');

    }
    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}


module.exports = {
    getLugarLatLng
}