const { Model, DataTypes } = require(`sequelize`);
const sequelize = require("../config/sequelize");
const Examen = require("./examen");

class Examinateur extends Model {}

Examinateur.init(
  {
    id_examinateur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_examen: {
      type: DataTypes.INTEGER,
      references: {
        model: Examen,
        key: "id_examen",
      },
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Examinateur", // on declare le nom du model
    tableName: "examinateur", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);

module.exports = Examinateur;

// Examinateur.hasOne(Examen, { as: "exam", foreignKey: "id_examen" });
// Examen.belongsTo(Examinateur, { as: "examinateur", foreignKey: "id_examen" });
