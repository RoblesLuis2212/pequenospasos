import { Table, Button, InputGroup, Form } from 'react-bootstrap';
import './Admin.css';
import ItemTurnos from './ItemTurnos';
import { useState } from 'react';
import { set } from 'react-hook-form';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import ModalPagoTurno from './ModalPagoTurno';

const TurnosTabs = ({ turnos, setTurnos }) => {

    const [busqueda, setBusqueda] = useState("");

    const [filtroFecha, setFiltroFecha] = useState("");

    const turnosFiltrados = turnos.filter((p) => {
        const fecha = new Date(p.fecha);
        const ahora = new Date();

        const coincideBusqueda =
            p.paciente?.nombreCompleto?.toLowerCase().includes(busqueda.toLowerCase()) ||
            p.estado?.toLowerCase().includes(busqueda.toLowerCase()) ||
            fecha.toLocaleDateString("es-AR").includes(busqueda);

        if (filtroFecha === "hoy") return coincideBusqueda && fecha.toDateString() === ahora.toDateString();
        if (filtroFecha === "semana") {
            const haceSieteDias = new Date();
            haceSieteDias.setDate(ahora.getDate() - 7);
            return coincideBusqueda && fecha >= haceSieteDias;
        }
        if (filtroFecha === "mes") return coincideBusqueda && fecha.getMonth() === ahora.getMonth() && fecha.getFullYear() === ahora.getFullYear();

        return coincideBusqueda;
    });

    const exportarPlanillaPDF = () => {
        const doc = new jsPDF({ orientation: "landscape" });

        // Calcular lunes a viernes de la semana actual
        const hoy = new Date();
        const diaSemana = hoy.getDay(); // 0=domingo, 1=lunes...
        const lunes = new Date(hoy);
        lunes.setDate(hoy.getDate() - (diaSemana === 0 ? 6 : diaSemana - 1));

        const dias = Array.from({ length: 5 }, (_, i) => {
            const dia = new Date(lunes);
            dia.setDate(lunes.getDate() + i);
            return dia;
        });

        const nombresDias = dias.map((d) =>
            d.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" })
        );

        // Horarios de 16:30 a 21:30 cada 30 min
        const horarios = [];
        for (let h = 16; h <= 21; h++) {
            horarios.push(`${h.toString().padStart(2, "0")}:00`);
            if (h < 21) horarios.push(`${h.toString().padStart(2, "0")}:30`);
        }
        horarios.unshift("16:30");
        horarios.shift();

        // Armar horarios correctos
        const horariosCorrectos = [];
        let minutos = 30;
        let horas = 16;
        while (horas < 21 || (horas === 21 && minutos === 30)) {
            horariosCorrectos.push(`${horas.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`);
            minutos += 30;
            if (minutos === 60) { minutos = 0; horas++; }
        }

        // Filtrar turnos de esta semana
        const turnosSemana = turnos.filter((t) => {
            const fechaTurno = new Date(t.fecha);
            return fechaTurno >= dias[0] && fechaTurno <= dias[4];
        });

        // Construir filas
        const filas = horariosCorrectos.map((horario) => {
            const fila = [horario];
            dias.forEach((dia) => {
                const turno = turnosSemana.find((t) => {
                    const ft = new Date(t.fecha);
                    const horaTurno = `${ft.getHours().toString().padStart(2, "0")}:${ft.getMinutes().toString().padStart(2, "0")}`;
                    return ft.toDateString() === dia.toDateString() && horaTurno === horario;
                });
                fila.push(turno ? turno.paciente?.nombreCompleto || "" : "");
            });
            return fila;
        });

        // Título
        doc.setFontSize(14);
        doc.setFont("helvetica", "bold");
        doc.text("Planilla de turnos - Semana actual", 148, 15, { align: "center" });

        autoTable(doc, {
            startY: 22,
            head: [["Horario", ...nombresDias]],
            body: filas,
            styles: { fontSize: 8, halign: "center" },
            headStyles: { fillColor: [109, 40, 217], fontSize: 8 },
            columnStyles: { 0: { fontStyle: "bold", cellWidth: 20 } },
        });

        doc.save("planilla-turnos.pdf");
    };

    const [showPagoTurno, setShowPagoTurno] = useState(false);

    const cerrarModalPagoTurno = () => setShowPagoTurno(false);
    const abrirModalPagoTurno = () => setShowPagoTurno(true);

    return (
        <>
            <div className="admin-wrapper">
                <div className="admin-toolbar">
                    <InputGroup className="admin-search">
                        <Form.Control
                            placeholder="Buscar por nombre, fecha, estado..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <Button className="btn-buscar">Buscar</Button>
                    </InputGroup>
                </div>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <h6 className="turnos-titulo mb-0">Listado de turnos</h6>
                    <div className='d-flex align-items-center gap-2'>
                        <Button variant="danger" onClick={exportarPlanillaPDF}>
                            <i className="bi bi-printer-fill me-2"></i>Imprimir planilla
                        </Button>
                        <Form.Select
                            style={{ width: '150px', border: '2px solid purple' }}
                            value={filtroFecha}
                            onChange={(e) => setFiltroFecha(e.target.value)}
                            className='custom-input input-custom'
                        >
                            <option value="">Todos</option>
                            <option value="hoy">Hoy</option>
                            <option value="semana">Esta semana</option>
                            <option value="mes">Último mes</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="tabla-wrapper">
                    <Table hover className="admin-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Paciente</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {turnosFiltrados.length > 0 ? (
                                turnosFiltrados.map((itemTurno) => (
                                    <ItemTurnos itemTurno={itemTurno} key={itemTurno.idTurno} setTurnos={setTurnos} abrirModalPagoTurno={abrirModalPagoTurno}></ItemTurnos>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center py-4 text-muted">
                                        No hay turnos cargados
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
            <ModalPagoTurno showPagoTurno={showPagoTurno} abrirModalPagoTurno={abrirModalPagoTurno} cerrarModalPagoTurno={cerrarModalPagoTurno}></ModalPagoTurno>
        </>


    );
};

export default TurnosTabs;