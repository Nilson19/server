'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Matriculas', {
      cedulaEs: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Estudiantes',
          key: 'cedula'
        }
      },
      materiaID:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model: 'Materias',
          key: 'codigo'
        }
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false
      },
      profesorID:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model: 'Profesores',
          key: 'cedula'
        }
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