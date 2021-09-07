class LojaService {
    constructor(LojaModel) {
        this.loja = LojaModel;
    }

    async get() {
        const lojas = await this.loja.findAll();
        return lojas;
    }

    // async adicionar(LojaDTO) {
    //     // verifica se já existe produto com o mesmo nome
    //     const produto = await this.produto.findOne({
    //         where: {
    //             nome: produtoDTO.nome,
    //         },
    //     });
    //     if (produto != null) {
    //         throw new Error("Já existe um produto cadastrado com esse nome!");
    //     }
    //     try {
    //         await this.produto.create(produtoDTO);
    //     } catch (erro) {
    //         console.erro(erro.message);
    //         throw erro;
    //     }
    // }
}

module.exports = LojaService;
