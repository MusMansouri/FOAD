const SalleService = require("../services/salleService");
// on importe le service Salle
class SalleController {
  // on declare la classe SalleController
  async getAllSalle(req, res) {
    // on declare la fonction getAllSalles
    try {
      // on declare le try
      const salle = await SalleService.getAllSalle();
      // on declare la const Salles qui va recuperer tous les Salles
      res.json(salle);
      // on renvoie les Salles au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Salles" });
      // on renvoie l'erreur au format json
    }
  }
  async addSalle(req, res) {
    try {
      const salle = await SalleService.addSalle(req.body);
      res.status(201).json(salle);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la Salle" });
    }
  }
  async getSalleById(req, res) {
    try {
      const salle = await SalleService.getSalleById(req.params.id);
      if (!salle) {
        return res.status(404).json({ error: "Salle non trouvé" });
      }
      res.status(201).json(salle);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation de la formnation" });
    }
  }
  async updateSalle(req, res) {
    try {
      const salle = await SalleService.updateSalle(req.body, req.params.id);
      if (!salle) {
        return res.status(404).json({ error: "Salle non trouvé" });
      }
      res.status(201).json(salle);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification du Stagiare" });
    }
  }
  async deleteSalleById(req, res) {
    try {
      const salle = await SalleService.deleteSalleById(req.params.id);
      if (!salle) {
        return res.status(404).json({ error: "Salle non trouvé" });
      }
      res.status(201).json("Salle suprimer avec succes");
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la supression du Salle" });
    }
  }
}
module.exports = new SalleController();
// on exporte la classe SalleController
