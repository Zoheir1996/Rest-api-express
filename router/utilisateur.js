const express = require("express");
const {
  ajouterUtilisateur,
  getUtilisateur,
  updateUtilisateur,
  deleteUtilisateur,
} = require("../controller/utilisateur");
const router = express.Router();

router.route("/utilisateurs").post(ajouterUtilisateur);
router.route("/utilisateurs/:id").get(getUtilisateur);
router.route("/utilisateurs/:id").put(updateUtilisateur);
router.route("/utilisateurs/:id").delete(deleteUtilisateur);

module.exports = router;
