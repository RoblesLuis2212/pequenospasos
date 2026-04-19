import { createContext, useEffect, useState } from "react";
import { obtenerCarritoUsuarioAPI } from "../helpers/queries";

export const ContextCarrito = createContext();

export const CarritoProvider = ({ children }) => {
    const [productosCarrito, setProductosCarrito] = useState([]);
    const [detallesCarrito, setDetallesCarrito] = useState([]);

    const obtenerCarrito = async () => {
        const respuesta = obtenerCarritoUsuarioAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setDetallesCarrito(datos)
            setProductosCarrito(datos.carrito.detallesCarrito);
        }
    }

    useEffect(() => {
        obtenerCarrito
    }, []);

    return (
        <ContextCarrito.Provider
            value={{
                productosCarrito,
                detallesCarrito,
                obtenerCarrito
            }}
        >
            {children}
        </ContextCarrito.Provider>
    )
}
