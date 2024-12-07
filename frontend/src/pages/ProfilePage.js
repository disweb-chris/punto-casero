import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { fetchOrders } from "../services/ordersService"; // Crea un servicio para obtener pedidos

const ProfilePage = () => {
    const { user } = useContext(AuthContext); // Obtener el usuario autenticado
    const [orders, setOrders] = useState([]); // Estado para almacenar los pedidos

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const userOrders = await fetchOrders(user.uid); // Obtener pedidos del usuario
                setOrders(userOrders);
            } catch (error) {
                console.error("Error al cargar los pedidos:", error);
            }
        };

        if (user) {
            loadOrders();
        }
    }, [user]);

    if (!user) return <p>Cargando...</p>; // Si no hay usuario, muestra un mensaje de carga

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Perfil de Usuario</h1>
            <div style={{ marginBottom: "2rem" }}>
                <h2>Información Personal</h2>
                <p><strong>Nombre:</strong> {user.displayName || "No especificado"}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>ID de Usuario:</strong> {user.uid}</p>
            </div>

            <div>
                <h2>Mis Pedidos</h2>
                {orders.length > 0 ? (
                    <ul>
                        {orders.map((order) => (
                            <li key={order.id}>
                                <p><strong>Pedido ID:</strong> {order.id}</p>
                                <p><strong>Fecha:</strong> {new Date(order.date).toLocaleDateString()}</p>
                                <p><strong>Total:</strong> ${order.total}</p>
                                <p><strong>Estado:</strong> {order.status}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No tienes pedidos registrados.</p>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
