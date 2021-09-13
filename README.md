<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h2 align="center"><b>Luiza code - 3ª edição</b></h2>
    <h3 align="center">Desafio final</h2>

  <p align="center">
    Serviço HTTP parar resolver a funcionalidade de Omni Channel/e-commerce
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#ferramentas-utilizadas">Ferramentas e stack de desenvolvimento</a></li>
      </ul>
    </li>
    <ul>
        <li><a href="#regras-de-negocio">Regras de negócio obrigatórias</a></li>
      </ul>
    </li>
    <li>
      <a href="#instrucoes">Instruções de instalação</a></li>
    <li><a href="#utilizando-a-api">Testando a API</a></li> 
    <li><a href="#equipe">Equipe</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre o projeto
Esse projeto foi desenvolvido no encerramento do curso de aceleração de carreiras focado em Node.js e tem como principal objetivo a construção de um serviço HTTP resolvendo a funcionalidade de 
Omni Channel do cliente. Atendendo e respeitando requisitos e regras de negócio pré-determinados.

### Ferramentas Utilizadas

O projeto foi desenvolvido com auxílios das seguintes ferramentas e stack de desenvolvimento: 

- JavaScript 
- Node.Js
- PostgreSQL
- Express.Js
- Sequelize
- Swagger
- Heroku
- GitHub
- DBeaver
- Visual Studio Code
- Draw.io
- Excel
- Trello


### Regras de Negócio


- O cliente pode adicionar ou remover produtos de seu carrinho;
- Em adicionar: O cliente só poderá comprar UM produto por <b>categoria</b>;
- Enquanto o cliente está no processo de escolhas do produto, sua lista de compras tem o status do tipo <b>em andamento</b>;
- Ao término da compra, o status se altera para compra <b>realizada</b> e e após a retirada do produto, o status se altera para <b> retirado</b>;
- O cliente pode consultar todos os produtos e todas lojas disponíveis, sua lista de compra em andamento e o histórico de as suas listas;


## :book: Instruções Gerais

Para ter acesso à API, faz-se necessário seguir as instruções abaixo: 

1. Clone o repositório do github

```sh
   git clone https://github.com/lauraferraz5/projeto-luiza-code
```

2. Instale todos os módulos necessários 

```sh
    npm install
```

```sh
    npm init
```

```sh
    npm install express
```

```sh
    npm install express-routes
```

```sh
    npm install sequelize pg
```

```sh
    npm run swagger
```

OU SOMENTE:

```sh
    node src/swagger.js
```

6. Executar a API localmente

```sh
    localhost:3002/docs
```

### Endpoints

O cliente poderá ter acesso aos seguintes endpoints:

- Lista de compras
- Produtos
- Lojas

![Endpoints Clientes][endpoints-cliente]

Todos podem acessar a lista de produtos e lojas:

### Rodando aplicação localmente com Swagger

No navegador, digitar <a href=" localhost:3002/docs"> localhost:3002/docs</a>

<!-- CONTACT -->

## Equipe

- [Cláudia Aparicio](https://github.com/ClauApa)
- [Laura Ferraz](https://github.com/lauraferraz5/)
- [Maria Alice](https://github.com/alicemelosousa)
- [Marina Júia](https://github.com/marinajulia)
- [Tamires Lucena](https://github.com/TamiresLucena)

<!-- IMAGES -->


[endpoints-cliente]: images/swagger.png


