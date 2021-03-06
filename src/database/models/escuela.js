'use strict';
module.exports = (sequelize, DataTypes) => {
  const Escuela = sequelize.define('Escuela', {
    codigo: {
     type: DataTypes.INTEGER,
     primaryKey: true
    },
    nombre: DataTypes.STRING,
    fechaC: DataTypes.DATE,
    fechaU: DataTypes.DATE
  }, {
    timestamps: false
  });
  Escuela.associate = function(models) {
    // hasMany profesores
    Escuela.hasMany(models.Profesor,{
      foreignKey: 'escuela'
    });
    // hasMany materias
    Escuela.hasMany(models.Materia,{
      foreignKey: 'escuela'
    });
  };
  return Escuela;
};