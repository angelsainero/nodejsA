const mongoose = require("mongoose");

// definir el esquema de los agentes donde definimos las propiedades para que no se meta basura
const agenteSchema = mongoose.Schema(
  {
    name: String,
    age: { type: Number, min: 18, max: 90 },
  },
  { collection: "agentes" }
);

// TIPOS DE MÉTODOS: 
// Agente.createWithColor('red') --> Método estático
// Agentes.sendEmail({subjet: "assdsd"}) --> Método instancia (no usar arrow functions)

//creamos un modelo que saque lista de agentes
agenteSchema.statics.lista = function(filtro, skip, limit, sort, fields){
  const query = Agente.find(filtro);
  query.skip(skip)
  query.limit(limit)
  query.sort(sort)
  query.select(fields) 
  // ...
  return query.exec()
}

//metodo instancia
agenteSchema.methods.saluda = function () {
  console.log('Hola, soy Agente, ', this.name)
}

// crear el modelo de Agente
const Agente = mongoose.model("Agentes", agenteSchema);  //lleva pluralizacion

//exportar el modelo
module.exports = Agente;
