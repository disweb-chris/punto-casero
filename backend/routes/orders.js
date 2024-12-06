const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const db = admin.firestore();

// Actualizar el estado de un pedido
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params; // ID del pedido desde la URL
    const { status } = req.body; // Estado nuevo desde el cuerpo de la solicitud

    // Referencia al documento del pedido en Firestore
    const orderRef = db.collection('orders').doc(id);

    // Actualizar el campo `status` en Firestore
    await orderRef.update({ status });

    // Respuesta exitosa
    res.status(200).json({ message: `Pedido ${id} actualizado a ${status}` });
  } catch (error) {
    // Manejo de errores
    console.error('Error al actualizar el pedido:', error);
    res.status(500).json({ message: 'Error al actualizar el pedido', error });
  }
});

// Ruta para obtener todos los pedidos
router.get('/', async (req, res) => {
    try {
      const snapshot = await db.collection('orders').get();
      const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(orders); // Devuelve la lista de pedidos en formato JSON
    } catch (error) {
      console.error('Error al obtener los pedidos:', error);
      res.status(500).json({ message: 'Error al obtener los pedidos', error });
    }
  });

  // Ruta para crear un nuevo pedido
router.post('/', async (req, res) => {
  try {
    const newOrder = req.body; // Datos del pedido enviados desde el cliente
    const docRef = await db.collection('orders').add(newOrder); // Guardar en Firestore
    res.status(201).json({ id: docRef.id, ...newOrder }); // Responder con el pedido creado
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({ message: 'Error al crear el pedido', error });
  }
});

module.exports = router;
