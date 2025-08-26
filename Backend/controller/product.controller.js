import e from "express";
import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";

//Create Product
const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product(req.body);

  const product = newProduct.save();

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400);
    throw new Error("Product was not created");
  }
});

//Update product
const updateProduct = asyncHandler(async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    }
  );

  if (!updateProduct) {
    res.status(400);
    throw new Error("Product has not updated");
  } else {
    res.status(201).json(updateProduct);
  }
});

//Update Product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product was not deleted");
  } else {
    res.status(201).json("Product deleted successfully");
  }
});

//Get Product
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  } else {
    res.status(201).json(product);
  }
});

// Get All Products
const getAllProduct = asyncHandler(async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qSearch = req.query.search;
  let products;

  if (qNew) {
    products = await Product.find().sort({ createAt: -1 });
  } else if (qCategory) {
    products = await Product.find().sort({ categories: { $in: [qCategory] } });
  } else if (qSearch) {
    products = await Product.find({
      $text: {
        $search: qSearch,
        $caseSensitive: false,
        $dicriticSensitive: false,
      },
    });
  } else {
    products = await Product.find().sort({ createAt: -1 });
  }
});

//Rating Product
const ratingProduct = asyncHandler(async (req, res) => {
  const { star, name, comment, postedBy } = req.body;

  if (star && name && comment && postedBy) {
    const postedBy = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $push: { rating: { star, name, comment, postedBy } },
      },
      {
        new: true,
      }
    );
    res.status(201).json("product was rated successfully");
  } else {
    res.status(400);
    throw new Error("product was not rated successfully");
  }
});

export {
  ratingProduct,
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
