const saleService = require('../services/saleService');
async function create(req,res,next){ try{ const s = saleService.createSale(req.body); res.status(201).json(s); }catch(e){ next(e); } }
async function list(req,res,next){ try{ res.json(saleService.listSales()); }catch(e){ next(e); } }
async function getById(req,res,next){ try{ const s = saleService.getSale(req.params.id); if(!s) return res.status(404).json({error:'Not found'}); res.json(s); }catch(e){ next(e); } }

module.exports = { create, list, getById };
