const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tipo', {
      ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
     autoIncrement:true,
     
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     
  }, 
    {
      timestamps: false, // removes timestamps from table. ( createdAt, updatedAt)
    },
    
    );
};