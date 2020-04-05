'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Materia', {
      codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      escuela: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      creditos: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Materia');
  }
};