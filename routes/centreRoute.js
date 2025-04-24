const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const CentreController = require("../controllers/centreController");
// on importe le controller Centre
router.get("/", (req, res) => {
  // on declare la route get
  CentreController.getAllCentre(req, res); // on declare la fonction getAllCentres
});
router.get("/:id", (req, res) => {
  CentreController.getCentreById(req, res);
});
router.post("/", (req, res) => {
  CentreController.addCentre(req, res);
});
router.put("/:id", (req, res) => {
  CentreController.updateCentre(req, res);
});
router.delete("/:id", (req, res) => {
  CentreController.deleteCentreById(req, res);
});
module.exports = router;
// on exporte le router
