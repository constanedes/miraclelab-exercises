// imports and server config
const http = require('http');
const fs = require('fs/promises'); 
const { parse } = require('url');
const { sep, join } = require('path'); 
const { port, host } = require('../config'); 

const filePath = join(__dirname, sep + 'html' + sep);

// converts the request url to the corresponding file name
function parseFile(route) {
    const fileName = route.substring(1);
    const joinedFileName = path.join(fileName + '.html');
    return joinedFileName;
}

// check if a file exists in the html folder
async function fileExists(file) {
    try {
        await fs.access(filePath + file, fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }
}

// get html file from path constant
async function getFile(file, res) { 
    try {
        const fileContent = await fs.readFile(filePath + file, 'utf8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fileContent);
    } catch (err) {
        res.writeHead(500);
        res.end('500 Internal server error');
    }
}

//? UPDATE: now the server will load any existing html file that has a name equal to the pathname
// evaluate the request and send the corresponding response
async function handleRequest(req, res) {
    const pathname = parse(req.url, true).pathname;
    if (pathname === '/') {
        getFile('home.html', res);
    }
    else {
        const file = parseFile(pathname);
        if (await fileExists(file)) {
            getFile(file, res);
        } else {
            res.writeHead(404);
            res.end('404 Not found');
        }      
    }
}
    
// initialize server
http.createServer(handleRequest)
.listen(port, host, () => {
    console.info(`Server running at http://${host}:${port}/`);
})
.on('error', (err) => {
    throw err;
});
