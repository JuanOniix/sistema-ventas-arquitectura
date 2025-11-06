const { readData, writeData } = require('./modelUtils');
const FILE = 'sales.json';

function all(){ return readData(FILE); }
function findById(id){ return all().find(s => s.id===id); }
function create(sale){ const data = all(); data.push(sale); writeData(FILE, data); return sale; }

module.exports = { all, findById, create };
