/src
  /components            # Componentes reutilizables
    Header.js
    Footer.js
    ProductCard.js
  /context               # Archivos relacionados con Context API
    AuthContext.js       # Contexto para autenticación
    ProductsContext.js   # Contexto para manejar productos globalmente
  /pages                 # Vistas principales
    HomePage.js
    MenuPage.js
    ProductDetailPage.js
    LoginPage.js         # Ejemplo de página de inicio de sesión
  /routes                # Configuración de rutas
    AppRoutes.js         # Define las rutas principales
  /services              # Lógica relacionada con Firebase y APIs externas
    firebase.js
    pedidosYaAPI.js
  /hooks                 # Hooks personalizados
    useProducts.js
    useAuth.js
  /styles                # Estilos globales y específicos
    index.css
    App.css
  /utils                 # Utilidades comunes
    formatPrice.js
    validateForm.js
  App.js                 # Archivo principal que renderiza AppRoutes
  index.js               # Entrada principal de React
  firebase-config.js     # Configuración inicial de Firebase
