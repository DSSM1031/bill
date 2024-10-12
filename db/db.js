const mongoose = require("mongoose");
const { DBHOST, DBPORT, DBNAME } = require("../config/config.js");

async function connect() {
  try {
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = connect;
