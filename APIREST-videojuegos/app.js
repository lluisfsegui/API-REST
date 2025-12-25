var express = require('express');
var app = express();
const videojuegosRoutes = require('./routes/videojuegos');

app.use('/api/videojuegos', videojuegosRoutes);

app.use(express.json());

app.listen(8080, () => {
    console.log('Servidor funcionando en http://localhost:8080');
});