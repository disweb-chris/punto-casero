const ProductCard = ({ product }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
            background: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
            <h3>{product.nombre}</h3>
            <p>Precio: ${product.precio}</p>
            <button style={{
                padding: '0.5rem 1rem',
                background: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}>
                Ver Detalle
            </button>
        </div>
    );
};

export default ProductCard;
