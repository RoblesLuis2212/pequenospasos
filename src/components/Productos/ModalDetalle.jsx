import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDetalle = ({ handleClose, show }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='d-flex justify-content-center'>
                    <img src={"https://http2.mlstatic.com/D_656188-MLA98308042610_112025-C.jpg"} alt="Producto en venta" className='img-detalle' />
                </Modal.Header>
                <Modal.Body>
                    <h3 className='nombre-producto'>Domino Juego de mesa</h3>
                    <p className='precio-producto'>$12000</p>
                    <p className='text-muted'>Clásico juego de dominó de 28 piezas con acabado de alta resistencia. Incluye estuche de almacenamiento y fichas con puntos de colores para facilitar la identificación numérica. Ideal para actividades recreativas y educativas en familia.</p>
                    <div className='d-flex flex-column justify-content-center gap-2 gap-md-3'>
                        <Button className='btn-principal'>Añadir al carrito</Button>
                        <Button className='btn-carrito seguir-compra' onClick={handleClose}>Seguir comprando</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ModalDetalle;