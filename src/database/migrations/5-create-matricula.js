'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matriculas', {
      cedulaEs: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{
          model: 'Estudiantes',
          key: 'cedula'
        }
      },
      materiaID:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{
          model: 'Materia',
          key: 'codigo'
        }
      },
      grupo:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false
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
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Matriculas');
  }
};