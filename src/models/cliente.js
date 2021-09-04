const cliente = (sequelize, DataTypes) => {
    const Cliente = sequelize.define (
        "Cliente", {
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cpf: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            rg: {
                type: DataTypes.STRING,
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
            tableName: "cliente",
        }
    )
    return Cliente;
}
module.exports = cliente;