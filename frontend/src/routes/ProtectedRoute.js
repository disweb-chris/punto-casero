import { Navigate } from "react-router-dom";
import useAuth from "../hooks/firebase/useAuth"; 

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    console.log("Usuario autenticado en ProtectedRoute:", user);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
