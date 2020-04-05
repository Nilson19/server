'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estudiante = sequelize.define('Estudiante', {
    cedula: {
      type: DataTypes.INTEGER,
      primaryKey : true
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    celular: DataTypes.DOUBLE,
    sexo: DataTypes.STRING,
    fechaC: DataTypes.DATE,
    fechaU: DataTypes.DATE
  }, {
    timestamps: false
  });
  Estudiante.associate = function(models) {
    // hasMany materias
    Estudiante.belongsToMany(models.Materia,{
      through: "Matricula", 
      foreignKey: "cedulaEs"
    });
  };
  return Estudiante;
};