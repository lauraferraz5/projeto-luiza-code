const express = require("express");

const produtosRouter = require("./produtos");
const lojasRouter = require("./lojas");
const clientesRouter = require("./clientes");
const listasRouter = require("./listas")

const router = express.Router();

router.use("/produtos", produtosRouter);
router.use("/lojas", lojasRouter);
router.use("/clientes", clientesRouter);
router.use("/listas", listasRouter)

module.exports = router;
