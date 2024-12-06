import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../firebase-config";

// Obtener la instancia de Auth
const auth = getAuth(app);

// Función para iniciar sesión
export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Función para cerrar sesión
export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw new Error("Error al cerrar sesión");
    }
};

export { auth };
