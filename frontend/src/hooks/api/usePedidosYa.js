import { useState, useEffect } from "react";

const usePedidosYa = (distance) => {
    const [shippingCost, setShippingCost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchShippingCost = async () => {
            try {
                const response = await fetch("https://api.pedidosya.com/shipping", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer 5973-222336-5f54bb46-9cb2-4010-52a5-14a8e3f83e5b",
                    },
                    body: JSON.stringify({ distance }),
                });

                const data = await response.json();
                setShippingCost(data.cost);
            } catch (error) {
                console.error("Error al obtener costo de envío:", error);
            } finally {
                setLoading(false);
            }
        };

        if (distance) {
            fetchShippingCost();
        }
    }, [distance]);

    return { shippingCost, loading };
};

export default usePedidosYa;
