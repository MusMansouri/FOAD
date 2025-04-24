const { Model, DataTypes } = require(`sequelize`);
const sequelize = require("../config/sequelize");

class Centre extends Model {}

Centre.init(
  {
    id_centre: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    adresse: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Centre", // on declare le nom du model
    tableName: "centre", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);

module.exports = Centre;
