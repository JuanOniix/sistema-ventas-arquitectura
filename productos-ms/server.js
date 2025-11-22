const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let productos = [
  { id: 1, nombre: 'Teclado', stock: 10, precio: 25.0 },
  { id: 2, nombre: 'Mouse', stock: 5, precio: 15.0 }
];
let nextId = 3;

app.get('/productos', (req, res) => res.json(productos));

app.get('/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const p = productos.find(x => x.id === id);
  if (!p) return res.status(404).json({ error: 'Producto no encontrado' });
  res.json(p);
});

app.patch('/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const p = productos.find(x => x.id === id);
  if (!p) return res.status(404).json({ error: 'Producto no encontrado' });

  const { deltaStock, stock } = req.body;
  if (typeof stock === 'number') {
    p.stock = stock;
  } else if (typeof deltaStock === 'number') {
    p.stock += deltaStock;
    if (p.stock < 0) p.stock = 0;
  }
  res.json(p);
});

app.post('/productos', (req, res) => {
  const { nombre, stock, precio } = req.body;
  if (!nombre || typeof stock !== 'number') return res.status(400).json({ error: 'Faltan datos' });
  const nuevo = { id: nextId++, nombre, stock, precio: precio || 0 };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`productos-ms escuchando en ${port}`));