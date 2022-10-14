const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
      ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
     autoIncrement:true,
     
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     Vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
     Ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      Defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      Velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      Altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
      Peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    IMG: {
      type: DataTypes.STRING,
       
    },
  }, 
    {
      timestamps: false, // removes timestamps from table. ( createdAt, updatedAt)
    },
    
    );
};
