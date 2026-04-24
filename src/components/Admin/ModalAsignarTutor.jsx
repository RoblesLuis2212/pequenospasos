import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { listarPacientesAPI, listarPacientesPadresAPI } from '../../helpers/queries';

const ModalAsignarTutor = ({ showModalTutor, cerrarModalTutor, itemPaciente }) => {

    const [usuarios, setUsuarios] = useState([]);

    const listarPacientes = async () => {
        const respuesta = await listarPacientesPadresAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log("Datos pacientes padres: ", datos);
            setUsuarios(datos);
        }
    }

    useEffect(() => {
        listarPacientes();
    }, [])
    return (
        <Modal show={showModalTutor} onHide={cerrarModalTutor}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>Asociar tutor al paciente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Info del paciente */}
                <div className="p-2 mb-3 rounded" style={{ background: 'var(--bs-secondary-bg)' }}>
                    <p className="mb-0 fw-semibold">{itemPaciente.nombreCompleto}</p>
                    <small className="text-muted">Sin tutor asignado</small>
                </div>

                {/* Buscador */}
                <Form.Control
                    type="text"
                    placeholder="Buscar por nombre,DNI o email..."
                    className="mb-3"
                />

                {/* Lista de usuarios */}
                <ListGroup style={{ maxHeight: '250px', overflowY: 'auto' }}>
                    <ListGroup.Item action className="d-flex align-items-center gap-2">
                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                            style={{ width: '36px', height: '36px', fontSize: '13px', flexShrink: 0 }}>
                            G
                        </div>
                        <div>
                            <p className="mb-0 fw-semibold" style={{ fontSize: '14px' }}>Geremias Robles</p>
                            <small className="text-muted">geremiasrobles@gmail.com</small>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item action className="d-flex align-items-center gap-2">
                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                            style={{ width: '36px', height: '36px', fontSize: '13px', flexShrink: 0 }}>
                            M
                        </div>
                        <div>
                            <p className="mb-0 fw-semibold" style={{ fontSize: '14px' }}>María González</p>
                            <small className="text-muted">mariagonzalez@gmail.com</small>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Modal.Body>
        </Modal>
    );
};

export default ModalAsignarTutor;