const express = require('express');
const router = express.Router();
const variableVJ1 = require('../controllers/videojuegoscontroller');

router.get('/pc', variableVJ1.llistaVideojocsPC);
router.get('/movil', variableVJ1.llistaVideojocsMovil);
router.get('/consola', variableVJ1.llistaVideojocsConsola);

module.exports = router;