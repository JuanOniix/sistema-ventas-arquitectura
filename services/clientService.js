const { v4: uuidv4 } = require('uuid');
const clientModel = require('../models/clientModel');

function createClient(data){
  const client = { id: uuidv4(), name: data.name, email: data.email || '', phone: data.phone || '' };
  return clientModel.create(client);
}
function listClients(){ return clientModel.all(); }
function getClient(id){ return clientModel.findById(id); }
function updateClient(id, attrs){ return clientModel.update(id, attrs); }

module.exports = { createClient, listClients, getClient, updateClient };
