const express = require ('express')
const router = express.Router();
const Agente=require('../../models/Agente')


// cuando reciba un GET a /api/agentes
router.get('/', async (req,res,next) =>{
    try {
        const agentes = await Agente.find()
        res.json({results: agentes})
        
    } catch (error) {
    next(error)    
    }
})
module.exports = router;

