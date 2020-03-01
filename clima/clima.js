/* He tenido que utilizar el módulo axios-https-proxy-fix, pq con axios me estaba dando un error */

const axios = require('axios-https-proxy-fix');
const lugar = require('../lugar/lugar');

const getClimaLatLong = async (lat, lng) =>{


    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=159949fddfbc2fa6b2479965ac421a97&units=metric`,
        proxy: {
            host: '180.205.18.15',
            port: 80,
        }
    });

    const resp = await instance.get();


    const data = resp.data;
    const temp = data.main.temp;
    const temp_min = data.main.temp_min;
    const temp_max = data.main.temp_max;

    return {
        temp,
        temp_min,
        temp_max
    }
}

module.exports ={
    getClimaLatLong
}