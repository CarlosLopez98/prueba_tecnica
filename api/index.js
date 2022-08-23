const app = require('./app');
const port = 5500;

app.listen(port, () => {
    console.log("Servidor corriendo en: http://localhost:5500");
});
