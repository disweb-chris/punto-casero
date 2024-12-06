import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MenuPage from "../pages/MenuPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProtectedRoute from "./ProtectedRoute";
import PaymentPage from "../pages/PaymentPage";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:id" element={<ProductDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registro" element={<RegisterPage />} />

            {/* Rutas protegidas */}
            <Route
                path="/pago"
                element={
                    <ProtectedRoute>
                        <PaymentPage /> 
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
