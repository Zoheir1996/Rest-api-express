const express = require("express");
const {
  ajouterUtilisateur,
  getTousUtilisateur,
  getUtilisateur,
  modifierUtilisateur,
  supprimerUtilisateur,
} = require("../controller/utilisateur");
const router = express.Router();

router.route("/utilisateurs").post(ajouterUtilisateur);
router.route("/utilisateurs").get(getTousUtilisateur);
router.route("/utilisateurs/:id").get(getUtilisateur);
router.route("/utilisateurs/:id").put(modifierUtilisateur);
router.route("/utilisateurs/:id").delete(supprimerUtilisateur);

module.exports = router;
