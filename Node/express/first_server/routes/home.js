const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + 'public/index.html');
});

router.get('/yo', (req, res) => {
    res.send('Hola!');
});

router.get('/gamelab', (req, res) => {
    res.sendFile(__dirname + '/public/images/gamelab.png');
});

module.exports = router;