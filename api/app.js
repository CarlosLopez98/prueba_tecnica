const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Cadena para almacenar el texto
let cad = '';

// Rutas
let root = express.Router();

root.get('/', (req, res) => {
    return res.status(200).send("Api para prueba técnica en Creativa. <a href='http://localhost:5500/api'>Ve acá</a>");
})

let router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).send({
        texto: cad
    });
});

router.post('/', (req, res) => {
    // El usuario envia texto para concatenar a la cadena
    let text = req.body.text;

    // Si no se envia nada en la peticion
    if (text == null) {
        return res.status(400).send({
            message: 'No hay contenido nuevo'
        });
    }

    cad += ". " + text;

    return res.status(201).send({
        message: 'Se agrego el texto'
    });
});

app.use('/', root);
app.use('/api', router);

// Exportar el modulo
module.exports = app;
