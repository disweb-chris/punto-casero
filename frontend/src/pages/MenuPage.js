import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/firebase/useProducts";

const MenuPage = () => {
    const { products, loading } = useProducts();

    if (loading) return <p>Cargando productos...</p>;

    return (
        <main style={{ padding: "2rem" }}>
            <h1>Menú</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "1rem",
                }}
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
    );
};

export default MenuPage;
