const mongoose = require("mongoose");
// require("dotenv").config();

mongoose.set('strictQuery', false);

const Connect = async () => {
  await mongoose.connect('mongodb+srv://adityarajbenn:royalbrother@cluster0.yg2eort.mongodb.net/?retryWrites=true&w=majority');



  console.log("database connected");
};

module.exports = Connect;
