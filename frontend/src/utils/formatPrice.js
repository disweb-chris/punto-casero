const formatPrice = (price) => {
    return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "USD",
    }).format(price);
};

export default formatPrice;
