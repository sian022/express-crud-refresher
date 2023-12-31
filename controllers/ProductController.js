const Product = require("../models/ProductModel");

const getProducts = async (req, res) => {
  try {
    const { minQuantity, maxPrice, search } = req.query;
    let query = {};

    if (minQuantity) {
      query.quantity = { $gte: parseInt(minQuantity) };
    }

    if (maxPrice) {
      query.price = { $lte: parseFloat(maxPrice) };
    }

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  app.delete("/product/DeleteProduct/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        res
          .status(404)
          .json({ message: `cannot find any product with ID ${id}` });
      }
      res.status(200).json(product);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
