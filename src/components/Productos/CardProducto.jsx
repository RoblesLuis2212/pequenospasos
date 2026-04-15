import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ModalDetalle from './ModalDetalle';
import { useState } from 'react';

const CardProducto = ({ itemProducto }) => {
    //Estados para abrir la ventana modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Link className='card-link'>
            <Card className='d-flex flex-column mt-4 mt-lg-3 h-100 w-100'>
                <Card.Img className='img-producto' src={itemProducto.imagen} />
                <Card.Body className='d-flex flex-column align-items-start'>
                    <Card.Title className='nombre-producto'>{itemProducto.nombre}</Card.Title>
                    <p className='precio-producto'>${itemProducto.precio}</p>
                    <Button className='btn-carrito mt-auto' onClick={handleShow}>Ver Más</Button>
                </Card.Body>
            </Card>
            <ModalDetalle handleClose={handleClose} show={show} itemProducto={itemProducto}></ModalDetalle>
        </Link>
    );
};

export default CardProducto;