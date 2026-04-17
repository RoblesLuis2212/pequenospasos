import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDatosCompra = ({ showModalCompra, cerrarModalCompra }) => {
    return (
        <Modal show={showModalCompra} onHide={cerrarModalCompra}>
            <Modal.Header className='d-flex justify-content-center align-items-center'>
                <h4 className='text-center titulo'>Reserva de pedido exitoso!</h4>
            </Modal.Header>
            <Modal.Body>
                <p><strong>ID compra: </strong>2</p>
                <p><strong>Nombre completo: </strong>Juan Perez</p>
                <p><strong>Fecha de compra: </strong>Viernes 17 de Abril 11:50</p>
                <p><strong>Retiro en: </strong>Belgrano 625 Monteros</p>
                <p><strong>Productos: </strong></p>
                <ul className='list-group ms-4 mt-0 mb-3'>
                    <li>Dominó x 2 = <strong>$12000</strong></li>
                    <li>Naipes españoles x 1 = <strong>$5000</strong></li>
                </ul>
                <p><strong>Estado del pedido: </strong>PENDIENTE</p>
                <p><strong>Total Pedido: </strong>$15000</p>
            </Modal.Body>
        </Modal>
    );
};

export default ModalDatosCompra;