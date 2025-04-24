const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const ExaminateurController = require("../controllers/examinateurController");
// on importe le controller Examinateur
router.get("/", (req, res) => {
  // on declare la route get
  ExaminateurController.getAllExaminateurs(req, res); // on declare la fonction getAllExaminateurs
});
router.get("/:id", (req, res) => {
  ExaminateurController.getExaminateurById(req, res);
});
router.post("/", (req, res) => {
  ExaminateurController.addExaminateur(req, res);
});
router.put("/:id", (req, res) => {
  ExaminateurController.updateExaminateur(req, res);
});
router.delete("/:id", (req, res) => {
  ExaminateurController.deleteExaminateurById(req, res);
});
module.exports = router;
// on exporte le router
