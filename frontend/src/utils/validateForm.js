// Validar que el email sea válido
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validar que la contraseña tenga una longitud mínima
export const isValidPassword = (password, minLength = 6) => {
    return password.length >= minLength;
};
