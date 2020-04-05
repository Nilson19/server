'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matricula = sequelize.define('Matricula', {
    cedulaEs: DataTypes.INTEGER,
    materiaID: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    profesorID: DataTypes.STRING,
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
    // belongsTo profesor
    Matricula.belongsTo(models.Profesor,{
      foreignKey: 'profesorID'
    });

  };
  return Matricula;
};