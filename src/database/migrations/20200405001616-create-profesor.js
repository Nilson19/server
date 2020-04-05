'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profesors', {
      cedula: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      escuela: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nombre:{
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido:{
        type: Sequelize.STRING,
        allowNull: false
      },
      titulo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      correo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      celular:{
        type: Sequelize.STRING,
        allowNull: false
      },
      sexo:{
        type: Sequelize.STRING,
        allowNull: false
      },
      fechaC: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fechaU: {
        allowNull: false,
        type: Sequelize.DATE
      } 
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profesors');
  }
};