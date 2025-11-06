const { readData, writeData } = require('./modelUtils');
const FILE = 'products.json';

function all(){ return readData(FILE); }
function findById(id){ return all().find(p => p.id===id); }
function create(product){ const data = all(); data.push(product); writeData(FILE, data); return product; }
function update(id, attrs){ const data = all(); const idx = data.findIndex(p=>p.id===id); if(idx===-1) return null; data[idx] = {...data[idx], ...attrs}; writeData(FILE,data); return data[idx]; }

module.exports = { all, findById, create, update };
