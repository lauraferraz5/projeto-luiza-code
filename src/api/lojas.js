const express = require("express");
const router = express.Router();
const { loja } = require("../models");
const LojaService = require("../services/lojas");
const { body, check, validationResult } = require("express-validator");

const lojaService = new LojaService(loja);

router.get("/", async (req, res) => {

    const lojas = await lojaService.get();
    res.status(200).json(lojas);
});

module.exports = router;
