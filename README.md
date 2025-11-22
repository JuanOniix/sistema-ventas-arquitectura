🚀 Servidores Express — Puertos 3000, 3001, 3002 y 3003

Este proyecto contiene múltiples servidores Express, cada uno corriendo en su propio puerto.
La estructura permite pruebas independientes desde Postman.

### 📌 Puertos activos

3000 → Servidor principal (usuarios)

3001 → Servidor secundario

3002 → Servidor de productos

3003 → Servidor de órdenes


video explicativo : https://youtu.be/D37OQ_V48AQ



# Arquitectura - Entrega 

Proyecto de ejemplo con arquitectura en capas (Express + JSON local) para la asignatura.

## Estructura
- `app.js` - servidor y registro de rutas.
- `routes/` - definiciones de endpoints.
- `controllers/` - manejo de request/response y validaciones mínimas.
- `services/` - lógica de negocio (cálculo, actualización de stock, etc.).
- `models/` - acceso a datos (lectura/escritura en JSON).
- `models/data/` - archivos JSON que actúan como base de datos local.
- `diagrams/` - imágenes con las 4 vistas arquitectónicas.

## Endpoints principales
### Clientes
- `POST /clients` - crear cliente `{ "name","email","phone" }`
- `GET /clients` - listar
- `GET /clients/:id` - obtener
- `PUT /clients/:id` - actualizar

### Productos
- `POST /products` - crear `{ "name","price","stock" }`
- `GET /products`
- `GET /products/:id`
- `PUT /products/:id` - actualizar precio/stock

### Ventas
- `POST /sales` - registrar venta:
  ```json
  {
    "client_id": "client-1",
    "products": [
      { "product_id": "prod-1", "quantity": 2 }
    ]
  }
  ```
  Calcula `total`, crea `details` y actualiza el `stock`.
- `GET /sales`
- `GET /sales/:id`

## Ejecutar localmente
1. `npm install`
2. `npm start`
3. Usar Postman  para probar endpoints.

## Notas
- Implementación simple para demostración y entregas académicas.
- Para producción, reemplazar la persistencia por una base de datos real y agregar validaciones y autenticación.
