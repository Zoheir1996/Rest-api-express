const { Utilisateur } = require("../model/utilisateur");
const { ObjectId } = require("mongodb");
const client = require("../db/connect");

const ajouterUtilisateur = async (req, res) => {
  try {
    let utilisateur = new Utilisateur(
      req.body.noms,
      req.body.adresse,
      req.body.telephone
    );
    let result = await client
      .db()
      .collection("utilisateurs")
      .insertOne(utilisateur);

    res
      .status(200)
      .json({ result: "L'utilisateur a été ajouté avec succès", data: result });
  } catch (error) {
    console.log(error);
    res.status(501).json({ error: "L'utilisateur n'a pas été ajouté" });
  }
};

const getUtilisateur = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    let cursor = client.db().collection("utilisateurs").find({ _id: id });
    let result = await cursor.toArray();

    if (result.length > 0) {
      return res.status(200).json(result);
    } else {
      return res.status(204).json({ msg: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const getTousUtilisateur = async (req, res) => {
  try {
    let cursor = client.db().collection("utilisateurs").find();

    let result = await cursor.toArray();

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
const modifierUtilisateur = async (req, res) => {
  try {
    let id = new ObjectId(req.params.id);
    let nNoms = req.body.noms;
    let nAdresse = req.body.adresse;
    let nTelephone = req.body.telephone;

    let result = await client
      .db()
      .collection("utilisateurs")
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { noms: nNoms, adresse: nAdresse, telephone: nTelephone } }
      );

    if (result.modifiedCount === 1) {
      res.status(200).json({ msg: "Modification réussie" });
    } else {
      res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json(error);
  }
};

const supprimerUtilisateur = async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      console.log("ID invalide :", id);
      return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    let result = await client
      .db()
      .collection("utilisateurs")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return res.json({ message: "User deleted successfully" });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  ajouterUtilisateur,
  getTousUtilisateur,
  getUtilisateur,
  modifierUtilisateur,
  supprimerUtilisateur,
};
