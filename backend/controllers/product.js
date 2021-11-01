// Import function from product model
import {
  getProducts,
  getProductById,
  insertProduct,
  updateProductById,
  deleteProductById,
} from "../models/productModel.js";

// get all products
export const showProducts = (req, res) => {
  getProducts((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get a single product
export const showProductById = (req, res) => {
  getProductById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create a new product
export const createProduct = (req, res) => {
  const data = req.body;
  insertProduct(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update product
export const updateProduct = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateProductById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete product
export const deleteProduct = (req, res) => {
  const id = req.params.id;
  deleteProductById(id, (err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
