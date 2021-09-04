const sequelize = require("../config/sequelize");
const Sequelize = require("sequelize");

const Produto = require("./produto");
const Cliente = require("./cliente");
const Loja = require("./loja");

const produto = Produto(sequelize, Sequelize.DataTypes);
const cliente = Cliente(sequelize, Sequelize.DataTypes);
const loja = Loja(sequelize, Sequelize.DataTypes);

const db = {
  produto,
  sequelize,
  cliente,
  loja,
};

module.exports = db;
