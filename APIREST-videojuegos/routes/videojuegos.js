const express = require('express');
const router = express.Router();
const variableVJ1 = require('../controllers/videojuegoscontroller');

router.get('/pc', variableVJ1.listarVideojuegosPC);
router.get('/movil', variableVJ1.listarVideojuegosMovil);
router.get('/consola', variableVJ1.listarVideojuegosConsola);
router.get('/', variableVJ1.listarTodos);
router.get('/:id', variableVJ1.buscarPorId);
router.get('/buscar/nombre', variableVJ1.buscarPorNombre);

module.exports = router;