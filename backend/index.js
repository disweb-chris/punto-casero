const express = require('express');
const cors = require('cors'); // Importar el middleware CORS
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

// Inicializar Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<TU_PROJECT_ID>.firebaseio.com',
});

const db = admin.firestore();
const app = express();
const PORT = process.env.PORT || 5000;

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:3000', // Permitir solicitudes solo desde el frontend
  methods: ['GET', 'POST', 'PATCH'], // Métodos permitidos
  allowedHeaders: ['Content-Type'], // Encabezados permitidos
}));

// Middleware para parsear JSON
app.use(express.json());

// Importar las rutas
const ordersRoutes = require('./routes/orders');
app.use('/api/orders', ordersRoutes); // Todas las rutas de pedidos estarán bajo /api/orders

// Ruta de prueba para el servidor
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
