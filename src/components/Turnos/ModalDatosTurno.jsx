import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import jsPDF from 'jspdf';

const ModalDatosTurno = ({ handleClose, show, datosPaciente, fechaLegible, horaLegible }) => {
    if (!datosPaciente) return null;

    const calcularEdad = () => {
        const hoy = new Date();
        const nacimiento = new Date(datosPaciente?.fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();

        // Si todavía no llegó el cumpleaños este año, restamos 1
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    const descargarPDF = () => {
        const doc = new jsPDF();


        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('Detalles del Turno', 105, 20, { align: 'center' });

        doc.setFontSize(12);

        // Paciente
        doc.setFont('helvetica', 'bold');
        doc.text('Paciente:', 20, 50);
        doc.setFont('helvetica', 'normal');
        doc.text(`${datosPaciente?.nombreCompleto}`, 55, 50);

        // DNI
        doc.setFont('helvetica', 'bold');
        doc.text('DNI:', 20, 60);
        doc.setFont('helvetica', 'normal');
        doc.text(`${datosPaciente?.dni}`, 55, 60);

        // Domicilio
        doc.setFont('helvetica', 'bold');
        doc.text('Domicilio:', 20, 70);
        doc.setFont('helvetica', 'normal');
        doc.text(`${datosPaciente?.domicilio}`, 55, 70);

        // Obra Social
        doc.setFont('helvetica', 'bold');
        doc.text('Obra Social:', 20, 80);
        doc.setFont('helvetica', 'normal');
        doc.text(`${datosPaciente?.obraSocial?.nombre ?? 'Sin obra social'}`, 55, 80);

        // Padre/tutor
        doc.setFont('helvetica', 'bold');
        doc.text('Padre/tutor:', 20, 90);
        doc.setFont('helvetica', 'normal');
        doc.text(`${datosPaciente?.usuario?.nombreCompleto}`, 55, 90);

        // Fecha
        doc.setFont('helvetica', 'bold');
        doc.text('Fecha:', 20, 100);
        doc.setFont('helvetica', 'normal');
        doc.text(`${fechaLegible}`, 55, 100);

        // Horario
        doc.setFont('helvetica', 'bold');
        doc.text('Horario:', 20, 110);
        doc.setFont('helvetica', 'normal');
        doc.text(`${horaLegible} hs`, 55, 110);

        // Duración
        doc.setFont('helvetica', 'bold');
        doc.text('Duración:', 20, 120);
        doc.setFont('helvetica', 'normal');
        doc.text('30 min', 55, 120);

        doc.save(`turno-${datosPaciente?.nombreCompleto}.pdf`);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='justify-content-center align-items-center mt-2'>
                <h4 className='titulo mt-1'>Detalles del turno</h4>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Paciente:</strong> {datosPaciente?.nombreCompleto}</p>
                <p><strong>Edad:</strong> {calcularEdad(datosPaciente?.fechaNacimiento)} años</p>
                <p><strong>DNI:</strong> {datosPaciente?.dni}</p>
                <p><strong>Padre/tutor:</strong> {datosPaciente?.usuario.nombreCompleto}</p>
                <p><strong>Obra Social:</strong> {datosPaciente?.obraSocial?.nombre ?? 'Sin obra social'}</p>
                <p><strong>Fecha:</strong> {fechaLegible}</p>
                <p><strong>Horario:</strong> {horaLegible} hs</p>
                <p><strong>Duración de consulta:</strong> {datosPaciente?.obraSocial.duracionConsulta}</p>
                <div className="opciones d-flex justify-content-around">
                    <Button className='btn-secundario mt-2' onClick={descargarPDF}><i className="bi bi-filetype-pdf me-2"></i>Descargar PDF</Button>
                    <Button className='btn-principal mt-2' onClick={handleClose}><i className="bi bi-patch-check-fill me-2"></i>Aceptar</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalDatosTurno;