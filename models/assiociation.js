const Examen = require("./examen");
const Examinateur = require("./examinateur");
const Organise = require("./organise");
const Centre = require("./centre");
const Salle = require("./salle");

///////////////////
Examinateur.hasMany(Examen, { as: "exam", foreignKey: "id_examen" });
Examen.belongsTo(Examinateur, { as: "exam", foreignKey: "id_examen" });
///////////////
Centre.belongsToMany(Examen, {
  through: "Organise",
  as: "exam",
  foreignKey: "id_examen",
});
Examen.belongsToMany(Centre, {
  through: "Organise",
  as: "centre",
  foreignKey: "id_centre",
});
////////////////
Examen.hasOne(Salle, { as: "salle", foreignKey: "id_salle" });
Salle.belongsTo(Examen, { as: "salle", foreignKey: "id_salle" });

module.exports = {
  Examen,
  Examinateur,
  Centre,
  Salle,
  Organise,
};
