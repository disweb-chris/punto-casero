import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <Header />
            <main style={{ padding: "2rem", textAlign: "center" }}>
                <h1>Bienvenido a Punto Casero</h1>
                <p>Los mejores platos caseros al alcance de tu mano.</p>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
