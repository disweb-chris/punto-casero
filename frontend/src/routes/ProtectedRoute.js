import { Navigate } from "react-router-dom";
import useAuth from "../hooks/firebase/useAuth";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    // Si no hay usuario autenticado, redirigir al login
    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
