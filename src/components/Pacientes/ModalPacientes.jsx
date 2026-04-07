import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';


const ModalPacientes = ({ showPacientes, cerrarModalPacientes }) => {

    const navigate = useNavigate();

    return (
        <Modal show={showPacientes}>
            <Modal.Header className='titulo d-flex justify-content-center'>
                <h4> Mis Niños</h4>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    <ListGroup.Item className='d-flex justify-content-between'>
                        {/* Info del paciente */}
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-person-square fs-4"></i>
                            <span className="fw-semibold">Matias Lizarraga</span>
                        </div>

                        {/* Botones */}
                        <div className="d-flex gap-2">
                            <Button className='btn-secundario' size="sm" onClick={() => {
                                cerrarModalPacientes();
                                navigate("/turnos")
                            }}>
                                Solicitar Turno
                            </Button>
                            <Button className="btn-secundario" as={Link} to={"/registro-pacientes"} size="sm">
                                Editar
                            </Button>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button className='btn-principal w-100' onClick={cerrarModalPacientes}>Salir</Button>
                </Modal.Footer>
            </Modal.Body>
        </Modal >
    );
};

export default ModalPacientes;