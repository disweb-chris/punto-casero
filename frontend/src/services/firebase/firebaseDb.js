import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import { app } from "../../firebase-config";

// Obtener la instancia de Firestore
const db = getFirestore(app);

// Obtener todos los productos
export const fetchProducts = async () => {
    const productsCollection = collection(db, "productos");
    const productsSnapshot = await getDocs(productsCollection);
    return productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};

// Obtener detalles de un producto por ID
export const fetchProductById = async (id) => {
    const productDoc = doc(db, "productos", id);
    const productSnapshot = await getDoc(productDoc);
    if (!productSnapshot.exists()) {
        throw new Error("Producto no encontrado");
    }
    return { id: productSnapshot.id, ...productSnapshot.data() };
};

export { db };
