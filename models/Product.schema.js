const mongoose = require("mongoose");

let Product = new mongoose.Schema({
  name: { type: String, required: "true" },
  img: { type: String, required: "true" },
  price: { type: Number, required: "true" },
  id:Number
});

const Bike = mongoose.model("Bike", Product);
module.exports = Bike;
