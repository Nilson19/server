'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define('Estudiante', {
    cedula: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    celular: DataTypes.DOUBLE,
    sexo: DataTypes.STRING,
    fechaC: DataTypes.DATE,
    fechaU: DataTypes.DATE
  }, {});
  Estudiante.associate = function(models) {
    // hasMany materias
    Estudiante.hasMany(models.Materia,{
      through: "Matricula", 
      foreignKey: "cedulaEs"
    });
  };
  return Estudiante;
};