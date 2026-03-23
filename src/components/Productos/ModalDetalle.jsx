import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDetalle = ({ handleClose, show }) => {
    return (
        <Modal show={show} onHide={handleClose} size='lg' centered>
            <Modal.Body className='p-0 overflow-hidden'>
                {/* Imagen */}
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center p-4">
                        <img src={"https://http2.mlstatic.com/D_656188-MLA98308042610_112025-C.jpg"} alt="Producto en venta" className='img-detalle' />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 p-md-5 d-flex flex-column justify-content-center">
                        {/* Informacion del producto */}
                        <h3 className='nombre-producto nombre-modal ms-4 ms-md-0'>Domino</h3>
                        <div className='d-flex justify-content-start'>
                            <p className='precio-producto ms-4 ms-md-0'>$12000</p>
                            <p className='categoria-producto ms-2'>Juegos de mesa</p>
                        </div>
                        <p className='text-muted ms-3 ms-md-0'>Clásico juego de dominó de 28 piezas con acabado de alta resistencia. Incluye estuche de almacenamiento y fichas con puntos de colores para facilitar la identificación numérica. Ideal para actividades recreativas y educativas en familia.</p>
                        <div className='d-flex flex-column gap-2 gap-md-3'>
                            <Button className='btn-principal mx-3'>Añadir al carrito</Button>
                            <Button className='btn-principal seguir-compra mx-3' onClick={handleClose}>Seguir comprando</Button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal >
    );
};

export default ModalDetalle;