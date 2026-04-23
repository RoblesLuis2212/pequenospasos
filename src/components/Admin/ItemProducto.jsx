import { Badge, Button } from "react-bootstrap";
import { cambiarEstadoProductoAPI, listarProductosAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({ itemProducto, abrirModalProductosEditar, setProductos }) => {

    const formatearFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
        const hora = fecha.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
        const fechaTexto = fecha.toLocaleDateString('es-ES', opciones);

        return `${fechaTexto} ${hora} hs`;
    }

    const colorEstado = {
        "DISPONIBLE": "success",
        "INACTIVO": "danger"
    }

    const cambiarEstadoProducto = async () => {
        const estado = itemProducto.estado;
        if (estado === "DISPONIBLE") {
            const estadoNuevo = "INACTIVO";
            const respuesta = await cambiarEstadoProductoAPI(itemProducto.idProducto, estadoNuevo);
            if (respuesta.status === 200) {
                const datosNuevos = await listarProductosAPI();
                if (respuesta.status === 200) {
                    const productosActualizados = await datosNuevos.json();
                    setProductos(productosActualizados);
                }
                Swal.fire({
                    title: "Producto creado exitosamente!",
                    icon: "success",
                    draggable: true
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ocurrió un error al actualizar el estado del producto. Intentelo mas tarde.',
                    confirmButtonText: 'Aceptar'
                });
            }

        } else {
            const estadoNuevo = "DISPONIBLE";
            const respuesta = await cambiarEstadoProductoAPI(itemProducto.idProducto, estadoNuevo);
            if (respuesta.status === 200) {
                const respuestaDatos = await listarProductosAPI();
                if (respuestaDatos.status === 200) {
                    const productosActualizados = await respuestaDatos.json();
                    setProductos(productosActualizados);
                }
            }
        }
    }

    return (
        <tr>
            <td>{itemProducto.idProducto}</td>
            <td>
                <img src={itemProducto.imagen} className='img-producto-admin' alt="imagen producto" />
            </td>
            <td>{itemProducto.nombre}</td>
            <td>{itemProducto.categoria.nombre}</td>
            <td>{itemProducto.stock}</td>
            <td>{formatearFecha(itemProducto.fechaUltimaActualizacion)}</td>
            <td>${itemProducto.precio}</td>
            <td>
                <span className={`badge bg-${colorEstado[itemProducto.estado]}`}>
                    {itemProducto.estado}
                </span>
            </td>
            <td>
                <div className="">
                    <Button variant="warning me-2" onClick={cambiarEstadoProducto}><i className="bi bi-exclamation-triangle-fill"></i></Button>
                    <Button variant="info me-2" onClick={() => abrirModalProductosEditar(itemProducto)}><i className="bi bi-pencil-square"></i></Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemProducto;