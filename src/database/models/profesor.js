'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profesor = sequelize.define('Profesor', {
    cedula: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    escuela: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    titulo: DataTypes.STRING,
    correo: DataTypes.STRING,
    celular: DataTypes.DOUBLE,
    sexo: DataTypes.STRING,
    fechaC: DataTypes.DATE,
    fechaU: DataTypes.DATE
  }, {
    timestamps: false
  });
  Profesor.associate = function(models) {
    // hasMany materias
    Profesor.belongsToMany(models.Materia,{
      through: "Matricula",
      foreignKey: 'profesorID'
    });
    // belongsTo escuela
    Profesor.belongsTo(models.Escuela,{
      foreignKey: 'escuela'
    });
  };
  return Profesor;
};