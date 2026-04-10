import React from 'react';
import { Button, Badge } from 'react-bootstrap';

const ItemTurno = ({ itemTurno, nombreTutor }) => {
    const estado = 'PENDIENTE';

    const getBadge = (estado) => {
        const colores = {
            PENDIENTE: 'warning',
            APROBADO: 'success',
            CANCELADO: 'danger',
            FINALIZADO: 'secondary'
        };
        return <Badge bg={colores[estado] ?? 'secondary'}>{estado}</Badge>;
    }
    return (
        <>
            <tr>
                <td>{itemTurno.idTurno}</td>
                <td>{itemTurno.paciente?.nombreCompleto}</td>
                <td>{nombreTutor}</td>
                <td>{new Date(itemTurno.fecha).toLocaleDateString('es-ES')}</td>
                <td>{getBadge(itemTurno.estado)}</td>
                <td>
                    <div className='d-flex'>
                        <Button variant='success' className='me-2'><i className="bi bi-eye-fill"></i></Button>
                        <Button variant='danger'><i className="bi bi-x-circle-fill"></i></Button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ItemTurno;