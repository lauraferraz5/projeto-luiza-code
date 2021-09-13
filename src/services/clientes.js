class ClienteService {
  constructor(ClienteModel) {
    this.cliente = ClienteModel;
  }

  async adicionar(cliente) {
    // verifica se já existe cliente com o mesmo cpf
    const consumidor = await this.cliente.findOne({
      where: {
        cpf: cliente.cpf,
      },
    });
    if (consumidor != null) {
      throw new Error("Já existe um cliente cadastrado com esse CPF!");
    }
    try {
      await this.cliente.create(cliente);
    } catch (erro) {
      console.erro(erro.message);
      throw erro;
    }
  }

  async get() {
    const clientes = await this.cliente.findAll();
    return clientes;
  }
}

module.exports = ClienteService;
