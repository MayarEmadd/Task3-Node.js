const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [1, "Price must be greater than 0"]
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Category is required"]
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Owner is required"]
  }
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);