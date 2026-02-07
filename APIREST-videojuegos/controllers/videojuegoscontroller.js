const fs = require('fs');
const Videojuego = require('../model/clase-videojuego');
// FUNCION TODOS
exports.listarTodos = async (req, res) => {

    const videojuegosJson = JSON.parse(fs.readFileSync('./data/videojuegos.json', 'utf-8'));
    const videojuegos = videojuegosJson.map(juego =>
        new Videojuego(juego.id, juego.titulo, juego.genero, juego.platforma, juego.year)
    );

    return res.json(videojuegos);
};

// FUNCION ID
exports.buscarPorId = async (req, res) => {

    const id = parseInt(req.params.id);

    const videojuegosJson = JSON.parse(fs.readFileSync('./data/videojuegos.json', 'utf-8'));
    const videojuegos = videojuegosJson.map(juego =>
        new Videojuego(juego.id, juego.titulo, juego.genero, juego.platforma, juego.year)
    );

    let resultado = null;

    for (let i = 0; i < videojuegos.length; i++) {
        if (videojuegos[i].id === id) {
            resultado = videojuegos[i];
        }
    }

    if (resultado === null) {
        return res.status(404).json({ error: "Videojuego no encontrado" });
    }

    return res.json(resultado);
};

// FUNCION NOMBRE
exports.buscarPorNombre = async (req, res) => {

    const titulo = req.query.titulo;

    if (!titulo) {
        return res.status(400).json({ error: "Debes proporcionar ?titulo=" });
    }

    const videojuegosJson = JSON.parse(fs.readFileSync('./data/videojuegos.json', 'utf-8'));
    const videojuegos = videojuegosJson.map(juego =>
        new Videojuego(juego.id, juego.titulo, juego.genero, juego.platforma, juego.year)
    );

    let filtrados = [];

    for (let i = 0; i < videojuegos.length; i++) {
        const nombre = videojuegos[i].titulo.toLowerCase();
        const buscado = titulo.toLowerCase();

        if (nombre.indexOf(buscado) > -1) {
            filtrados.push(videojuegos[i]);
        }
    }

    return res.json(filtrados);
};

// FUNCION CALCULAR ORDEN
exports.calcularOrden = async (req, res) => {

    const lista = req.body;

    if (!Array.isArray(lista)) {
        return res.status(400).json({ error: "Debes enviar un array JSON" });
    }

    lista.sort(function(a, b) {
        return a.surname.localeCompare(b.surname);
    });

    return res.json(lista);
};

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
            videojuegosFiltrados.push(juego);
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