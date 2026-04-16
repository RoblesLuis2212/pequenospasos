import TablaProductos from "./TablaProductos";
import "./Carrito.css";
import CardResumen from "./CardResumen";
import ContainerProductosRecomendados from "./ContainerProductosRecomendados";
import { AgregarAlCarritoAPI, obtenerCarritoUsuarioAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";

const Carrito = () => {

    const [productosCarrito, setProductosCarrito] = useState([]);
    const [detalleCarrito, setDetalleCarrito] = useState([]);

    const obtenerCarrito = async () => {
        const respuesta = await obtenerCarritoUsuarioAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setProductosCarrito(datos.carrito.detalleCarritos);
            setDetalleCarrito(datos);
        }
    }

    useEffect(() => {
        obtenerCarrito();
    }, []);

    const actualizarCantidad = async (idDetalle, nuevaCantidad) => {
        //Evitamos se asignen cantidades negativas
        if (nuevaCantidad < 1) return;

        const item = productosCarrito.find(i => i.idDetalleCarrito === idDetalle)
        if (!item) return;
        console.log(item);

        await AgregarAlCarritoAPI(item.productoId, nuevaCantidad);
        await obtenerCarrito();
    }

    return (
        <>
            <section className='container mt-3'>
                <h4 className="titulo">Tu carrito de compras</h4>
                <div className="row g-4">
                    <div className="col-12 col-md-8 col-md-8">
                        <TablaProductos productosCarrito={productosCarrito} actualizarCantidad={actualizarCantidad} obtenerCarrito={obtenerCarrito} ></TablaProductos>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <CardResumen detalleCarrito={detalleCarrito}></CardResumen>
                    </div>
                </div>
            </section>
            <ContainerProductosRecomendados></ContainerProductosRecomendados>
        </>
    );
};

export default Carrito;