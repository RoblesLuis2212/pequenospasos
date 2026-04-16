import TablaProductos from "./TablaProductos";
import "./Carrito.css";
import CardResumen from "./CardResumen";
import ContainerProductosRecomendados from "./ContainerProductosRecomendados";
import { obtenerCarritoUsuarioAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";

const Carrito = () => {

    const [productosCarrito, setProductosCarrito] = useState([]);

    const obtenerCarrito = async () => {
        const respuesta = await obtenerCarritoUsuarioAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setProductosCarrito(datos.carrito.detalleCarritos);
        }
    }

    useEffect(() => {
        obtenerCarrito();
    }, []);

    const actualizarCantidad = async (idDetalle, nuevaCantidad) => {
        //Evitamos se asignen cantidades negativas
        if (nuevaCantidad < 1) return;

        //actualizacion del estado local
        const carritoActualizado = productosCarrito.map((item) => {
            if (item.idDetalleCarrito === idDetalle) {
                return { ...item, cantidad: nuevaCantidad }
            }
            return item;
        })
        setProductosCarrito(carritoActualizado);
    }

    return (
        <>
            <section className='container mt-3'>
                <h4 className="titulo">Tu carrito de compras</h4>
                <div className="row g-4">
                    <div className="col-12 col-md-8 col-md-8">
                        <TablaProductos productosCarrito={productosCarrito} actualizarCantidad={actualizarCantidad}></TablaProductos>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <CardResumen></CardResumen>
                    </div>
                </div>
            </section>
            <ContainerProductosRecomendados></ContainerProductosRecomendados>
        </>
    );
};

export default Carrito;