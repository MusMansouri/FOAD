const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const SalleController = require("../controllers/salleController");
// on importe le controller Salle
router.get("/", (req, res) => {
  // on declare la route get
  SalleController.getAllSalle(req, res); // on declare la fonction getAllSalles
});
router.get("/:id", (req, res) => {
  SalleController.getSalleById(req, res);
});
router.post("/", (req, res) => {
  SalleController.addSalle(req, res);
});
router.put("/:id", (req, res) => {
  SalleController.updateSalle(req, res);
});
router.delete("/:id", (req, res) => {
  SalleController.deleteSalleById(req, res);
});
module.exports = router;
// on exporte le router
