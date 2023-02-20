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
agenteSchema.statics.lista = function(filtro, skip, limit){
  const query = Agente.find(filtro);
  query.skip(skip)
  query.limit(limit)
  // ...
  return query.exec()
}


// crear el modelo de Agente
const Agente = mongoose.model("Agentes", agenteSchema);  //lleva pluralizacion

//exportar el modelo
module.exports = Agente;
