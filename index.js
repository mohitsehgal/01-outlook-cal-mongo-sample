require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./config");
const port = config.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
