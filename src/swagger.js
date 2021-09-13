const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/swagger_output.json";
const endpointFiles = ["./src/app.js"];

const doc = {
  info: {
    version: "2.0.0",
    title: "Magalu Produtos API",
    description: "Swagger da API Omni Channel",
  },
  host: "luiza-code-heroku.herokuapp.com",
  basePath: "/",
  schemes: ["https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Produtos",
      description: "Endpoints relacionados a produto;",
    },
    {
      name: "Clientes",
      description: "Endpoints relacionados a clientes;",
    },
    {
      name: "Listas",
      description: "Endpoints relacionados a listas;",
    },
    {
      name: "Lojas",
      description: "Endpoints relacionados a lojas;",
    },
  ],
  definitions: {
    Produtos:
    {
      id: 1,
      produto: "Iphone SE",
      categoria: "celular",
      preco: 1000,
      marca: "Apple",
      createdAt: "2021-09-12T18:34:44.057Z",
      updatedAt: "2021-09-12T18:34:44.057Z"
    },
    NovoCliente:
    {
      $nome: "Cláudia",
      $cpf: "899.444.370-34",
      $rg: "000000",
      $cep: "05036-001",
      cidade: "SP",
      estado: "SP",
      rua: "Navegantes",
      $numero: 2016,
      complemento: "Ap 101",
      createdAt: "2021-09-12T18:34:44.057Z",
      updatedAt: "2021-09-12T18:34:44.057Z"
    },
    AdicionarProduto:
    {
      $clienteId: 2,
      $lojaId: 2,
      $produtoId: 4
    },
    ListarListas:
    {
      id: 1,
      status: "Em andamento",
      createdAt: "2021-09-12T18:36:09.553Z",
      updatedAt: "2021-09-12T18:36:09.553Z",
      ClienteId: 1,
      LojaId: 2
    },
    AtualizarStatus:
    {
      status: "Em andamento"
    }
  }
};

swaggerAutogen(outputFile, endpointFiles, doc);
