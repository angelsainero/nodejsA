"use strict";
// https://plataforma.keepcoding.io/courses/full-stack-keepcoding-bootcamp-web14/lectures/45421432

//sin cadena de prototipos

/*
function Persona(nombre) {
  this.nombre = nombre;
  this.saluda = function() {console.log('hola soy ',this.nombre )}
}

const pepe = new Persona("Pepe");
pepe.saluda();
*/

//con cadena de prototipos
function Persona(nombre) {
  this.nombre = nombre;
}
const pepe = new Persona("Pepe");
const luis = new Persona("Luis");

//añadir propiedades al prototipo de las personas
Persona.prototype.saluda = function () {
  console.log("hola soy ", this.nombre);
};

pepe.saluda();
luis.saluda();

// Herencia simple-------------------------------
// queremos que un Agente tenga nombre y salude, pero en vez de implementarselo al agente
// queremos que lo herede de la persona
function Agente(nombre) {
  // heredar el constructor de las personas
  // quiero llamar al constructor de las personas con mi this
  Persona.call(this, nombre);
}
// heredar propiedades de las personas
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const smith = new Agente("Smith");
smith.saluda();

// Herencia multiple------------------------------
// Queremos que los agentes hereden de las personas y de otros (superheroe)
function Superheroe() {
  this.vuela = function () {console.log(this.nombre, "Vuela")};
}

// copiar todas las propiedades de los Superheroes al prototipo del Agente (01:56)
Object.assign(Agente.prototype, new Superheroe());
smith.vuela()


//RESULTADO: 
// Smith Vuela
console.log(Agente.prototype)
console.log(Persona.prototype)