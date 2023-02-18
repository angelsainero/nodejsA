const mongoose = require("mongoose");

// definir el esquema de los agentes donde definimos las propiedades para que no se meta basura
const agenteSchema = mongoose.Schema(
  {
    name: String,
    age: { type: Number, min: 18, max: 90 },
  },
  { collection: "agentes" }
);

// crear el modelo de Agente
const Agente = mongoose.model("Agentes", agenteSchema);  //leva pluralizacion

//exportar el modelo
module.exports = Agente;
