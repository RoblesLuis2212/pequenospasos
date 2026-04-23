import { Badge, Button } from "react-bootstrap";

const ItemProducto = ({ itemProducto, abrirModalProductosEditar }) => {

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
                    <Button variant="warning me-2"><i className="bi bi-exclamation-triangle-fill"></i></Button>
                    <Button variant="info me-2" onClick={() => abrirModalProductosEditar(itemProducto)}><i className="bi bi-pencil-square"></i></Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemProducto;