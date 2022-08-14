require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./config");
const port = config.PORT || 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
