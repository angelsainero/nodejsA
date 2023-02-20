const express = require("express");
const router = express.Router();
const Agente = require("../../models/Agente");

// cuando reciba un GET a /api/agentes
// devuelve una lista de agentes
router.get("/", async (req, res, next) => {
  try {
    const agentes = await Agente.find();
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

module.exports = router;
