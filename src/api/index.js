const express = require("express");

const produtosRouter = require("./produtos");
const lojasRouter = require("./lojas");

const router = express.Router();

router.use("/produtos", produtosRouter);
router.use("/lojas", lojasRouter);

module.exports = router;
