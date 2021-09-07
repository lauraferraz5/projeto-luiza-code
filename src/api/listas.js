const express = require("express");
const router = express.Router();
const { lista } = require("../models");
const ListaService = require("../services/listas");
const { body, check, validationResult } = require("express-validator");

const listaService = new ListaService(lista);
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


// router.get("/:clienteId", async (req, res) => {
//     const { id } = req.params;
//     const listas = await listaService.get(id);
//     res.status(200).json(listas);
// });



// router.delete("/:produtoId", async (req, res) => {

// });

module.exports = router;
