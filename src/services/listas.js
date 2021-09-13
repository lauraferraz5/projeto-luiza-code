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
            const prod = await produto.findByPk(produtoId)
            if (prod == null) {
                throw new Error('Este produto não existe!')
            }
            else {
                await lista.addProduto(prod)
            }
        }
        else {
            const prod = await produto.findByPk(produtoId)
            if (prod == null) {
                throw new Error('Este produto não existe!')
            }
            else {
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
        const removido = await lista.removeProduto(prod)
        if (removido == 0) {
            throw new Error('Este produto não existe na lista informada para o cliente informado!')
        }
        else {
            return removido;
        }
    }

    async get(clienteId) {
        const listas = await this.lista.findAll({
            where: {
                ClienteId: clienteId
            }
        });
        if (listas.length == 0) {
            throw new Error('Não existem listas para este cliente!')
        }
        else {
            return listas;
        }
    }

    async atualizarStatus(listaId, status) {
        //verifica o status da lista
        const listaStatus = await this.lista.findOne({
            where: {
                id: listaId,
            },
        });

        if (!listaStatus) {
            throw new Error("Lista não encontrada!");
        }
        if (listaStatus.status != "Em andamento" || listaStatus.status != "Realizada" || listaStatus.status != "Retirada") {
            throw new Error("Status da compra inválido");
        }
        try {

            await this.lista.update({ status: status }, { where: { id: listaId } }); //atualizando o registro c a nova alteração
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }
}

module.exports = ListaService;

