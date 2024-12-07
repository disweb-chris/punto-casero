import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MenuPage from "../pages/MenuPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProtectedRoute from "./ProtectedRoute";
import PaymentPage from "../pages/PaymentPage";
import MainLayout from "../components/MainLayout"; 
import Checkout from "../components/Checkout";
import RestaurantPanel from '../components/RestaurantPanel';
import ProfilePage from "../pages/ProfilePage";

const AppRoutes = () => {
    return (
        <MainLayout>
            <Routes>
                {/* Rutas públicas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/menu/:id" element={<ProductDetailPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/restaurant" element={<RestaurantPanel />} />

                {/* Rutas protegidas */}
                <Route
                    path="/pago"
                    element={
                        <ProtectedRoute>
                            <PaymentPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/perfil"
                    element={
                        <ProtectedRoute>
                            <ProfilePage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </MainLayout>
    );
};

export default AppRoutes;
