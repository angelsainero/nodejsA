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

module.exports = router;
