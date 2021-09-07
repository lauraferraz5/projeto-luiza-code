const { produto } = require("../models");

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
        }
        const prod = await produto.findByPk(produtoId)
        await lista.addProduto(prod)
    }
}

module.exports = ListaService;

