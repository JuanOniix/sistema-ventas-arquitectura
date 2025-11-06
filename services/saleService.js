const { v4: uuidv4 } = require('uuid');
const saleModel = require('../models/saleModel');
const clientModel = require('../models/clientModel');
const productModel = require('../models/productModel');

function createSale(data){
  const client = clientModel.findById(data.client_id);
  if(!client) throw new Error('Client not found');
  const products = data.products || [];
  if(!Array.isArray(products) || products.length===0) throw new Error('Products required');

  let total = 0;
  const details = products.map(item=>{
    const prod = productModel.findById(item.product_id);
    if(!prod) throw new Error('Product not found: '+item.product_id);
    if(prod.stock < item.quantity) throw new Error('Insufficient stock for product: '+prod.id);
    const subtotal = prod.price * item.quantity;
    total += subtotal;
    // decrement stock
    productModel.update(prod.id, { stock: prod.stock - item.quantity });
    return { product_id: prod.id, name: prod.name, quantity: item.quantity, price: prod.price, subtotal };
  });

  const sale = { id: uuidv4(), client_id: client.id, client_name: client.name, total, details, created_at: new Date().toISOString() };
  return saleModel.create(sale);
}

function listSales(){ return saleModel.all(); }
function getSale(id){ return saleModel.findById(id); }

module.exports = { createSale, listSales, getSale };
