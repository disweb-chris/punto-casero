import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase/firebaseAuth";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Registro exitoso. Ahora puedes iniciar sesión.");
            setEmail("");
            setPassword("");
        } catch (err) {
            setError("Error al registrarse: " + err.message);
        }
    };

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Registro</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <form onSubmit={handleRegister} style={{ maxWidth: "300px", margin: "0 auto" }}>
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
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
