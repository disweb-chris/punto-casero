const admin = require('firebase-admin');
const db = admin.firestore();

// Crear un nuevo pedido
const createOrder = async (req, res) => {
  try {
    const newOrder = req.body; // Datos del pedido
    const orderRef = await db.collection('orders').add(newOrder);
    res.status(201).json({ id: orderRef.id, ...newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el pedido', error });
  }
};

// Obtener todos los pedidos
const getAllOrders = async (req, res) => {
  try {
    const snapshot = await db.collection('orders').get();
    const orders = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pedidos', error });
  }
};

// Actualizar el estado de un pedido
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Nuevo estado del pedido
    const orderRef = db.collection('orders').doc(id);
    await orderRef.update({ status });
    res.status(200).json({ message: `Pedido ${id} actualizado a ${status}` });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el pedido', error });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  updateOrderStatus,
};
