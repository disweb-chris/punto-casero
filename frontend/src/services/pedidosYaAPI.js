const API_URL = "https://api.pedidosya.com/v3/shippings";
const API_KEY = "5973-222336-5f54bb46-9cb2-4010-52a5-14a8e3f83e5b"; // Reemplaza con tu API Key

// Obtener costos de envío desde la API de PedidosYa
export const fetchShippingCost = async (distance) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                distance,
                // Agrega cualquier otro parámetro requerido por la API
            }),
        });

        if (!response.ok) {
            throw new Error("Error al obtener el costo de envío");
        }

        const data = await response.json();
        return data.cost; // Cambia esto según el formato de respuesta de la API
    } catch (error) {
        console.error("Error al interactuar con la API de PedidosYa:", error);
        throw error;
    }
};
