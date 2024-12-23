import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase/firebaseAuth";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Limpiar errores previos
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuario autenticado:", userCredential.user); // Confirmar autenticación
            navigate("/pago"); // Redirigir después de autenticarse
        } catch (err) {
            console.error("Error al iniciar sesión:", err.message);
            setError("Error al iniciar sesión: " + err.message);
        }
    };

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Iniciar Sesión</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleLogin} style={{ maxWidth: "300px", margin: "0 auto" }}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: "block", width: "100%", marginBottom: "1rem" }}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: "block", width: "100%", marginBottom: "1rem" }}
                />
                <button type="submit" style={{ padding: "0.5rem 1rem", background: "#007bff", color: "#fff", border: "none" }}>
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
