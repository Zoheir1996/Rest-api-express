const express = require("express");
const cors = require("cors");
const { connecter } = require("./db/connect");
const routesUtilisateur = require("./router/utilisateur");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/v1", routesUtilisateur);
console.log("Connexion avec la base de données en cours");
connecter(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1",
  () => {
    console.log("Connexion avec la base de données établie");
    app.listen(3000, () => console.log("Serveur démarré"));

    console.log("Attente des requêtes au port 3OOO");
  }
);
