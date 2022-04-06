const dbConfig = require("../config");
const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.crud = require("./crud")(mongoose, mongoosePaginate);

module.exports = db;
