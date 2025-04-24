const ExaminateurService = require("../services/examinateurService");

// on importe le service Examinateur
/////////////

class ExaminateurController {
  // on declare la classe ExaminateurController
  async getAllExaminateurs(req, res) {
    // on declare la fonction getAllExaminateurs
    try {
      // on declare le try
      const examinateur = await ExaminateurService.getAllExaminateurs();
      // on declare la const Examinateurs qui va recuperer tous les Examinateurs
      res.json(examinateur);
      // on renvoie les Examinateurs au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Examinateurs" });
      // on renvoie l'erreur au format json
    }
  }
  async addExaminateur(req, res) {
    try {
      const examinateur = await ExaminateurService.addExaminateur(req.body);
      res.status(201).json(examinateur);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la Examinateur" });
    }
  }
  async getExaminateurById(req, res) {
    try {
      const examinateur = await ExaminateurService.getExaminateurById(
        req.params.id
      );
      if (!examinateur) {
        return res.status(404).json({ error: "Examinateur non trouvé" });
      }
      res.status(201).json(examinateur);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation de l'Examinateur" });
    }
  }
  async updateExaminateur(req, res) {
    try {
      const examinateur = await ExaminateurService.updateExaminateur(
        req.body,
        req.params.id
      );
      if (!examinateur) {
        return res.status(404).json({ error: "Examinateur non trouvé" });
      }
      res.status(201).json(examinateur);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification de l'Examinateur" });
    }
  }
  async deleteExaminateurById(req, res) {
    try {
      const examinateur = await ExaminateurService.deleteExaminateurById(
        req.params.id
      );
      if (!examinateur) {
        return res.status(404).json({ error: "Examinateur non trouvé" });
      }
      res.status(201).json("Examinateur suprimer avec succes");
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la supression du Examinateur" });
    }
  }
}
module.exports = new ExaminateurController();
// on exporte la classe ExaminateurController
