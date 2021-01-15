// Archivo de rutas del servidor.
const { Router } = require('express');
const router = Router();

// Ruta principal del servidor.
router.get('/', (req, res) => {
  res.render('index');
})



// Otras rutas...





module.exports = router;
