import { listarProductosAPI } from "../../helpers/queries";
import CardProducto from "../Productos/CardProducto";
import FiltroProductos from "./FiltroProductos";
import Search from "./Search";
import "./Tienda.css";
import { useEffect, useState } from "react";

const Tienda = () => {

    const [productos, setProductos] = useState([]);

    const obtenerProductos = async () => {
        const respuesta = await listarProductosAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setProductos(datos);
        }
    }

    useEffect(() => {
        obtenerProductos();
    }, [])

    return (
        <section className='container-fluid fondo-tienda pb-5'>
            <div className="row">
                <h4 className='titulo text-center mt-4'>Tienda</h4>
                <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-between">
                    <div style={{ maxWidth: "300px" }}>
                        <Search></Search>
                    </div>
                    <div className="me-end">
                        <FiltroProductos></FiltroProductos>
                    </div>
                </div>
                {productos.map((itemProducto) => (
                    <div className="col-12 col-md-6 col-lg-3" key={itemProducto.idProducto}>
                        <CardProducto itemProducto={itemProducto}></CardProducto>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tienda;