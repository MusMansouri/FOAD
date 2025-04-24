const {} = require("sequelize");
// on importe sequelize
const Salle = require("../models/salle");
// on importe le model Salle
class SalleService {
  async getAllSalle() {
    // on declare la fonction getAllSalle;
    return await Salle.findAll(); // on renvoie tous les Salle
  }
  async getSalleById(id) {
    return await Salle.findByPk(id);
  }
  async addSalle(salle) {
    return await Salle.create(salle);
  }
  async updateSalle(salle, id) {
    return await Salle.update(salle, { where: { id_salle: id } });
  }
  async deleteSalleById(id) {
    return await Salle.destroy({ where: { id_salle: id } });
  }
}
module.exports = new SalleService();
// on exporte le service Centre
