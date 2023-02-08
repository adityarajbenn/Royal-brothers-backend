const mongoose = require("mongoose");
require("dotenv").config();

const Connect = async () => {
  await mongoose.connect(process.env.mongodb);



  console.log("database connected");
};

module.exports = Connect;
