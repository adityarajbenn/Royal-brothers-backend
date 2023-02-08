const express = require("express");
const router = require("./controllers/Routes");
const Connect = require("./config/db");
const cors = require('cors');
const port = process.env.PORT || 8090;
const app = express();

app.use(cors())
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`server working on port ${port}`);
});
// database connection
Connect();
