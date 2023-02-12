//fichero calculadora.js
"use strict";

console.log("inicializo la calculadora");

//OPCION 1
module.exports = {
    suma: (a,b) => a + b,
    //suma: function(a,b) { return a + b}
    resta: (a,b) => a - b
}

//OPCION 2
// exports es un alias a module.exports
//exports.suma = (a, b) => a + b;
//exports.resta = (a, b) => a - b;

//*****EN npmjs.com HAY MUCHOS MODULOS UTILES */