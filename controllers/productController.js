const productService = require('../services/productService');
async function create(req,res,next){ try{ const p = productService.createProduct(req.body); res.status(201).json(p); }catch(e){ next(e); } }
async function list(req,res,next){ try{ res.json(productService.listProducts()); }catch(e){ next(e); } }
async function getById(req,res,next){ try{ const p = productService.getProduct(req.params.id); if(!p) return res.status(404).json({error:'Not found'}); res.json(p); }catch(e){ next(e); } }
async function update(req,res,next){ try{ const u = productService.updateProduct(req.params.id, req.body); if(!u) return res.status(404).json({error:'Not found'}); res.json(u); }catch(e){ next(e); } }

module.exports = { create, list, getById, update };
