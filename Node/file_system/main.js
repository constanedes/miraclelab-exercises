// imports and server config
const fs = require('fs').promises;
const http = require('http');
const { sep, join } = require('path');
const { host, port } = require('../config');

// obtain the path where the json files are stored
const defaultPath = process.env.DEFAULT_PATH || 
join(__dirname, sep + 'api' + sep);

// read the json file and return the contents
async function readFile(fileName) {
    try {
        const file = await fs.readFile(fileName, 'utf8');
        const data = file.toString();
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

// according to the name of the path, get the desired file
http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.end(__dirname);
            break;
        case '/users':
            readFile(defaultPath + 'users.json').then(d => res.end(d));
            break;
        case '/products':
            readFile(defaultPath + 'products.json').then(d => res.end(d));
            break;
        default:
            res.statusCode = 404;
            res.end('Not found');
            break;
    }
})
.listen(port, host , () => {
    console.info(`Server running at http://${host}:${port}/`);
});
