const { Model, DataTypes } = require(`sequelize`);
const sequelize = require("../config/sequelize");

class Salle extends Model {}

Salle.init(
  {
    id_salle: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    capacite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Salle", // on declare le nom du model
    tableName: "salle", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);

module.exports = Salle;
