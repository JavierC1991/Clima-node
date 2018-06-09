const axios = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;


let getInfo = async(direccion) => {
    try {
        let coors = await axios.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El Clima para la ciudad ${direccion} es ${temp}`;
    } catch (error) {
        console.log(error);
    }
}


getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(error => console.log(error));