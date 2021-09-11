class ListaService {
    constructor(ListaModel) {
        this.lista = ListaModel;
    }

    async criar(lista) {
        //verificar se o cliente ja tem uma lista em andamento
        const listaCliente = await this.lista.findOne({
            where: {
                status: lista.status,
            },

        });
        if (lista.status === "Em andamento") {
            throw new Error("Já existe uma lista em aberto para esse cliente!");
        }
        try {
            await this.lista.create(lista);
        } catch (erro) {
            console.error(erro.message);
            throw erro;
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

        //VALIDAR TIPO DE STATUS
        // console.log(status)
        // if (status != " ") { 
        //     throw new Error("Status da compra inválido");
        // } else if (status != "Em andamento") { 
        //     throw new Error("Status da compra inválido");
        // } else if (status != "Realizada") { 
        //     throw new Error("Status da compra inválido"); 
        // } else if (status != "Retirada") {
        //     throw new Error("Status da compra inválido"); 
        // }

        try {

            await this.lista.update({
                status: status
            }, {
                where: {
                    id: listaId
                }
            }); //atualizando o registro c a nova alteração
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async adicionarProduto(listaId, ProdutoId) {

        const addProduto = await this.lista.findOne({
            where: {
                id: listaId,
            },

        });

        if (!addProduto) {
            throw new Error("Lista não encontrada!");
        }
        if (addProduto.status != "Em andamento") {
            throw new Error("Carrinho finalizado. Você precisa criar uma nova lista");
        }

        // const categoriaProd = await addProduto.getProdutos({

        //     where: {
        //         ProdutoId: ProdutoId
        //     },

        // });
        // console.log(categoriaProd)
        // if (categoriaProd.length != 0) {
        //     throw new Error("Não é possível adicionar mais de um produto da mesma categoria");
        // }

        try {

            await this.lista.update({
                ProdutoId: ProdutoId
            }, {
                where: {
                    id: listaId
                }
            }); //atualizando o registro c a nova alteração
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

}

module.exports = ListaService;