import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDatosTurno = ({ handleClose, show }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='justify-content-center align-items-center mt-2'>
                <h4 className='titulo mt-1'>Detalles del turno</h4>
            </Modal.Header>
            <Modal.Body>
                <p><strong>Paciente:</strong> Juan Perez</p>
                <p><strong>Edad:</strong> 10 años</p>
                <p><strong>DNI:</strong> 46747522</p>
                <p><strong>Padre/tutor:</strong> Mariana Perez</p>
                <p><strong>Obra Social:</strong> Subsidio</p>
                <p><strong>Fecha:</strong> Miercoles 1 de Abril</p>
                <p><strong>Horario:</strong> 16:30 hs</p>
                <p><strong>Duración de consulta:</strong> 30 min</p>
                <div className="opciones d-flex justify-content-around">
                    <Button className='btn-principal mt-2' onClick={handleClose}><i className="bi bi-patch-check-fill me-2"></i>Aceptar</Button>
                    <Button className='btn-secundario mt-2'><i className="bi bi-printer-fill me-2"></i>Imprimir</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalDatosTurno;