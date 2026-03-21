import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardProducto = ({ nombre, imagen, precio }) => {
    return (
        <Link className='card-link'>
            <Card className='d-flex flex-column mt-4 mt-lg-3'>
                <Card.Img className='img-producto' src={imagen} />
                <Card.Body className='d-flex flex-column align-items-start'>
                    <Card.Title className='nombre-producto'>{nombre}</Card.Title>
                    <p className='precio-producto'>${precio}</p>
                    <Button className='btn-carrito'>Añadir al carrito</Button>
                </Card.Body>
            </Card>

        </Link>
    );
};

export default CardProducto;