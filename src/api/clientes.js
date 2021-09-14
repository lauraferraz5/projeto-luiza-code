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
      #swagger.tags = ['Clientes']
      #swagger.description = 'Endpoint para criar um novo cliente.'
      #swagger.parameters['NovoCliente'] = {
        in: 'body',
        description: 'Informações do cliente',
        required: true,
        type: 'object',
        schema: { $ref: '#/definitions/NovoCliente'}
      }
      #swager.responses[200] = {
        description: 'Cliente criado com sucesso!'
      }
      #swagger.responses[400] = {
        description: 'Nome, CPF, RG, CEP e numero são campos obrigatórios!'
      }
    */
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await clienteService.adicionar(req.body);
      res.status(201).send("Cliente cadastrado com sucesso!");
    } catch (erro) {
      res.status(400).send(erro.message);
    }
  }
);

module.exports = router;
