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
        // unique: true,   // quando não é único, precisa colocar falso ou não coloca unique?
        allowNull: false,
      },
      preco: {
        type: DataTypes.DOUBLE,
      },
      marca: {
        type: DataTypes.STRING,
        // unique: true,
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
