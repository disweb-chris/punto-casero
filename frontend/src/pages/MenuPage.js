import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/firebase/useProducts";

const MenuPage = () => {
    const { products, loading } = useProducts();

    if (loading) return <p>Cargando productos...</p>;

    return (
        <div>
            <Header />
            <main style={{ padding: "2rem" }}>
                <h1>Menú</h1>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "1rem"
                }}>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MenuPage;
