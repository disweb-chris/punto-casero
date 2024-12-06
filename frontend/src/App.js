import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { ProductsProvider } from "./context/ProductsContext";
import "./styles/index.css"; // Estilos globales
import "./styles/App.css";   // Estilos específicos

function App() {
    return (
        <AuthProvider>
            <ProductsProvider>
                <Router>
                    <AppRoutes />
                </Router>
            </ProductsProvider>
        </AuthProvider>
    );
}

export default App;
