'use strict';
module.exports = (sequelize, DataTypes) => {
  const Materia = sequelize.define('Materia', {
    codigo: DataTypes.INTEGER,
    escuela: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    creditos: DataTypes.INTEGER,
    fechaC: DataTypes.DATE,
    fechaU: DataTypes.DATE
  }, {});
  Materia.associate = function(models) {
    // hasMany estudiantes
    Materia.hasMany(models.Estudiante,{
      through: "Matricula",
      foreignKey: 'materiaID'
    });
    // hasMany profesores
    Materia.hasMany(models.Profesor,{
      through: "Matricula",
      foreignKey: 'materiaID'
    });
    // belongsTo escuela
    Materia.belongsTo(models.Escuela);
  };
  return Materia;
};