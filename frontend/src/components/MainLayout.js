import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <main style={{ flex: 1, padding: "2rem" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;

