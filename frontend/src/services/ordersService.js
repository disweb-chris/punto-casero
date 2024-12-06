const API_URL = 'http://localhost:5000/api/orders';

// Crear un nuevo pedido
export const createOrder = async (orderData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al crear el pedido');
    }

    return response.json();
  } catch (error) {
    console.error('Error en createOrder:', error.message);
    throw error; // Lanza el error para que el componente lo maneje
  }
};

// Obtener todos los pedidos
export const getOrders = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al obtener los pedidos');
    }

    return response.json();
  } catch (error) {
    console.error('Error en getOrders:', error.message);
    throw error; // Lanza el error para que el componente lo maneje
  }
};

// Actualizar el estado de un pedido
export const updateOrderStatus = async (id, status) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Error al actualizar el estado del pedido');
    }

    return response.json();
  } catch (error) {
    console.error('Error en updateOrderStatus:', error.message);
    throw error; // Lanza el error para que el componente lo maneje
  }
};
