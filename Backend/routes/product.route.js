import express from "express";
import {
  ratingProduct,
  getAllProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";
const router = express.Router();

//Rating product
router.put("/rating/:productId", ratingProduct);
//Get All Products
router.get("/", getAllProduct);
//Get Product
router.get("/find/:id", getProduct);
//Create Product
router.post("/", createProduct);
//Update Product
router.put("/:id", updateProduct);
//Delete Product
router.delete("/:id", deleteProduct);

export default router;
