'use strict';
// crear una función para usarla como constructor de objetos

function Fruta(nombre) {
    // this = {}
    this.nombre = nombre;
    // this = {nombre: 'limon'}
    this.saluda = function() {
        console.log('Hola soy', this.nombre);
    // this = {nombre: 'limon', saluda: Function}

    }//this simboliza el objeto que se está creando 
}

const limon = new Fruta ('limon'); 
console.log(limon);
limon.saluda();