const express = require("express");
const router = express.Router();

const productController = require("../controllers/ProductController");

router.get("/GetProducts", productController.getProducts);
router.get("/GetProduct/:id", productController.getProductById);
router.post("/CreateProduct", productController.createProduct);
router.put("/UpdateProduct/:id", productController.updateProduct);
router.delete("/DeleteProduct/:id", productController.deleteProduct);

module.exports = router;
