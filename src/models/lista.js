const lista = (sequelize, DataTypes) => {
  const Lista = sequelize.define(
    "Lista",
    {
      status: {
        type: DataTypes.STRING,
        enum: ["Em andamento", "Realizada", "Retirada"],
        allowNull: false
      },
      ProdutoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "produto",
          key: "id",
        },
      },
      ClienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "cliente",
          key: "id",
        },
      },
      LojaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "loja",
          key: "id",
        },
      },
    },
    {
      tableName: "lista",
    }
  );
  return Lista;
};
module.exports = lista;
