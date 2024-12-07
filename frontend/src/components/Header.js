import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/firebase/firebaseAuth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext); // Estado del usuario autenticado

    const handleLogout = async () => {
        try {
            await logout(); // Cierra la sesión
            navigate("/login"); // Redirige al login
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <header style={{ background: '#657c33', color: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {/* Título del sitio */}
            <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Punto Casero</h1>

            {/* Navegación */}
            <nav style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/" style={{ marginRight: '1rem', color: '#fff', textDecoration: 'none' }}>Inicio</Link>
                <Link to="/menu" style={{ marginRight: '1rem', color: '#fff', textDecoration: 'none' }}>Menú</Link>

                {user ? (
                    <>
                        {/* Foto y perfil del usuario */}
                        <Link to="/perfil" style={{ display: 'flex', alignItems: 'center', marginRight: '1rem', color: '#fff', textDecoration: 'none' }}>
                            {user.photoURL && (
                                <img 
                                    src={user.photoURL} 
                                    alt="Foto de perfil" 
                                    style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '0.5rem' }} 
                                />
                            )}
                            <span>{user.displayName || "Perfil"}</span>
                        </Link>

                        {/* Botón de cerrar sesión */}
                        <button
                            onClick={handleLogout}
                            style={{
                                background: 'transparent',
                                border: '1px solid #fff',
                                borderRadius: '5px',
                                color: '#fff',
                                padding: '0.5rem 1rem',
                                cursor: 'pointer',
                                textDecoration: 'none'
                            }}
                        >
                            Cerrar Sesión
                        </button>
                    </>
                ) : (
                    // Enlace de inicio de sesión si no está autenticado
                    <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Iniciar Sesión</Link>
                )}
            </nav>
        </header>
    );
};

export default Header;
