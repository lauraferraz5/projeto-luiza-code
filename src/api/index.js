const express = require("express");

const produtosRouter = require("./produtos");

const router = express.Router();

router.use("/produtos", produtosRouter);

module.exports = router;
