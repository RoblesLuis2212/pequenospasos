import { buscarProductoAPI, filtrarProductosAPI, listarProductosAPI, paginacion } from "../../helpers/queries";
import CardProducto from "../Productos/CardProducto";
import FiltroProductos from "./FiltroProductos";
import Search from "./Search";
import "./Tienda.css";
import { useEffect, useState } from "react";
import Paginado from "./Paginado";

const Tienda = () => {

    const [productos, setProductos] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [cantidadPagina, setCantidadPagina] = useState(1);
    const [categoria, setCategoria] = useState("");
    const [busqueda, setBusqueda] = useState("");

    const obtenerProductos = async (pagina = 1, cat = categoria, bus = busqueda) => {
        let respuesta;
        if (bus) {
            respuesta = await buscarProductoAPI(bus, pagina);
        } else if (cat) {
            respuesta = await filtrarProductosAPI(cat, pagina)
        } else {
            respuesta = await paginacion(pagina);
        }
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setProductos(datos.productos);
            setCantidadPagina(datos.cantPaginas);
        }
    }

    useEffect(() => {
        obtenerProductos(paginaActual, categoria, busqueda);
    }, [paginaActual, categoria, busqueda]);



    return (
        <section className='container-fluid fondo-tienda pb-2'>
            <div className="row">
                <h4 className='titulo text-center mt-4'>Tienda</h4>
                <div className="col-12 d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-between">
                    <div style={{ maxWidth: "300px" }}>
                        <Search setBusqueda={setBusqueda}></Search>
                    </div>
                    <div className="me-end">
                        <FiltroProductos setCategoria={setCategoria}></FiltroProductos>
                    </div>
                </div>
                {productos.map((itemProducto) => (
                    <div className="col-12 col-md-6 col-lg-3" key={itemProducto.idProducto}>
                        <CardProducto itemProducto={itemProducto}></CardProducto>
                    </div>
                ))}
            </div>
            <Paginado
                totalPaginas={cantidadPagina}
                paginaActiva={paginaActual}
                setPaginaActiva={setPaginaActual}
            ></Paginado>
        </section>
    );
};

export default Tienda;