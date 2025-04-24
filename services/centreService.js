const {} = require("sequelize");
// on importe sequelize
const Centre = require("../models/centre");
const Examen = require("../models/examen");
// on importe le model Centre
class CentreService {
  async getAllCentre() {
    // on declare la fonction getAllCentre;
    return await Centre.findAll(
      {
      include: [{ model: Examen, as: "exam" }],
    }
  ); // on renvoie tous les Examinateur
 // on renvoie tous les Centre
  }
  async getCentreById(id) {
    return await Centre.findByPk(id);
  }
  async addCentre(centre) {
    return await Centre.create(centre);
  }
  async updateCentre(centre, id) {
    return await Centre.update(centre, { where: { id_centre: id } });
  }
  async deleteCentreById(id) {
    return await Centre.destroy({ where: { id_centre: id } });
  }
}
module.exports = new CentreService();
// on exporte le service Centre
