const {Sequelize, DataType, Model, DataTypes} = require('sequelize');
const Sequelize = new Sequelize ('sqlite::memory:');

class Endereco extends Model {}

const Endereco = Sequelize.define({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            alownull: false,
        },
        cep: {
            type: DataTypes.STRING,
            alownull: false,
        },
        logadouro: {
            type: DataTypes.STRING,
            alownull: false,
        },
        numero: {
            type: DataTypes.INTEGER,
            alownull: false,
        },
        complemento: {
            type: DataTypes.STRING,
        },
        bairro: {
            type: DataTypes.STRING,
            alownull: false,
        },
        cidade: {
            type: DataTypes.STRING,
            alownull: false,
        },
        estado: {
            type: DataTypes.STRING,
            primaryKey: true,
            alownull: false,
        },
        municipioIBGE: {
            type: DataTypes.INTEGER,
            alownull: false,
        },
        //atributos do model são definidos aqui
        //alowNull = para ver se tem nulo ou n
    }, {
        sequelize,
        modelName: 'Endereco',
        tableName: 'enderecos', // nome da tabela
        timestamps: true,
});