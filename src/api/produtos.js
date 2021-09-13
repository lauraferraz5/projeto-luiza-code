const express = require("express");
const router = express.Router();
const { produto } = require("../models");
const ProdutoService = require("../services/produtos");

const produtoService = new ProdutoService(produto);

router.get("/",
  async (req, res) => {
    /*
      #swagger.tags = ['Produtos']
      #swagger.description = 'Endpoint para obter uma lista de produtos.' 
      #swagger.responses[200] = {
        description: 'Produto encontrado!',
        schema: {$ref: "#/definitions/Produtos"}
      }
      #swagger.responses[404] = {
        description: 'Não existem produtos cadastrados!'
      }
      #swagger.responses[400] = {
        description: 'Desculpe, tivemos um problema com a requisição!'
      }
    */
    const produtos = await produtoService.get();
    res.status(200).json(produtos);
  });

module.exports = router;
