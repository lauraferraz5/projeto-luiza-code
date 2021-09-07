const express = require("express");
const router = express.Router();
const { lista } = require("../models");
const ListaService = require("../services/listas");
const { body, check, validationResult } = require("express-validator");

const listaService = new ListaService(lista);
router.post("/",
    body("status").not().isEmpty().trim().escape(),
    check("produtoId")
        .not()
        .isEmpty()
        .matches(/\d/)
        .withMessage("Deve ser um id de produto válido!"),
    check("clienteId")
        .not()
        .isEmpty()
        .matches(/\d/)
        .withMessage("Deve ser um id de cliente válido!"),
    check("lojaId")
        .not()
        .isEmpty()
        .matches(/\d/)
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
            await listaService.adicionar(...req.body);
            res.status(201).send("Produto adicionado à lista com sucesso!");
        } catch (erro) {
            res.status(400).send(erro.message);
        }
    }
);


// router.get("/:clienteId", async (req, res) => {
//     const { id } = req.params;
//     const listas = await listaService.get(id);
//     res.status(200).json(listas);
// });



// router.delete("/:produtoId", async (req, res) => {

// });

module.exports = router;
