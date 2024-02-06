const { MongoClient, Db } = require("mongodb");

let client = null;

async function connecter(url, callback) {
  client = new MongoClient(url);
  await client.connect();
  callback();
}
function db() {
  var db = new Db(client, "dbOK");
  return db;
}

function fermer() {
  if (client) {
    client.close();
    client = null;
  }
}

module.exports = { connecter, db, fermer };
