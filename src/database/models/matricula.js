'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matricula = sequelize.define('Matricula', {
    cedulaEs: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    materiaID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    grupo: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    nota: DataTypes.FLOAT,
    fechaC: DataTypes.DATE,
    fechaU: DataTypes.DATE
  }, {
    timestamps: false
  });
  Matricula.associate = function(models) {
    // belongsTo estudiante
    Matricula.belongsTo(models.Estudiante,{
      foreignKey: 'cedulaEs'
    });
    // belongsTo materias
    Matricula.belongsTo(models.Materia,{
      foreignKey: 'materiaID'
    });

  };
  return Matricula;
};