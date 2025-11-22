const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let clientes = [
  { id: 1, nombre: 'Juan Perez', email: 'juan@example.com' },
  { id: 2, nombre: 'Ana Gomez', email: 'ana@example.com' }
];
let nextId = 3;

app.get('/clientes', (req, res) => res.json(clientes));

app.get('/clientes/:id', (req, res) => {
  const id = Number(req.params.id);
  const c = clientes.find(x => x.id === id);
  if (!c) return res.status(404).json({ error: 'Cliente no encontrado' });
  res.json(c);
});

app.post('/clientes', (req, res) => {
  const { nombre, email } = req.body;
  if (!nombre || !email) return res.status(400).json({ error: 'Faltan datos' });
  const c = { id: nextId++, nombre, email };
  clientes.push(c);
  res.status(201).json(c);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`clientes-ms escuchando en ${port}`));