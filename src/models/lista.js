const lista = (sequelize, DataTypes) => {
  const Lista = sequelize.define(
    "Lista",
    {
      status: {
        type: DataTypes.STRING,
        enum: ["Em andamento", "Realizada", "Retirada"],
      },
      produtoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "produto",
          key: "id",
        },
      },
      clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "cliente",
          key: "id",
        },
      },
      lojaId: {
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
