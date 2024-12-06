import React, { useEffect, useState } from 'react';
import { getOrders, updateOrderStatus } from '../services/ordersService';

const RestaurantPanel = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  // Cargar la lista de pedidos
  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (err) {
      setError('Error al cargar los pedidos');
      console.error(err);
    }
  };

  // Actualizar el estado del pedido
  const handleUpdateStatus = async (id, newStatus) => {
    try {
      await updateOrderStatus(id, newStatus);
      fetchOrders(); // Actualizar la lista de pedidos después de cambiar el estado
    } catch (err) {
      setError('Error al actualizar el estado del pedido');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders(); // Cargar los pedidos al montar el componente
  }, []);

  return (
    <div>
      <h1>Panel del Restaurante</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {orders.length === 0 ? (
        <p>No hay pedidos pendientes.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <h2>Pedido {order.id}</h2>
              <p>Estado: {order.status}</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
              <p>Total: ${order.totalCost}</p>
              <button onClick={() => handleUpdateStatus(order.id, 'Preparing')}>
                Preparar Pedido
              </button>
              <button onClick={() => handleUpdateStatus(order.id, 'Ready')}>
                Pedido Listo
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantPanel;
