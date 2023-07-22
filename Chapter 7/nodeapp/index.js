const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  res.status(200).send(String(getRandomInt(1, 100)));
});

module.exports = app;
