import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../services/firebase/firebaseAuth";

const useAuth = () => {
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

    return { login, logout, error };
};

export default useAuth;
