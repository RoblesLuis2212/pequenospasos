import React, { useEffect } from 'react';
import { Button, Badge } from 'react-bootstrap';
import ModalDatosTurno from './ModalDatosTurno';
import { useState } from 'react';
import { obtenerPacienteIDAPI } from '../../helpers/queries';

const ItemTurno = ({ itemTurno, nombreTutor }) => {
    //Estado para manejar el modal de informacion del turno
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    const fecha = new Date(itemTurno.fecha);
    const fechaLegible = fecha.toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const horaLegible = fecha.toLocaleTimeString("es-AR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    return (
        <>
            <tr>
                <td>{itemTurno.idTurno}</td>
                <td>{itemTurno.paciente?.nombreCompleto}</td>
                <td>{new Date(itemTurno.fecha).toLocaleTimeString("es-AR", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false
                })} hs</td>
                <td>
                    {getBadge(itemTurno.estado)}</td>
                <td>
                    <div className='d-flex'>
                        <Button variant='success' className='me-2' onClick={handleShow}><i className="bi bi-eye-fill"></i></Button>
                        <Button variant='danger'><i className="bi bi-x-circle-fill"></i></Button>
                    </div>
                </td>
            </tr>
            <ModalDatosTurno show={show} handleClose={handleClose} fechaLegible={fechaLegible} horaLegible={horaLegible} datosPaciente={itemTurno.paciente}></ModalDatosTurno >
        </>
    );
};

export default ItemTurno;