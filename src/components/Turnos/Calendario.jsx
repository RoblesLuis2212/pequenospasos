import esLocale from '@fullcalendar/core/locales/es';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendario.css";

const Calendario = () => {
    const fechayhoraSeleccionada = (selectInfo) => {
        const fecha = selectInfo.start;
        alert(`Seleccionaste: ${fecha.toLocaleString()}`)
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
                select={fechayhoraSeleccionada}
            />
        </div>
    );
};

export default Calendario;