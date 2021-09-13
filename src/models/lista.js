const lista = (sequelize, DataTypes) => {
  const Lista = sequelize.define(
    "Lista",
    {
      status: {
        type: DataTypes.STRING,
        enum: ["Em andamento", "Realizada", "Retirada"],
        allowNull: false
      },
    },
    {
      tableName: "lista",
    }
  );
  return Lista;
};
module.exports = lista;
