'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Escuelas', {
      codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      nombre:{
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
    return queryInterface.dropTable('Escuelas');
  }
};