import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDatosCompra = ({ showModalCompra, cerrarModalCompra, detalleCarrito, venta }) => {

    const usuario = JSON.parse(sessionStorage.getItem("usuarioKey")).usuario.nombre;
    console.log(usuario);

    const fecha = new Date(venta.fechaCompra);

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
        <Modal show={showModalCompra} onHide={cerrarModalCompra}>
            <Modal.Header className='d-flex justify-content-center align-items-center'>
                <h4 className='text-center titulo'>Reserva de pedido exitoso!</h4>
            </Modal.Header>
            <Modal.Body>
                <p><strong>ID compra: </strong>{venta.idVenta}</p>
                <p><strong>Nombre completo: </strong>{usuario}</p>
                <p><strong>Fecha de compra: </strong>{fechaFinal}</p>
                <p><strong>Retiro en: </strong>Belgrano 625 Monteros</p>
                <p><strong>Productos: </strong></p>
                <ul className='list-group ms-4 mt-0 mb-3'>
                    {detalleCarrito.carrito?.detalleCarritos?.map((item, index) => (
                        <li key={index}>{item.producto?.nombre} x {item.cantidad} = <strong>${item.producto?.precio * item.cantidad}</strong></li>
                    ))}
                </ul>
                <p><strong>Estado del pedido: </strong>PENDIENTE</p>
                <p><strong>Total Pedido: </strong>${detalleCarrito.total}</p>
            </Modal.Body>
        </Modal>
    );
};

export default ModalDatosCompra;