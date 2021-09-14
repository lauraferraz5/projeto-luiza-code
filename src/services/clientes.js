class ClienteService {
  constructor(ClienteModel) {
    this.cliente = ClienteModel;
  }

  async adicionar(cliente) {
    console.log('service')
    // verifica se já existe cliente com o mesmo cpf
    const consumidor = await this.cliente.findOne({
      where: {
        cpf: cliente.cpf,
      },
    });

    if (consumidor != null) {
      throw new Error("Já existe um cliente cadastrado com esse CPF!");
    }
    else {
      console.log('aqui????')
      try {
        console.log(cliente)
        await this.cliente.create(cliente);
      } catch (erro) {
        console.erro(erro.message);
        throw erro;
      }

    }
  }
}

module.exports = ClienteService;
