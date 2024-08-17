'use  strict'

const { Sequelize } = require("sequelize")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos' , {
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
    })
  },
  down: async(queryInterface, Sequelize) =>{
    await queryInterface.dropTable('enderecos');
  }
}