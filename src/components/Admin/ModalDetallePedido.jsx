import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDetallePedido = ({ modalDetallePedido, cerrarModalDetallePedido, itemPedido }) => {

    const fecha = new Date(itemPedido.fechaCompra);

    const opciones = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let texto = fecha.toLocaleDateString("es-AR", opciones).replace(",", "");

    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");

    const fechaFinal = `${texto} ${hora}:${minutos} hs`;


    return (
        <Modal show={modalDetallePedido} onHide={cerrarModalDetallePedido}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>Detalle pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>ID compra: </strong>{itemPedido.idVenta}</p>
                <p><strong>Nombre completo: </strong>{itemPedido.usuario.nombreCompleto}</p>
                <p><strong>Fecha de compra: </strong>{fechaFinal}</p>
                <p><strong>Retiro en: </strong>Belgrano 625 Monteros</p>
                <p><strong>Productos: </strong></p>
                <ul className="list-group ms-4 mt-0 mb-3">
                    {itemPedido.detalles?.map((item, index) => (
                        <li key={index} >{item.producto?.nombre} x {item.cantidad} = ${item.precio_unitario * item.cantidad}</li>
                    ))}
                </ul>
                <p><strong>Estado del pedido: </strong>{itemPedido.estado}</p>
                <p><strong>Total pedido: </strong>${itemPedido.monto}</p>
            </Modal.Body>
        </Modal>
    );
};

export default ModalDetallePedido;