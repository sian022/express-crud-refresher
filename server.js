const express = require("express");
const app = express();
const { port, dbConnectionString } = require("./configs/env.config");
const routes = require("./routes");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

mongoose.set("strictQuery", false);

mongoose
  .connect(dbConnectionString)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(port, () => {
      console.log(`Henlo I'm running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
