// import express
import express from "express";

// import functions from controller
import {
  showProducts,
  showProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

// init express router
const router = express.Router();

router.get("/products", showProducts); // get all products
router.get("/products/:id", showProductById); // get a single product
router.post("/products", createProduct); // create a product
router.put("/products/:id", updateProduct); // update a product
router.delete("/products/:id", deleteProduct); // delete a product

export default router; // export default router
