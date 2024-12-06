import { useContext, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebase/firebaseAuth";
import { AuthContext } from "../../context/AuthContext";

const useAuth = () => {
    const { user } = useContext(AuthContext); // Acceso al usuario autenticado desde el contexto
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            setError(err.message);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            setError(err.message);
        }
    };

    return { user, login, logout, error }; // Incluye el usuario autenticado
};

export default useAuth;
