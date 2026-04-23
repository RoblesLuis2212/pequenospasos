import { Button } from "react-bootstrap";
import { aprobarCompraAPI, cancelarCompraAdmin, listarPedidosAPI } from "../../helpers/queries";
import Swal from "sweetalert2";
import ModalDetallePedido from "./ModalDetallePedido";
import { useState } from "react";

const ItemPedidos = ({ itemPedido, setPedidos }) => {
    const totalCantidadProductos = itemPedido.detalles.reduce((acc, detalle) => acc + detalle.cantidad, 0)

    const colorEstado = {
        "PENDIENTE": "warning",
        "APROBADO": "success",
        "RETIRADO": "success-subtle",
        "CANCELADO": "danger",
    }

    const aprobarCompra = async () => {
        const respuesta = await aprobarCompraAPI(itemPedido.idVenta);
        if (respuesta.status === 200) {
            Swal.fire({
                title: "La compra fue aprobada exitosamente!",
                icon: "success",
                draggable: true
            });
            const respuestaPedidos = await listarPedidosAPI();
            if (respuesta.status === 200) {
                const pedidosActualizados = await respuestaPedidos.json();
                setPedidos(pedidosActualizados);
            }
        }
    }

    const cancelarCompra = async () => {
        const respuesta = await cancelarCompraAdmin(itemPedido.idVenta);
        if (respuesta.status === 200) {
            Swal.fire({
                title: "La compra fue cancelada exitosamente!",
                icon: "success",
                draggable: true
            });

            const respuestaPedidos = await listarPedidosAPI();
            if (respuestaPedidos.status === 200) {
                const datosActualizados = await respuestaPedidos.json();
                setPedidos(datosActualizados);
            }
        }
    }

    //Estado para abrir modal de detalle del pedido
    const [modalDetallePedido, setModalDetallePedido] = useState(false);

    const cerrarModalDetallePedido = () => setModalDetallePedido(false);
    const abrirModalDetallePedido = () => setModalDetallePedido(true);

    return (
        <>
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
                        <Button variant="dark" className="me-2" onClick={abrirModalDetallePedido}><i className="bi bi-eye-fill"></i></Button>
                        {itemPedido.estado === "PENDIENTE" && (
                            <Button variant="success" className="me-2" onClick={aprobarCompra}><i className="bi bi-check-circle-fill"></i></Button>
                        )}
                        {(itemPedido.estado === "PENDIENTE" || itemPedido.estado === "APROBADO") && (
                            <Button variant="danger" className="me-2" onClick={cancelarCompra}><i className="bi bi-x-circle-fill"></i></Button>
                        )}
                    </div>
                </td>
            </tr>
            <ModalDetallePedido modalDetallePedido={modalDetallePedido} cerrarModalDetallePedido={cerrarModalDetallePedido}></ModalDetallePedido>
        </>
    );
};

export default ItemPedidos;