'use strict'

//https://plataforma.keepcoding.io/courses/full-stack-keepcoding-bootcamp-web14/lectures/45421432

function Fruta(nombre) {  
    this.nombre = nombre;   
    this.saluda = function() {
        console.log('Hola soy', this.nombre); 
    }
}

const limon = new Fruta ('Limon');

//donde están los paréntesis de ejecución
// mira lo anterior al punto de la izquierda.
// y lo usa como "this" para el método saluda()  min 00:47:00
limon.saluda();

setTimeout(limon.saluda.bind(limon), 2000);