import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProducto = ({ nombre, imagen, precio }) => {
    return (
        <Card className='d-flex flex-column mt-2'>
            <Card.Img className='img-producto' src={imagen} />
            <Card.Body className='d-flex flex-column align-items-start'>
                <Card.Title>{nombre}</Card.Title>
                <p>${precio}</p>
                <Button className='btn-carrito'>Añadir al carrito</Button>
            </Card.Body>
        </Card>
    );
};

export default CardProducto;