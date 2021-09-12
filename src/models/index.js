const sequelize = require("../config/sequelize");
const Sequelize = require("sequelize");

const Produto = require("./produto");
const Cliente = require("./cliente");
const Loja = require("./loja");
const Lista = require("./lista");

const produto = Produto(sequelize, Sequelize.DataTypes);
const cliente = Cliente(sequelize, Sequelize.DataTypes);
const loja = Loja(sequelize, Sequelize.DataTypes);
const lista = Lista(sequelize, Sequelize.DataTypes);


lista.belongsTo(cliente)
lista.belongsTo(loja)

lista.belongsToMany(produto, { through: 'lista_produto' });
produto.belongsToMany(lista, { through: 'lista_produto' });


const db = {
  produto,
  sequelize,
  cliente,
  loja,
  lista,
};

module.exports = db;
