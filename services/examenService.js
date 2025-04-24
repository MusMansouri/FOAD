const {} = require("sequelize");
// on importe sequelize
const Examen = require("../models/examen");
const Salle = require("../models/salle");
// on importe le model Examen
class ExamenService {
  async getAllExamens() {
    // on declare la fonction getAllExamen;
    return await Examen.findAll({
      include: [{ model: Salle, as: "salle" }],
    }); // on renvoie tous les Examen
  }
  async getExamenById(id) {
    return await Examen.findByPk(id);
  }
  async addExamen(examen) {
    return await Examen.create(examen);
  }
  async updateExamen(examen, id) {
    return await Examen.update(examen, { where: { id_examen: id } });
  }
  async deleteExamenById(id) {
    return await Examen.destroy({ where: { id_examen: id } });
  }
}
module.exports = new ExamenService();
// on exporte le service Centre
