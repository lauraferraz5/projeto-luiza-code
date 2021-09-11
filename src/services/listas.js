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
        if (listaStatus.status !="Em andamento" || listaStatus.status !="Realizada" || listaStatus.status !="Retirada") {  
            throw new Error("Status da compra inválido"); 
        }
        try {
            
          await this.lista.update({status:status}, {where:{id:listaId}}); //atualizando o registro c a nova alteração
        } catch (erro) {
          console.error(erro.message);
          throw erro;
        }
      }


}

module.exports = ListaService;

