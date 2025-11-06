const clientService = require('../services/clientService');
async function create(req, res, next){
  try{ const c = clientService.createClient(req.body); res.status(201).json(c); }catch(e){ next(e); }
}
async function list(req,res,next){ try{ res.json(clientService.listClients()); }catch(e){ next(e); } }
async function getById(req,res,next){ try{ const c = clientService.getClient(req.params.id); if(!c) return res.status(404).json({error:'Not found'}); res.json(c); }catch(e){ next(e); } }
async function update(req,res,next){ try{ const u = clientService.updateClient(req.params.id, req.body); if(!u) return res.status(404).json({error:'Not found'}); res.json(u); }catch(e){ next(e); } }

module.exports = { create, list, getById, update };
