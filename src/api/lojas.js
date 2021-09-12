const express = require("express");
const router = express.Router();
const { loja } = require("../models");
const LojaService = require("../services/lojas");

const lojaService = new LojaService(loja);

router.get("/",
  async (req, res) => {
    /*
      #swagger.tags = ['Lojas']
      #swagger.description = 'Endpoint para obter todas as lojas disponíveis.' 
      #swagger.responses[200] = {
        description: 'Lojas encontradas'
      }
      #swagger.responses[404] = {
        description: 'Lojas não encontradas'
      }
      #swagger.responses[400] = {
        description: 'Desculpe, tivemos um problema com a requisição'
      }
    */
    const lojas = await lojaService.get();
    res.status(200).json(lojas);
  });

module.exports = router;
