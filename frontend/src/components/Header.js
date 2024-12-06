import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={{ background: '#657c33', color: '#fff', padding: '1rem' }}>
            <h1 style={{ margin: 0 }}>Punto Casero</h1>
            <nav>
                <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Inicio</Link>
                <Link to="/menu" style={{ color: '#fff' }}>Menú</Link>
            </nav>
        </header>
    );
};

export default Header;
