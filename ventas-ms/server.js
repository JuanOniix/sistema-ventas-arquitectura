const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const CLIENTES_MS = process.env.CLIENTES_MS || 'http://localhost:3001';
const PRODUCTOS_MS = process.env.PRODUCTOS_MS || 'http://localhost:3002';

let ventas = [];
let nextId = 1;

app.get('/ventas', (req, res) => res.json(ventas));

app.post('/ventas', async (req, res) => {
  try {
    const { clienteId, items } = req.body;
    if (!clienteId || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Faltan datos' });
    }

    const clienteResp = await axios.get(`${CLIENTES_MS}/clientes/${clienteId}`).catch(() => null);
    if (!clienteResp || clienteResp.status !== 200) {
      return res.status(400).json({ error: 'Cliente no existe' });
    }

    const productoChecks = await Promise.all(items.map(async it => {
      const pr = await axios.get(`${PRODUCTOS_MS}/productos/${it.productoId}`).catch(() => null);
      if (!pr || pr.status !== 200) return { ok: false, productoId: it.productoId };
      const producto = pr.data;
      if (producto.stock < it.cantidad) return { ok: false, productoId: it.productoId, mensaje: 'Stock insuficiente' };
      return { ok: true, producto };
    }));

    const bad = productoChecks.find(p => !p.ok);
    if (bad) return res.status(400).json({ error: 'Error en productos', detalle: bad });

    await Promise.all(items.map(it =>
      axios.patch(`${PRODUCTOS_MS}/productos/${it.productoId}`, { deltaStock: -it.cantidad })
    ));

    const nuevaVenta = { id: nextId++, clienteId, items, fecha: new Date().toISOString() };
    ventas.push(nuevaVenta);

    res.status(201).json(nuevaVenta);
  } catch (err) {
    console.error(err.message || err);
    res.status(500).json({ error: 'Error interno en ventas-ms' });
  }
});

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`ventas-ms escuchando en ${port}`));