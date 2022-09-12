const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
      validate :{
        min:0.0,
        max:5.0,
      }
    },
    image: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    platforms: {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    }
  },
    {
      timestamps: false
    }
);
};

