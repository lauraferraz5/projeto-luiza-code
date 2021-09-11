const express = require("express");
const router = express.Router();
const { produto } = require("../models");
const ProdutoService = require("../services/produtos");

const produtoService = new ProdutoService(produto);

router.get("/", async (req, res) => {
  /*
    #swagger.tags = ['Produtos']
    #swagger.description = 'Endpoint parra obter uma lista de produto' 
    #swagger.responses[200] = {
      schema: { $ref: "#/definitions/Produto"},
      description: 'Produto encontrado'
    }
    #swagger.responses[404] = {
      description: 'Produto não encontrado'
    }
    #swagger.responses[400] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }
  */
  const produtos = await produtoService.getProdutos();
  res.status(200).json(produtos);
});

module.exports = router;
