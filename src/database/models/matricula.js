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
  }, {});
  Matricula.associate = function(models) {
    // belongsTo estudiante
    Matricula.belongsTo(models.Estudiante);
    // belongsTo materias
    Matricula.belongsTo(models.Materia);
    // belongsTo profesor
    Matricula.belongsTo(models.Profesor);

  };
  return Matricula;
};