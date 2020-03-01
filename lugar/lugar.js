/* He tenido que utilizar el módulo axios-https-proxy-fix, pq con axios me estaba dando un error */

const axios = require('axios-https-proxy-fix');


const getLugarLatLong = async (paramdir) =>{


    let dir= encodeURI( paramdir);

    console.log(`direccion: ${dir}`);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        proxy: {
            host: '180.205.18.15',
            port: 80,
        },
        headers: {'x-rapidapi-key': '4936ba7f3emshf4aa21eff45d627p105c79jsn8511a2610eb6',
                    'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error (`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports ={
    getLugarLatLong
}