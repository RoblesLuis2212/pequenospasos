import esLocale from '@fullcalendar/core/locales/es';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendario.css";
import Swal from 'sweetalert2';
import ModalDatosTurno from './ModalDatosTurno';
import { useState } from 'react';

const Calendario = () => {
    const fechayhoraSeleccionada = (selectInfo) => {
        const fecha = selectInfo.start;
        alert(`Seleccionaste: ${fecha.toLocaleString()}`)
    }

    //Estado para manejar el modal de informacion del turno
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        }).then((result) => {
            if (result.isConfirmed) {
                setShow(true);
            }
        });
    }

    return (
        <div style={{ maxWidth: "900px", margin: "40px auto" }}>
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
            />
            <ModalDatosTurno handleClose={handleClose} show={show}></ModalDatosTurno>
        </div>
    );
};

export default Calendario;