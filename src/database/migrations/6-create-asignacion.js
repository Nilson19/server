'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Asignacions', {
      materiaID: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'Materia',
          key: 'codigo'
        }
      },
      profesorID: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: 'Profesors',
          key: 'cedula'
        }
      },
      grupo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      fechaC: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fechaU: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Asignacions');
  }
};