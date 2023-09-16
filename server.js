const express = require("express");
const app = express();

const port = 3001;

//routes

app.get("/", (req, res) => {
  res.send("henlo hi");
});

app.get("/blog", (req, res) => {
  res.send("henlo blogs");
});

app.listen(port, () => {
  console.log(`Henlo I'm running on port ${port}`);
});
