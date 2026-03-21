import React from 'react';
import Card from 'react-bootstrap/Card';

const CardTratamiento = ({ icono, titulo, descripcion }) => {
    return (
        <Card className='border rounded-5 p-4 h-100 card-tratamiento mt-2'>
            <div className="icono"><i className={icono}></i></div>
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardTratamiento;