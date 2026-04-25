import esLocale from '@fullcalendar/core/locales/es';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendario.css";
import Swal from 'sweetalert2';
import ModalDatosTurno from './ModalDatosTurno';
import { useEffect, useState } from 'react';
import { listarTurnos, obtenerPacienteIDAPI, solicitarTurnoAPI } from '../../helpers/queries';
import { useNavigate, useParams } from 'react-router-dom';

const Calendario = () => {
    //Estado para manejar el modal de informacion del turno
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();


    const [turnos, setTurnos] = useState([]);
    const [turnosSeleccionado, setTurnoSeleccionado] = useState();
    const [datosPaciente, setDatosPaciente] = useState(null);
    const [fechaLegibleS, setFechaLegible] = useState();
    const [horaLegibleS, setHoraLegible] = useState();
    const { id } = useParams(); //Se extrae el ID del paciente de la url
    const idUsuario = JSON.parse(sessionStorage.getItem("usuarioKey")).usuario.id;


    const obtenerDatosPaciente = async () => {
        const respuesta = await obtenerPacienteIDAPI(Number(id));
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setDatosPaciente(datos);
            console.log("datos del paciente: ", datos);
        }
    }

    const obtenerTurnos = async () => {
        const respuesta = await listarTurnos();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            const eventos = datos.filter((turno) => turno.estado !== "CANCELADO").map((turno) => ({
                id: turno.idTurno,
                title: 'Ocupado',
                start: turno.fecha,
                end: new Date(new Date(turno.fecha).getTime() + 30 * 60000).toISOString(),
                backgroundColor: '#dc3545',
                borderColor: '#dc3545',
            }));
            setTurnos(eventos);
        }
    }

    const selectAllow = (selectInfo) => {
        const fechaSeleccionada = selectInfo.start.toISOString();

        // Verificamos si la fecha seleccionada coincide con algún turno ocupado
        const estaOcupado = turnos.some((turno) => {
            const fechaTurno = new Date(turno.start).toISOString();
            return fechaTurno === fechaSeleccionada;
        });

        return !estaOcupado; // si está ocupado retorna false y bloquea la selección
    }

    useEffect(() => {
        obtenerDatosPaciente();
        obtenerTurnos();
    }, [])

    //Ventana de sweet alert para confirmar la reserva del turno
    const confirmarTurno = (selectInfo) => {
        const fecha = selectInfo.start;

        // Opciones para formatear la fecha de forma amigable para el usuario
        const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long' };
        const opcionesHora = { hour: '2-digit', minute: '2-digit' };

        const fechaLegible = fecha.toLocaleDateString('es-ES', opcionesFecha);
        const horaLegible = fecha.toLocaleTimeString('es-ES', opcionesHora);

        Swal.fire({
            title: "¿Confirmar Reserva?",
            text: `Has seleccionado un turno para el dia ${fechaLegible} a las ${horaLegible} hs`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, reservar",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const data = { fecha: fecha.toISOString(), pacienteId: Number(id) };
                const respuesta = await solicitarTurnoAPI(data);
                if (respuesta.status === 201) {
                    Swal.fire({
                        title: "Reserva de turno exitosa!",
                        icon: "success",
                        draggable: true
                    });
                    obtenerTurnos();
                    const rol = JSON.parse(sessionStorage.getItem("usuarioKey")).usuario.rol;
                    if (rol !== "ADMIN") {
                        navigate("/mis-turnos");
                    } else {
                        navigate("/admin")
                    }

                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Ocurrió un error al reservar el turno. Inténtalo nuevamente.",
                    });
                }
                setFechaLegible(fechaLegible);
                setHoraLegible(horaLegible);
                setTurnoSeleccionado(fecha);
            }
        });
    }

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                locale={esLocale}
                hiddenDays={[0, 2, 4, 6]} //Se habilitan los dias lunes, miercoles y viernes
                slotMinTime="16:30:00"
                slotMaxTime="21:30:00"
                slotDuration="00:30:00"
                allDaySlot={false}
                contentHeight="auto"
                slotLabelInterval="00:30:00"
                slotLabelFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    omitZeroMinute: false,
                    meridiem: false
                }}
                validRange={{
                    start: new Date() //Con esto evitamos que se pueda solicitar un turno en una fecha anterior a la actual
                }}
                selectable={"true"}
                select={confirmarTurno}
                events={turnos}
                selectAllow={selectAllow}
                displayEventTime={false}
            />
            <ModalDatosTurno handleClose={handleClose} show={show} datosPaciente={datosPaciente} fechaLegible={fechaLegibleS} horaLegible={horaLegibleS}></ModalDatosTurno>
        </div>
    );
};

export default Calendario;