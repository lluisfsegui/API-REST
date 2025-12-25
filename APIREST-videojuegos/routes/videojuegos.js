const express = require('express');
const router = express.Router();
const variableVJ1 = require('../controllers/videojuegoscontroller');

router.get('/pc', variableVJ1.listarVideojuegosPC);
router.get('/movil', variableVJ1.listarVideojuegosMovil);
router.get('/consola', variableVJ1.listarVideojuegosConsola);

module.exports = router;