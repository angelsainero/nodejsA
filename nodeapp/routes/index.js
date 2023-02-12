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

//recibiendo parametros
router.get('/parametro_en_ruta/:numero', (req, res , next) => {
  console.log(req.params)
  const numero = req.params.numero;
  res.send('me has pedido el numero ' + numero)
});
// con parametro opcional
router.get('/parametro_en_ruta/:numero?', (req, res , next) => {
  console.log(req.params)
  const numero = req.params.numero;
  res.send('opcional me has pedido el numero ' + numero)
});

//varios parametros, se pueden meter expresiones regulares con ()
router.get('/producto/:nombre/talla/:talla/color/:color', (req, res , next) => {
  const nombre = req.params.nombre;
  const talla = req.params.talla;
  const color = req.params.color;

  res.send(`Me pediste ${nombre} ${talla} ${color}`)

  
});


module.exports = router;
