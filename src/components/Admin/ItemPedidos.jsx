import { Button } from "react-bootstrap";

const ItemPedidos = ({ itemPedido }) => {
    const totalCantidadProductos = itemPedido.detalles.reduce((acc, detalle) => acc + detalle.cantidad, 0)

    const colorEstado = {
        "PENDIENTE": "warning",
        "APROBADO": "success",
        "RETIRADO": "success-subtle",
        "CANCELADO": "danger",
    }

    return (
        <tr>
            <td>{itemPedido.idVenta}</td>
            <td>{itemPedido.usuario.nombreCompleto}</td>
            <td>{totalCantidadProductos}</td>
            <td>${itemPedido.monto}</td>
            <td>
                <span className={`badge bg-${colorEstado[itemPedido.estado]}`}>
                    {itemPedido.estado}
                </span>
            </td>
            <td>
                <div>
                    <Button variant="dark" className="me-2"><i className="bi bi-eye-fill"></i></Button>
                    <Button variant="success" className="me-2"><i className="bi bi-check-circle-fill"></i></Button>
                    <Button variant="danger"><i className="bi bi-x-circle-fill"></i></Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemPedidos;