'use strict';
module.exports = (sequelize, DataTypes) => {
  const Asignacion = sequelize.define('Asignacion', {
    materiaID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    profesorID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    grupo: DataTypes.INTEGER,
    fechaC: DataTypes.DATE,
    fechaU: DataTypes.DATE
  }, {
    timestamps: false
  });
  Asignacion.associate = function(models) {
    // belongsTo materia
    Asignacion.belongsTo(models.Materia,{
      foreignKey: 'materiID'
    });
    // belongsTo profesores
    Asignacion.belongsTo(models.Profesor,{
      foreignKey: 'profesorID'
    });
  };
  return Asignacion;
};