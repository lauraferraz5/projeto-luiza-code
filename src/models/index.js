const sequelize = require("../config/sequelize");
const Sequelize = require("sequelize");

const Produto = require("./produto");

const produto = Produto(sequelize, Sequelize.DataTypes);

const db = {
  produto,
  sequelize,
};

module.exports = db;
