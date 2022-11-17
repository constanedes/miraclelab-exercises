'use strict';
/* Para este ejercicio construiremos una aplicacion simple donde almacenaremos una lista de
compras. Debemos usar un arreglo para almacenar los articulos en la lista de compras
Nuestra aplicacion debe tener las siguientes rutas
• GET /items: esto deberia responder con una lista de articulos de compras
• POST /items: esta ruta debe aceptar datos del formulario y agregarlo a la lista de
compras
• GET /items/:id: esta ruta debe mostrar el nombre y el precio de un solo articulo
• PATCH /items/:id: esta ruta debe aceptar la edicion de elementos existentes
• DELETE /items/:id: esta ruta deberia permitirle eliminar un elemento especifico del
arreglo */
const express = require('express');
const { port, host } = require('../../config');
const fs = require('fs');

// asign the port and host to the app 
const app = express();
app.set('port', port);
app.set('host', host);

// get the json file 
const filepath = process.env.FILEPATH || "./items.json";
const rawdata = fs.readFileSync(filepath);
const items = JSON.parse(rawdata);
// middleware to parse json data
app.use(express.json());


// middleware for search item by id 
function searchItemById(req, res, next) {
    if (req.method === 'GET' && !req.params.id) return next();  
    const searched = items.find(item => item.id === parseInt(req.params.id));
    if (!searched) {
        res.status(404).send('Item not found');
    }
    else {
        req.item = searched;
        next();
    }
}
app.all('/items/:id', searchItemById);


// home route
app.get('/', (req, res) => {
    res.send(`Request from ${req.hostname} at ${req.url}`);
});


// write json file with the items
function writeJsonFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.info('The file has been saved!');
    });
}

// get the items or add one to the json
app.route('/items')
    .get((req, res) => {
        res.status(200).send(items);
    })
    .post((req, res) => {
        const { name, price, stock, code, madein } = req.body;
        const newItem = {
            id: items.length + 1,
            name,
            price,
            stock,
            code,
            madein
        };
        items.push(newItem);
        writeJsonFile(filepath, items);
        res.status(201).send(newItem);
    });


// delete, edit and get by id
app.route('/items/:id')
    .get((req, res) => {
        res.status(200).send(req.item);
    })

    .patch((req, res) => {
        for (const key in req.body) {
            req.item[key] = req.body[key];
        }
        res.status(200).send(req.item);
        writeJsonFile(filepath, items);
    })

    .delete((req, res) => {
        items.splice(items.indexOf(req.item), 1);
        res.status(204).end();
        writeJsonFile(filepath, items);
    });


// 404 error handler  
app.use(function (req, res, next) {
    res.status(404).json({ error: 'Page not found' });
});


app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Server running at http://${app.get('host')}:${app.get('port')}/`);
}).on('error', (err) => {
    throw err;
});
