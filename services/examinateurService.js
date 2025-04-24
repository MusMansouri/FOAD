const {} = require("sequelize");
// on importe sequelize


const Examinateur = require("../models/examinateur");
const Examen = require("../models/examen");
// on importe le model Examinateur
class ExaminateurService {
  async getAllExaminateurs() {
    // on declare la fonction getAllExaminateur;
    return await Examinateur.findAll({
      include: [{ model: Examen, as: "exam" }],
    }); // on renvoie tous les Examinateur
  }
  async getExaminateurById(id) {
    return await Examinateur.findByPk(id);
  }
  async getExaminateurById(id) {
    return await Examinateur.findByPk(id, {
      include: [{ model: Examen, as: "exam" }],
    });
  }

  async updateExaminateur(examinateur, id) {
    return await Examinateur.update(examinateur, {
      where: { id_examinateur: id },
    });
  }
  async deleteExaminateurById(id) {
    return await Examinateur.destroy({ where: { id_examinateur: id } });
  }
}
module.exports = new ExaminateurService();
// on exporte le service Examinateur
