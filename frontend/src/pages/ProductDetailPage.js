import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/firebase/useAuth";
import useProducts from "../hooks/firebase/useProducts";

const ProductDetailPage = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const product = products.find((p) => p.id === id);

    if (!product) return <p>Producto no encontrado</p>;

    return (
        <div>
            <Header />
            <main style={{ padding: "2rem" }}>
                <h1>{product.nombre}</h1>
                <p>Descripción: {product.descripcion || "Sin descripción"}</p>
                <p>Precio: ${product.precio}</p>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetailPage;
