const express = require("express");
const router = express.Router();
const { lista } = require("../models");
const ListaService = require("../services/listas");
const { body, validationResult } = require("express-validator");

const listaService = new ListaService(lista);
router.post("/",
    body("status").not().isEmpty().trim().escape(),
    body("ProdutoId")
        .not()
        .isEmpty()
        // .matches(/\d/)
        .withMessage("Deve ser um id de produto válido!"),
    body("ClienteId")
        .not()
        .isEmpty()
        // .matches(/\d/)
        .withMessage("Deve ser um id de cliente válido!"),
    body("LojaId")
        .not()
        .isEmpty()
        // .matches(/\d/)
        .withMessage("Deve ser um id de loja válido!"),
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
            await listaService.criar(req.body);
            res.status(201).send("Lista criada com sucesso!");
        } catch (erro) {
            res.status(400).send(erro.message);
        }
    }
);


router.put("/:listaId", 

  body("status").not().isEmpty().trim().escape(),

  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let {listaId} = req.params;
    const {status} = req.body;

    try {
        await listaService.atualizarStatus(listaId,status);
        res.status(200).send("Lista atualizada com sucesso!");
    } catch (erro) {
        res.status(400).send(erro.message);
    }
}
  

);


module.exports = router;
