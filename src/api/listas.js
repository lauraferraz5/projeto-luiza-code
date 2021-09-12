const express = require("express");
const router = express.Router();
const { lista } = require("../models");
const ListaService = require("../services/listas");
const { body, check, validationResult } = require("express-validator");
const cliente = require("../models/cliente");

const listaService = new ListaService(lista);

//Inserir produto e uma lista
router.post("/",
    async (req, res) => {
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
        const { clienteId } = req.params
        /*
          #swagger.tags = ['Listas']
          #swagger.description = 'Endpoint para obter todas as lista de um cliente' 
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
        const listas = await listaService.get(clienteId);
        res.status(200).json(listas);
    }
);

//Deletar produto de uma lista
router.delete("/",

    async (req, res) => {
        try {
            await listaService.remover(req.body);
            res.status(201).send("Produto removido da lista com sucesso!");
        } catch (erro) {
            res.status(400).send(erro.message);
        }
    }
);

module.exports = router;
