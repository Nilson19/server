'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matriculas', {
      cedulaEs: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      materiaID:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false
      },
      profesorID:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
      nota:{
        type: Sequelize.FLOAT,
        allowNull: true
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
    return queryInterface.dropTable('Matriculas');
  }
};