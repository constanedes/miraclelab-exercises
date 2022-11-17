/* 2. Realiza un script ejecutable que nos muestre la información de los terremotos acontecidos
en la última hora
• Fuente de datos
• Ejemplo llamada JSON
• Requisitos:
– Debemos utilizar párametros cuando se ejecute para definir la magnitud de los
terremotos que queremos
– Si no se detecta el parámetro…la aplicación debe cerrarse
– Si el parametro es incorrecto también
– Ajustaremos la petición http en función del parámetro */
const http = require('http');
const { port, host } = require('../config');
const args = process.argv.slice(2);
const argsInfo  = [
    {
        name: 'minmag',
        typeof: 'number',
        min: -1,
        max: 10,
        value: Number(args[0]) || null
    },
]

function evalArgs(arg) {
    //? if the argument are valid, the msg will be empty
    let msg = '';
    const mag = arg[0];
    if (mag.value.length === 0 || mag.value === null) {
        msg = 'No arguments';
    }
    if (mag.typeof !== typeof mag.value) {
        msg = 'Argument type is not valid';
    }
    if (mag.value < mag.min || mag.value > mag.max) {
        msg = 'Argument value is not valid';
    }
    console.info(msg);
    msg !== '' ? process.exit(1) : null;
    return  mag.value;
}

const mag = evalArgs(argsInfo);

//? en este caso se filtran los terremotos de los ultimos 7 dias, ya que quedaban pocos filtrando la ultima hora
//* se puede cambiar la funcion getDate() para que filtre los terremotos de la ultima hora 
function getDate() {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString().split('T')[0];
}

async function getEarthquakes(res, mag = undefined) {
    try {
        const url = `http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${getDate()}&minmagnitude=${mag}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        res.status(500).send({ error: 'Unexpected error' });
    }
}
   
http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            const eqMinMag =  getEarthquakes(res, mag);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            eqMinMag.then(data => res.end(JSON.stringify(data, null, 2)));
            break;
    }

}).listen(port, host, () => {
    console.info(`Server running at http://${host}:${port}/`);
});
