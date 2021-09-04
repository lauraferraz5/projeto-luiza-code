const produto = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "Produto",
    {
      produto: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preco: {
        type: DataTypes.DOUBLE,
      },
      marca: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "produto",
    }
  );
  return Produto;
};

module.exports = produto;
