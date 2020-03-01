
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la que quiero obtener el clima',
        demand: true
    }
}).argv;

let dir = argv.direccion;


const getInfo = async ( direccion ) => {

    try{
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClimaLatLong(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp.temp}`;
    }
    catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(dir)
    .then(console.log)
    .catch(console.log);