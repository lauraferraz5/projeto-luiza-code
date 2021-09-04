const loja = (sequelize, DataTypes) => {
    const Loja = sequelize.define (
        "Loja", {
            nome: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            cep: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cidade: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rua: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            numero: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            complemento: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "loja",
        }
    )
    return Loja
}
module.exports = loja