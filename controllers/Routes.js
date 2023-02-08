const { Router } = require("express");

const Bike = require("../models/Product.schema");
const User = require("../models/User.schema");

const router = Router();

router.get("/", async (req, res) => {
  res.send(await Bike.find());
});






// adding data to the database
router.post("/add", async (req, res) => {

  try {
    await Bike.create(req.body);

    res.status(200).send(req.body);
  } catch (error) {
    
res.status(400).send(error.message);

  }
});









router.post("/singn", async (req, res) => {
  try {
    const email = req.body.email;

    if (await User.findOne({ email: { $eq: email } })) {
      return res.status(200).send("user exists");
    }

    await User.create(req.body);
    res.status(200).send(req.body);
  } catch (error) {
    res.status(500).send(error.message);
  }
});












module.exports = router;
