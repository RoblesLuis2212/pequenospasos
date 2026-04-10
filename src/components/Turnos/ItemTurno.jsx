import React, { useEffect } from 'react';
import { Button, Badge, CardImg } from 'react-bootstrap';
import ModalDatosTurno from './ModalDatosTurno';
import { useState } from 'react';
import { cambiarEstadoTurnoPaciente, obtenerPacienteIDAPI } from '../../helpers/queries';
import Swal from 'sweetalert2';

const ItemTurno = ({ itemTurno, nombreTutor, obtenerTurnos }) => {
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

    const cambiarEstado = async () => {
        const result = await Swal.fire({
            title: "¿Cancelar turno?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, cancelar",
            cancelButtonText: "No",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
        });
        if (!result.isConfirmed) return;

        const respuesta = await cambiarEstadoTurnoPaciente(itemTurno.idTurno, "CANCELADO");
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            Swal.fire("Cancelado", "El turno fue cancelado", "success");
            obtenerTurnos();
        }
    }

    return (
        <>
            <tr className='text-center'>
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
                    {getBadge(itemTurno.estado)}
                </td>
                <td>
                    <div className='d-flex flex-column justify-content-center'>
                        <Button variant='success' onClick={handleShow}><i className="bi bi-eye-fill"></i> </Button>
                        {itemTurno.estado !== "CANCELADO" && itemTurno.estado !== "FINALIZADO" && (
                            <Button variant='danger' className='mt-2' onClick={cambiarEstado}><i className="bi bi-x-circle-fill me-1"></i></Button>
                        )}
                    </div>
                </td>
            </tr >
            <ModalDatosTurno show={show} handleClose={handleClose} fechaLegible={fechaLegible} horaLegible={horaLegible} datosPaciente={itemTurno.paciente}></ModalDatosTurno >
        </>
    );
};

export default ItemTurno;