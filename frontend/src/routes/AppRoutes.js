import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Ruta pública */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Ruta protegida */}
            <Route
                path="/menu"
                element={
                    <ProtectedRoute>
                        <MenuPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/menu/:id"
                element={
                    <ProtectedRoute>
                        <ProductDetailPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
