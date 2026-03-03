const express = require("express");
const Product = require("../models/Product.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find()
      .populate("category")
      .populate("owner");

    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;