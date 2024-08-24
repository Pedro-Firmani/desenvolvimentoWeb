
const { Model, DataTypes } = require('sequelize');

class Endereco extends Model { }

module.exports = (sequelize) => {
    Endereco.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cep: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logradouro: {
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
        bairro: {
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
        municipioIBGE: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Endereco',
        tableName: 'enderecos',
        timestamps: false,
    });

    return Endereco;
};