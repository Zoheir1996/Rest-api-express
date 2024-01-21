const { Utilisateur } = require('../model/utilisateur');
const client = require('../db/connect');




const ajouterUtilisateur = async (req, res) => {
    try{
        let utilisateur = new Utilisateur(req.body.noms, req.body.adresse, req.body.telephone);
       let result = await  client.db().collection('utilisateurs').insertOne(utilisateur);

       res.status(200).json(result);

    } catch(error){
        console.log(error);
        res.status(500).json(error);

    }
}


module.exports = {ajouterUtilisateur};