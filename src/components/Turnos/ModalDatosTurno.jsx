import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
                <p><strong>Obra Social:</strong> {datosPaciente?.obraSocial.nombre}</p>
                <p><strong>Fecha:</strong> {fechaLegible}</p>
                <p><strong>Horario:</strong> {horaLegible} hs</p>
                <p><strong>Duración de consulta:</strong> {datosPaciente?.obraSocial.duracionConsulta}</p>
                <div className="opciones d-flex justify-content-around">
                    <Button className='btn-secundario mt-2'><i className="bi bi-printer-fill me-2"></i>Imprimir</Button>
                    <Button className='btn-principal mt-2' onClick={handleClose}><i className="bi bi-patch-check-fill me-2"></i>Aceptar</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalDatosTurno;