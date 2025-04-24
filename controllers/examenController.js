const ExamenService = require("../services/examenService");
// on importe le service Examen
class ExamenController {
  // on declare la classe ExamenController
  async getAllExamens(req, res) {
    // on declare la fonction getAllExamens
    try {
      // on declare le try
      const examen = await ExamenService.getAllExamens();
      // on declare la const Examens qui va recuperer tous les Examens
      res.json(examen);
      // on renvoie les Examens au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Examens" });
      // on renvoie l'erreur au format json
    }
  }
  async addExamen(req, res) {
    try {
      const examen = await ExamenService.addExamen(req.body);
      res.status(201).json(examen);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la Examen" });
    }
  }
  async getExamenById(req, res) {
    try {
      const examen = await ExamenService.getExamenById(req.params.id);
      if (!examen) {
        return res.status(404).json({ error: "Examen non trouvé" });
      }
      res.status(201).json(examen);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation de la formnation" });
    }
  }
  async updateExamen(req, res) {
    try {
      const examen = await ExamenService.updateExamen(req.body, req.params.id);
      if (!examen) {
        return res.status(404).json({ error: "Examen non trouvé" });
      }
      res.status(201).json(examen);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification du Stagiare" });
    }
  }
  async deleteExamenById(req, res) {
    try {
      const examen = await ExamenService.deleteExamenById(req.params.id);
      if (!examen) {
        return res.status(404).json({ error: "Examen non trouvé" });
      }
      res.status(201).json("Examen suprimer avec succes");
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la supression du Examen" });
    }
  }
}
module.exports = new ExamenController();
// on exporte la classe ExamenController
