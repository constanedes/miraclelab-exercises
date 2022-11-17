const express = require('express');
const app = express();
const host = 'localhost';
const port = 4567;
const home = require('./routes/home');

app.use(express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + '/public/images'));


// Middleware que envia la url solicitada a la consola
app.use((req, res, next) => {
    console.info(req.url + ' ' + new Date().toLocaleString());
    next();
});

// routes
app.use('/', home);

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}`);
})
.on('error', (err) => {
    throw err;
});
