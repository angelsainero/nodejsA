'use strict';

function creaSumador(numero) {
    //este contexto es accsible SIEMPRE 
    //por la funcion que estamos devolviendo 
    return function(otroNumero) {
        return numero + otroNumero;
    }
}

const sumaSiete = creaSumador(7)
console.log(sumaSiete(10));

//resultado 17

function creaVehiculo(nombre) {
    return {
        getNombre: function() {return nombre},
        setNombre: function(valor) {nombre = valor},
        saluda: function() {console.log('Hola Soy ', nombre)}
    }
}
const coche = creaVehiculo('Seat');

coche.saluda()
coche.setNombre('Ford')
coche.saluda()

