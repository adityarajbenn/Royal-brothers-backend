const mongoose = require("mongoose");

let Selected = new mongoose.Schema({
  name: { type: String, required: "true" },
  img: { type: String, required: "true" },
  price: { type: Number, required: "true" },
  id:Number
});

const Cart = mongoose.model("Cart", Selected);
module.exports = Cart;