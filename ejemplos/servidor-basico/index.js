//Cargar librería http
const http = require('http');
//Cargar librería generador de cosas aleatorias 
const Chance=require('chance');

const chance = new Chance();

//Definir un servidor
const servidor = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-type': 'text/html'}); //qutamos el 'text/plain' porque vamos a meter codigo en lo que pinta
    
    response.end(`Wake up, <b>${chance.city()}</b>`);
})

//Arrancar el servidor..
servidor.listen(1337, '127.0.0.1');

//si pones 0.0.0.0 atiende peticiones de todas las ips. 

console.log('Servidor arrancado en http://127.0.0.1:1337');  //para ver en consola que has arrancado el servidor

// npm (node package manager): instala librerías de node.js y herramientas para desarrollar. 
// npx nodemon (npx solo instala temporalmente) (nodemon reinicia el servidor cada vez que hay cambios)

    /*
    nodemon] 2.0.20
    [nodemon] to restart at any time, enter `rs`
    [nodemon] watching path(s): *.*
    [nodemon] watching extensions: js,mjs,json
    [nodemon] starting `node index.js`
    Servidor arrancado en http://127.0.0.1:1337
    */

    // npm init -y crea el package.json
    // npm install chance
    // npm repo chance (te abre en el browser el repo)


