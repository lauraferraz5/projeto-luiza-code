const { produto } = require("../models");
const sequelize = require("../config/sequelize");
const { QueryTypes } = require('sequelize');
const lista = require("../models/lista");

class ListaService {
    constructor(ListaModel) {
        this.lista = ListaModel;
    }

    async adicionar({ clienteId, produtoId, lojaId }) {
        let lista = await this.lista.findOne({
            where: {
                ClienteId: clienteId,
                LojaId: lojaId,
                status: 'Em andamento'
            },
        });
        if (lista == null) {
            lista = await this.lista.create({ ClienteId: clienteId, LojaId: lojaId, status: 'Em andamento' })
            const prod = await produto.findByPk(produtoId) //produto que quero colocar na lista
            await lista.addProduto(prod)
        }
        else {
            const prod = await produto.findByPk(produtoId)
            const categ = prod.dataValues.categoria
            const idlista = lista.dataValues.id
            const existeProd = await sequelize.query(`SELECT FROM lista_produto AS LP INNER JOIN produto AS P ON LP."ProdutoId" = P.id WHERE LP."ListumId" = ${idlista} AND P.categoria = '${categ}';`)
            const existe = existeProd[1].rowCount;
            if (!existe) {
                await lista.addProduto(prod)
            }
            else {
                throw new Error(`Já existe em sua lista um produto dessa categoria: ${categ}!`);
            }
        }
    }

    async remover({ clienteId, produtoId, lojaId }) {
        let lista = await this.lista.findOne({
            where: {
                ClienteId: clienteId,
                LojaId: lojaId,
                status: 'Em andamento'
            },
        });
        const prod = await produto.findByPk(produtoId)
        await lista.removeProduto(prod)
    }

    async get(clienteId) {
        const listas = await this.lista.findAll({
            where: {
                ClienteId: clienteId
            }
        });
        return listas;
    }
}

module.exports = ListaService;

