

# 🧾 Sistema de Ventas - Arquitectura en Capas

Este proyecto implementa un **sistema de gestión de clientes, productos y ventas** desarrollado con **Node.js + Express**, siguiendo el patrón de **arquitectura en capas**.  
Forma parte de una entrega académica orientada a validar la separación de responsabilidades, modularidad y la correcta implementación de una API REST.

---

## 🚨 Importante

> 🔹 El código fuente completo del sistema se encuentra en la **rama `master`**.  
> Para visualizarlo, dirígete a la pestaña **"Branches"** en GitHub y selecciona la rama `master`.



## 🏗️ Vistas Arquitectónicas
A continuación se presentan las principales vistas del sistema, documentadas mediante diagramas UML.

### 📘 Vista de Contexto
Muestra los actores externos (clientes, vendedores y sistema de facturación) y cómo interactúan con el sistema de ventas.

[Vista de Contexto]()
---
<img width="1024" height="1024" alt="Gemini_Generated_Image_3uvavs3uvavs3uva" src="https://github.com/user-attachments/assets/abddf2a4-ea2a-4e07-9388-6878743ea040" />

### ⚙️ Vista Funcional
Representa los principales casos de uso: registrar venta, consultar inventario y gestionar cliente.

![Vista Funcional]()
<img width="1024" height="1024" alt="Gemini_Generated_Image_3uvavs3uvavs3uva (1)" src="https://github.com/user-attachments/assets/9b0a4500-3551-4ea3-8b39-a4be5608b0a4" />

### 🧩 Vista de Información
Incluye las entidades principales (Cliente, Producto, Venta) y sus relaciones mediante un modelo UML.

![Vista de Información]()
<img width="1024" height="1024" alt="Gemini_Generated_Image_3uvavs3uvavs3uva (2)" src="https://github.com/user-attachments/assets/a5e6e7f8-cbb8-4afd-a742-7ee33f678838" />

### 🖥️ Vista de Despliegue
Muestra los componentes físicos donde se ejecuta el sistema: servidor, base de datos y entorno de despliegue.

![Vista de Despliegue]()
<img width="1024" height="1024" alt="Gemini_Generated_Image_3uvavs3uvavs3uva (3)" src="https://github.com/user-attachments/assets/4d3ad6f0-20c4-468c-b1f2-defb047f4af2" />





## 🏗️ Estructura del Proyecto
📦 sistema-ventas
┣ 📂 controllers # Lógica de negocio
┣ 📂 models # Definición de entidades y acceso a datos (JSON)
┣ 📂 routes # Definición de endpoints (API REST)
┣ 📂 services # Procesamiento intermedio y validaciones
┣ 📜 index.js # Punto de entrada del servidor Express
┣ 📜 package.json
┣ 📜 README.md
┗ 📜 .gitignore


---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/sistema-ventas-arquitectura.git
cd sistema-ventas-arquitectura
git checkout master
npm install
npm start
http://localhost:3000 (por defecto si no cambiar )

Pruebas con Postman

| Método | Endpoint           | Descripción                          |
| ------ | ------------------ | ------------------------------------ |
| POST   | `/api/clients`     | Crear un nuevo cliente               |
| GET    | `/api/clients`     | Listar todos los clientes            |
| GET    | `/api/clients/:id` | Obtener un cliente específico        |
| PUT    | `/api/clients/:id` | Actualizar información de un cliente |



| Método | Endpoint            | Descripción                    |
| ------ | ------------------- | ------------------------------ |
| POST   | `/api/products`     | Registrar un nuevo producto    |
| GET    | `/api/products`     | Listar todos los productos     |
| GET    | `/api/products/:id` | Obtener un producto específico |
| PUT    | `/api/products/:id` | Actualizar precio o stock      |



| Método | Endpoint         | Descripción                    |
| ------ | ---------------- | ------------------------------ |
| POST   | `/api/sales`     | Registrar una nueva venta      |
| GET    | `/api/sales`     | Listar todas las ventas        |
| GET    | `/api/sales/:id` | Consultar detalle de una venta |


Tecnologías Utilizadas

Node.js
Express.js
Arquitectura MVC (en capas)
JSON como persistencia local de datos
Postman (para pruebas de endpoints)


👨‍💻 Autor

Juan Felipe Osorio Burgos
Proyecto académico - Electiva III: Procesos de Desarrollo Ágil
📍 Unicatólica - 2025

🎥 Ver video de demostración
https://youtu.be/mcwN-x7lw1g


