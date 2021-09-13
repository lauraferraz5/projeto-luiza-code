<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h2 align="center"><b>Luiza Code - 3ª edição</b></h2>
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

O projeto foi desenvolvido com auxílio das seguintes ferramentas e stack de desenvolvimento:

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
- Enquanto o cliente está no processo de escolha do produto, sua lista de compras tem o status do tipo <b>em andamento</b>;
- Ao término da compra, o status se altera para compra <b>realizada</b> e e após a retirada do produto, o status se altera para <b> retirada</b>;
- O cliente pode consultar todos os produtos e todas as lojas disponíveis, sua lista de compra em andamento e o histórico de suas listas;

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

3. Execute

```sh
    npm run swagger
```

```sh
    npm start
```

4. Acesse a API localmente

```sh
No browser:
    localhost:3002/docs
```

### Endpoints

O cliente poderá ter acesso aos seguintes módulos e seus endpoints:

![Endpoints Clientes][endpoints-cliente]

<!-- CONTACT -->

## Equipe

Turma 1 - Equipe E - Grupo: <b>DevsDivas</b>

- [Cláudia Aparicio](https://github.com/ClauApa)
- [Laura Ferraz](https://github.com/lauraferraz5/)
- [Maria Alice](https://github.com/alicemelosousa)
- [Marina Júlia](https://github.com/marinajulia)
- [Tamires Lucena](https://github.com/TamiresLucena)

<!-- IMAGES -->

[endpoints-cliente]: images/swagger-completo.jpeg
