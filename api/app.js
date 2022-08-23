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
let router = express.Router();

router.get('/api', (req, res) => {
    return res.status(200).send({
        texto: cad
    });
});

router.post('/api', (req, res) => {
    let text = req.params.text;

    // Si no se envia nada en la peticion
    if (text == null) {
        return res.status(400).send({
            message: 'No hay contenido nuevo'
        })
    }
});

// Exportar el modulo
module.exports = app;
