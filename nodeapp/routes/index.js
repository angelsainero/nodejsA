var express = require('express');
var router = express.Router();

const {query, validationResult} = require('express-validator')
// es lo mismo que poner: 
// const expressValidator = require('express-validator')
// const query = expressValidator.query

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

//GET recibiendo parametros
router.get('/parametro_en_ruta/:numero', (req, res , next) => {
  console.log(req.params)
  const numero = req.params.numero;
  res.send('me has pedido el numero ' + numero)
});
//GET con parametro opcional
router.get('/parametro_en_ruta/:numero?', (req, res , next) => {
  console.log(req.params)
  const numero = req.params.numero;
  res.send('opcional me has pedido el numero ' + numero)
});

//GET varios parametros, se pueden meter expresiones regulares con ()
router.get('/producto/:nombre/talla/:talla/color/:color', (req, res , next) => {
  const nombre = req.params.nombre;
  const talla = req.params.talla;
  const color = req.params.color;

  res.send(`Me pediste ${nombre} ${talla} ${color}`) 
});


//GET recibiendo parametro query_string 
//http://127.0.0.1:3001/parametro_query_string?talla=35&color=rojo
router.get ('/parametro_query_string', [ //array de validaciones
query('talla').isNumeric().withMessage('debe ser numérico'), //1º
query('color').custom(valor => { //personalizado  //2º
  return valor === 'rojo';
}).withMessage('debe ser rojo')
]
,(req, res, next) => {
  validationResult(req).throw();
  const talla = req.query.talla;
  const color = req.query.color;

  res.send(`me has pedido talla ${talla} y color ${color}`)
})

//POST /enelbody
router.post('/enelbody', (req,res,next) => {

  const altura = req.body.altura;
  const peso = req.body.peso;

  console.log('BODY recibido', req.body)

  res.send(`petición POST recibida con altura ${altura} y peso ${peso}`);
})

module.exports = router;
