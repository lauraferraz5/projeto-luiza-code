const { produto, lista, cliente, loja } = require("../models");
const sequelize = require("../config/sequelize");
const { QueryTypes } = require('sequelize');

class ListaService {

    async adicionar(clienteId, produtoId, lojaId) {

        // Validar Produto -> se ele existe
        const prod = await produto.findByPk(produtoId)
        if (prod == null)
            throw new Error('Este produto não existe!')

        // Validar Cliente -> se ele existe
        const clienteExiste = await cliente.findByPk(clienteId);
        if (clienteExiste == null)
            throw new Error('Este cliente não existe!')

        // Validar loja -> se ela existe
        const lojaExiste = await loja.findByPk(lojaId)
        if (lojaExiste == null)
            throw new Error('Esta loja não existe!')

        //Validar se existe produto da mesma categoria na lista
        const existeCategoriaProd = await sequelize.query(`SELECT p.categoria FROM lista l INNER JOIN produto p ON l."ProdutoId" = p.id WHERE l."ClienteId" = ${clienteId}`)

        if (existeCategoriaProd[1].rowCount > 0) {
            throw new Error('Já existe um produto com esta categoria cadastrado!');
        }

        try {
            await lista.create({ status: 'Em andamento', ProdutoId: produtoId, ClienteId: clienteId, LojaId: lojaId });
            return true;

        } catch (error) {
            throw new Error(`Erro ao inserir na lista de produto: ${error}`);
        }

    }

    async remover(objRemover) {
        const { clienteId, produtoId, lojaId } = objRemover;

        let listaRemover = await lista.findOne({
            where: {
                ClienteId: clienteId,
                LojaId: lojaId,
                ProdutoId: produtoId
            },
        });
        const removido = await lista.destroy({
            where: {
                ClienteId: clienteId,
                LojaId: lojaId,
                ProdutoId: produtoId
            }
        });
        if (removido == 0) {
            throw new Error('Este produto não existe na lista informada para o cliente informado!')
        }
        else {
            return removido;
        }
    }

    async get(clienteId) {
        const listas = await lista.findAll({
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

    async atualizarStatus(listaId, status, clienteId) {
        //verifica o status da lista
        const listaStatus = await lista.findOne({
            where: {
                id: listaId
                // ClienteId: clienteId,
                // LojaId: lojaId,
                // ProdutoId: produtoId
            },
        });

        if (!listaStatus) {
            throw new Error("Lista não encontrada!");
        }
        if (!["Em andamento", "Realizado", "Retirado"].includes(listaStatus.status)) {
            // if (listaStatus.status != "Em andamento" || listaStatus.status != "Realizado" || listaStatus.status != "Retirada") {
            throw new Error("Status da compra inválido");
        }
        try {

            await lista.update({ status: status }, { where: { id: listaId } }); //atualizando o registro c a nova alteração
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }
}

module.exports = ListaService;
