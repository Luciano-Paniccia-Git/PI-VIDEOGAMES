const {DataTypes, sequelize, Sequelize} = require ('sequelize');

module.exports = (sequelize) => {
    Sequelize.define('genre',{
    name: {
        type: DataTypes.STRING,
    }
},
{timestamps: false}
    
)}