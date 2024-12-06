import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Seleccionar el elemento raíz
const rootElement = document.getElementById("root");

// Crear la raíz usando createRoot
const root = ReactDOM.createRoot(rootElement);

// Renderizar la aplicación
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
