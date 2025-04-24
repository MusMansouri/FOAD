const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const ExamenController = require("../controllers/ExamenController");
// on importe le controller Examen
router.get("/", (req, res) => {
  // on declare la route get
  ExamenController.getAllExamens(req, res); // on declare la fonction getAllExamens
});
router.get("/:id", (req, res) => {
  ExamenController.getExamenById(req, res);
});
router.post("/", (req, res) => {
  ExamenController.addExamen(req, res);
});
router.put("/:id", (req, res) => {
  ExamenController.updateExamen(req, res);
});
router.delete("/:id", (req, res) => {
  ExamenController.deleteExamenById(req, res);
});
module.exports = router;
// on exporte le router
