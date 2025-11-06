const fs = require('fs');
const path = require('path');

function readData(filename){
  const p = path.join(__dirname,'data',filename);
  if(!fs.existsSync(p)) return [];
  const raw = fs.readFileSync(p);
  try{ return JSON.parse(raw); } catch(e){ return []; }
}
function writeData(filename, data){
  const p = path.join(__dirname,'data',filename);
  fs.writeFileSync(p, JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };
