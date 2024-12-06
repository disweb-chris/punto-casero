import React, { useState } from 'react';
import { createOrder } from '../services/ordersService';

const Checkout = () => {
  const [orderCreated, setOrderCreated] = useState(null); // Para mostrar el resultado del pedido

  const handleCreateOrder = async () => {
    // Aquí puedes personalizar los datos según el carrito y el usuario actual
    const orderData = {
      userId: '123', // Este sería el ID del cliente autenticado
      items: [
        { productId: 'abc', name: 'Pizza', quantity: 2, price: 20 },
      ],
      totalCost: 40,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await createOrder(orderData); // Llama al servicio para crear el pedido
      setOrderCreated(response); // Guarda el resultado del pedido en el estado
      console.log('Pedido creado:', response);
    } catch (error) {
      console.error('Error al crear el pedido:', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCreateOrder}>Confirmar Pedido</button>
      {orderCreated && (
        <div>
          <h2>Pedido Creado</h2>
          <p>ID del Pedido: {orderCreated.id}</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
