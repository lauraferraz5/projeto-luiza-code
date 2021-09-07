const express = require("express");
const router = express.Router();
const { produto } = require("../models");
// const ClienteService = require('../services/produtos')
const { body, check, validationResult } = require("express-validator");
