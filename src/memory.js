const fs = require('fs');
const path = require('path');
const STORE = path.join(__dirname, '..', 'data', 'memory.json');

function load() {
  try { return JSON.parse(fs.readFileSync(STORE, 'utf8')); }
  catch { return { notes: [] }; }
}
function save(mem) {
  fs.mkdirSync(path.dirname(STORE), { recursive: true });
  fs.writeFileSync(STORE, JSON.stringify(mem, null, 2));
}
function remember(note) {
  const mem = load();
  mem.notes.push({ at: new Date().toISOString(), note });
  save(mem);
  return mem;
}
module.exports = { load, save, remember };
