const express = require("express");
const router = express.Router();
const { cliente } = require("../models");
const ClienteService = require("../services/clientes");
const { body, check, validationResult } = require("express-validator");

const clienteService = new ClienteService(cliente);

router.post("/",
  body("nome").not().isEmpty().trim().escape(),
  body("cpf").not().isEmpty().trim().escape(),
  body("cep").not().isEmpty().trim().escape(),
  body("cidade").not().isEmpty().trim().escape(),
  body("estado").not().isEmpty().trim().escape(),
  body("rua").not().isEmpty().trim().escape(),
  check("numero")
    .not()
    .isEmpty()
    .matches(/\d/)
    .withMessage("Deve ser um número válido!"),
  async (req, res) => {
    /*
      #swagger.tags = ['Produtos']
      #swagger.description = 'Endpoint para criar um produto'
      #swagger.parameters['novoProduto] = {
        in: 'body',
        description: 'Informações do produto',
        required: true,
        type: 'object',
        schema: { $ref: '#/definitions/NovoProduto'}
      }
      #swager.responses[201] = {
        description: 'Produto criado com sucesso'
      }
      #swagger.responses[400] = {
        description: 'Nome e preço são obrigatórios'
      }
    */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await clienteService.adicionar(...req.body);
      res.status(201).send("Cliente cadastrado com sucesso!");
    } catch (erro) {
      res.status(400).send(erro.message);
    }
  }
);

module.exports = router;
