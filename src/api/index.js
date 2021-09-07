const express = require("express");

const produtosRouter = require("./produtos");
const lojasRouter = require("./lojas");
const clientesRouter = require("./clientes");

const router = express.Router();

router.use("/produtos", produtosRouter);
router.use("/lojas", lojasRouter);
router.use("/clientes", clientesRouter);

module.exports = router;
