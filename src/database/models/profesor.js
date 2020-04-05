'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profesor = sequelize.define('Profesor', {
    cedula: DataTypes.INTEGER,
    escuela: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    titulo: DataTypes.STRING,
    correo: DataTypes.STRING,
    celular: DataTypes.DOUBLE,
    sexo: DataTypes.STRING,
    fechaC: DataTypes.DATE,
    fechaU: DataTypes.DATE
  }, {});
  Profesor.associate = function(models) {
    // hasMany materias
    Profesor.hasMany(models.Materia,{
      through: "Matricula",
      foreignKey: 'profesorID'
    });
    // belongsTo escuela
    Profesor.belongsTo(models.Escuela);
  };
  return Profesor;
};