const lista = (sequelize, DataTypes) => {
    const Lista = sequelize.define(
        "Lista", {
            status: DataTypes.STRING,
            enum: ["Em andamento", "Realizada", "Retirada"],
        },
        {
            tableName: "lista",
        }
    )
    return Lista;
}
module.exports = lista;