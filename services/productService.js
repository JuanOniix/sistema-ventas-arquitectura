const { v4: uuidv4 } = require('uuid');
const productModel = require('../models/productModel');

function createProduct(data){
  const product = { id: uuidv4(), name: data.name, price: Number(data.price)||0, stock: Number(data.stock)||0 };
  return productModel.create(product);
}
function listProducts(){ return productModel.all(); }
function getProduct(id){ return productModel.findById(id); }
function updateProduct(id, attrs){ return productModel.update(id, attrs); }

module.exports = { createProduct, listProducts, getProduct, updateProduct };
