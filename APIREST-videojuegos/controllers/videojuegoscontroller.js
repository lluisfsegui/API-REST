const fs = require('fs');
const Videojuego = require('../model/clase-videojuego');
// FUNCION PC
exports.listarVideojuegosPC = async (req, res) => {

    const videojuegosJson = JSON.parse(fs.readFileSync('./data/videojuegos.json', 'utf-8'));
    const videojuegos = videojuegosJson.map(juego =>
        new Videojuego(juego.id, juego.titulo, juego.genero, juego.platforma, juego.year)
    );

    let videojuegosFiltrados = [];

    for (let i = 0; i < videojuegos.length; i++) {
        const juego = videojuegos[i];

        if (juego.platforma.indexOf("PC") > -1) {
            videojuegosFiltrats.push(juego);
        }
    }

    return res.json(videojuegosFiltrados);
};

// FUNCION MOVIL
exports.listarVideojuegosMovil = async (req, res) => {

    const videojuegosJson = JSON.parse(fs.readFileSync('./data/videojuegos.json', 'utf-8'));
    const videojuegos = videojuegosJson.map(juego => new Videojuego(juego.id, juego.titulo, juego.genero, juego.platforma, juego.year));

    let filtrados = [];
    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].platforma.indexOf("Movil") > -1) {
            filtrados.push(videojuegos[i]);
        }
    }

    return res.json(filtrados);
};

// FUNCION CONSOLA
exports.listarVideojuegosConsola = async (req, res) => {

    const videojuegosJson = JSON.parse(fs.readFileSync('./data/videojuegos.json', 'utf-8'));
    const videojuegos = videojuegosJson.map(juego =>
        new Videojuego(juego.id, juego.titulo, juego.genero, juego.platforma, juego.year)
    );

    let filtrados = [];
    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].platforma.indexOf("Consola") > -1) {
            filtrados.push(videojuegos[i]);
        }
    }

    return res.json(filtrados);
};