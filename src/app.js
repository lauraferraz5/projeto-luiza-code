const express = require("express");
const routers = require("./api");
const { sequelize } = require("./models");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();

app.use(express.json());
app.use("/", routers);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

//{ force: true }
sequelize.sync().then(() => {
  console.log("Conectado com o banco com sucesso!");
});

app.listen(process.env.PORT || 3002, () => {
  console.log("Servidor ativo na porta 3002!");
});
