const express = require("express");
const router = express.Router();
const { lista } = require("../models");
const ListaService = require("../services/listas");
const { body, check, validationResult } = require("express-validator");
const cliente = require("../models/cliente");

const listaService = new ListaService(lista);

//Inserir produto e uma lista
router.post("/",
    body("status").not().isEmpty().trim().escape(),
    body("ProdutoId")
        .not()
        .isEmpty()
        .withMessage("Deve ser um id de produto válido!"),
    body("ClienteId")
        .not()
        .isEmpty()
        .withMessage("Deve ser um id de cliente válido!"),
    body("LojaId")
        .not()
        .isEmpty()
        .withMessage("Deve ser um id de loja válido!"),
    async (req, res) => {
        /*
            #swagger.tags = ['Listas']
            #swagger.description = 'Endpoint para inserir produto em uma lista.'
            #swagger.parameters['AdicionarProduto'] = {
                in: 'body',
                description: 'Os ids devem ser conhecidos!',
                required: true,
                type: 'object',
                schema: { $ref: '#/definitions/AdicionarProduto'}
            }
            #swagger.responses[200] = {
                description: 'Produto inserido com sucesso!',
            }
            #swagger.responses[400] = {
                description: 'Todos os campos são obrigatórios!'
            }
        */

        try {
            await listaService.adicionar(req.body);
            res.status(201).send("Produto adicionado à lista com sucesso!");
        } catch (erro) {
            res.status(400).send(erro.message);
        }
    }
);

//Listas todas as listas de um mesmo cliente
router.get("/:clienteId",
    async (req, res) => {
        /*
            #swagger.tags = ['Listas']
            #swagger.description = 'Endpoint para exibir todas as listas de um mesmo cliente.'
            #swagger.responses[200] = {
                description: 'Produto inserido com sucesso!',
                schema: {$ref: "#/definitions/ListarListas"}
            }
            #swagger.responses[400] = {
                description: 'Todos os campos são obrigatórios!'
            }
        */

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { clienteId } = req.params
            const listas = await listaService.get(clienteId);
            res.status(200).send(listas);
        } catch (erro) {
            res.status(400).send(erro.message);
        }
    }
);

//Deletar produto de uma lista
router.delete("/",
    async (req, res) => {
        /*
            #swagger.tags = ['Listas']
            #swagger.description = 'Endpoint para inserir produto em uma lista.'
            #swagger.parameters['AdicionarProduto'] = {
                in: 'body',
                description: 'Os ids devem ser conhecidos!',
                required: true,
                type: 'object',
                schema: { $ref: '#/definitions/AdicionarProduto'}
            }
            #swagger.responses[200] = {
                description: 'Produto removido com sucesso!',
            }
            #swagger.responses[400] = {
                description: 'Todos os campos são obrigatórios!'
            }
        */

        try {
            await listaService.remover(req.body);
            res.status(201).send("Produto removido da lista com sucesso!");
        } catch (erro) {
            res.status(400).send(erro.message);
        }
    }
);

router.put("/:listaId",

    body("status").not().isEmpty().trim().escape(),

    async (req, res) => {
        /*
            #swagger.tags = ['Listas']
            #swagger.description = 'Endpoint para atualizar status de uma lista.'
            #swagger.parameters['AtualizarStatus'] = {
                in: 'body',
                description: 'Atualizar status de uma lista!',
                required: true,
                type: 'object',
                schema: { $ref: '#/definitions/AtualizarStatus'}
            }
            #swagger.responses[200] = {
                description: 'Atualizado com sucesso!',
            }
            #swagger.responses[400] = {
                description: 'Desculpe, tivemos um problema com a requisição!'
            }
        */

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let { listaId } = req.params;
        const { status } = req.body;

        try {
            await listaService.atualizarStatus(listaId, status);
            res.status(200).send("Lista atualizada com sucesso!");
        } catch (erro) {
            res.status(400).send(erro.message);
        }
    }


);

module.exports = router;
