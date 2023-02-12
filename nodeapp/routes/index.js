var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.nombre = 'Javier'; 
  res.locals.apellido= 'sainero';
  res.locals.usuarios = [
    {nombre: 'Smith', edad: 34},
    {nombre: 'Brown', edad: 40},
    {nombre: 'john', edad: 36}
  
  ]
  const ahora = new Date();
  res.locals.paridad = ahora.getSeconds() % 2 === 0;
  res.locals.segundoActual = ahora.getSeconds();


  res.render('index', { title: 'Express' });
});

router.get('/angel', (req,res,next) => {
  res.send('soy Angel')
})

module.exports = router;
