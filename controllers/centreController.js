const CentreService = require("../services/centreService");
// on importe le service Centre
class CentreController {
  // on declare la classe CentreController
  async getAllCentre(req, res) {
    // on declare la fonction getAllCentres
    try {
      // on declare le try
      const centre = await CentreService.getAllCentre();
      // on declare la const Centres qui va recuperer tous les Centres
      res.json(centre);
      // on renvoie les Centres au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Centres" });
      // on renvoie l'erreur au format json
    }
  }
  async addCentre(req, res) {
    try {
      const centre = await CentreService.addCentre(req.body);
      res.status(201).json(centre);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la Centre" });
    }
  }
  async getCentreById(req, res) {
    try {
      const centre = await CentreService.getCentreById(req.params.id);
      if (!centre) {
        return res.status(404).json({ error: "Centre non trouvé" });
      }
      res.status(201).json(centre);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation de la formnation" });
    }
  }
  async updateCentre(req, res) {
    try {
      const centre = await CentreService.updateCentre(req.body, req.params.id);
      if (!centre) {
        return res.status(404).json({ error: "Centre non trouvé" });
      }
      res.status(201).json(centre);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification du Stagiare" });
    }
  }
  async deleteCentreById(req, res) {
    try {
      const centre = await CentreService.deleteCentreById(req.params.id);
      if (!centre) {
        return res.status(404).json({ error: "Centre non trouvé" });
      }
      res.status(201).json("Centre suprimer avec succes");
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la supression du Centre" });
    }
  }
}
module.exports = new CentreController();
// on exporte la classe CentreController
