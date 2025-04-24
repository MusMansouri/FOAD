const { Model, DataTypes } = require(`sequelize`);
const sequelize = require("../config/sequelize");
const Salle = require("./salle");

class Examen extends Model {}

Examen.init(
  {
    id_examen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date_debut: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_fin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_salle: {
      type: DataTypes.INTEGER,
      references: {
        model: Salle,
        key: "id_salle",
      },
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Examen", // on declare le nom du model
    tableName: "examen", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);

module.exports = Examen;
