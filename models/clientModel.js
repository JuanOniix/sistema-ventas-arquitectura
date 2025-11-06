const { readData, writeData } = require('./modelUtils');
const FILE = 'clients.json';

function all(){ return readData(FILE); }
function findById(id){ return all().find(c => c.id===id); }
function create(client){ const data = all(); data.push(client); writeData(FILE, data); return client; }
function update(id, attrs){ const data = all(); const idx = data.findIndex(c=>c.id===id); if(idx===-1) return null; data[idx] = {...data[idx], ...attrs}; writeData(FILE,data); return data[idx]; }

module.exports = { all, findById, create, update };
