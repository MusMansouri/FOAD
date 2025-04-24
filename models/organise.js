const { Model, DataTypes } = require("sequelize");
// on declare la const model et dataTypes pour utiliser les types de données
const sequelize = require("../config/sequelize");
const Examen = require("./examen");
const Centre = require("./centre");

// on importe la config de sequelize
class Organise extends Model {}
// on declare la class Organise qui herite de model
Organise.init(
  // on initialise le model
  {
    id_examen: {
      // on declare les champs de la table
      type: DataTypes.INTEGER, // on declare le type dedonnées
      references: {
        model: Examen, // 'Movies' would also work
        key: "id_examen",
      },
    },
    id_centre: {
      // on declare les champs de la table
      type: DataTypes.INTEGER, // on declare le type dedonnées
      references: {
        model: Centre, // 'Movies' would also work
        key: "id_centre",
      },
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Organise", // on declare le nom du model
    tableName: "organisé", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);
module.exports = Organise;
// on exporte le model Organise
