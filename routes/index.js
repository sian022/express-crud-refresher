const express = require("express");
const router = express.Router();

const productRoutes = require("./ProductRoutes");

router.use("/product", productRoutes);

module.exports = router;
