const express = require("express");
const router = express.Router();
const Agente = require("../../models/Agente");


// CRUD: Create, read, update, delete

// cuando reciba un GET a /api/agentes
// devuelve una lista de agentes
router.get("/", async (req, res, next) => {
  try {
    //filtros
    const filtreByAge= req.query.age;
    const filtreByName = req.query.name;
    //paginacion
    const skip = req.query.skip;
    //limit
    const limit = req.query.limit;

    const filtro = {}

    if (filtreByAge) {  //este if permite o no poner filtro
      filtro.age = filtreByAge
    }
        
    if (filtreByName) {  //este if permite o no poner filtro
      filtro.name = filtreByName
    }
    const agentes = await Agente.lista(filtro, skip, limit);

    res.json({ results: agentes });
  } catch (error) {
    next(error);
  }
});
//https://plataforma.keepcoding.io/courses/full-stack-keepcoding-bootcamp-web14/lectures/45581462  00:38:00
//metodo que devuelva 1 agente buscando por _id
// GET /api/agentes/(_id)
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const agente = await Agente.findById(id);
    res.json({ results: agente });
  } catch (error) {
    next(error);
  }
});

// PUT /api/agentes/:(id) (body)
// Actualizar un agente

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const agenteActualizado = await Agente.findByIdAndUpdate(id, data, {
      new: true,
    }); //los metodos que actualizan devuelven el doc antes, de ahí new:true
    res.json({ result: agenteActualizado });
  } catch (error) {
    next(error);
  }
});

// POST /api/agentes (body)
// Crea un agente
router.post("/", async (req, res, next) => {
  try {
    const agenteData = req.body;
    //creamos una instancia de Agente
    const agente = new Agente(agenteData);
    
    //la persistimos en la BD
    const agenteGuardado = await agente.save();
    
    res.json({ result: agenteGuardado });

  } catch (error) {
    next(error);
  }
});

// DELETE /api/agentes/:(id)
// Borra un agente
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    await Agente.deleteOne({_id: id}); 
    res.json();

  } catch (error) {
    next(error);
  }
});

module.exports = router;
