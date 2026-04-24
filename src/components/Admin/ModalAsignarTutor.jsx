import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { asignarTutorAPI, listarPacientesAPI, listarPacientesPadresAPI } from '../../helpers/queries';
import Swal from 'sweetalert2';

const ModalAsignarTutor = ({ showModalTutor, cerrarModalTutor, itemPaciente, setPaciente }) => {

    const [usuarios, setUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

    const listarUsuarios = async () => {
        const respuesta = await listarPacientesPadresAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log("Datos pacientes padres: ", datos);
            setUsuarios(datos);
        }
    }

    useEffect(() => {
        listarUsuarios();
    }, [])

    useEffect(() => {
        if (showModalTutor) {
            listarUsuarios();
            setBusqueda("");
            setUsuarioSeleccionado(null);
        }
    }, [showModalTutor])

    const usuariosFiltrados = busqueda.length > 0
        ? usuarios.filter((u) =>
            u.nombreCompleto?.toLowerCase().includes(busqueda.toLowerCase()) ||
            u.email?.toLowerCase().includes(busqueda.toLowerCase())
        )
        : [];

    const asignarTutor = async () => {
        const respuesta = await asignarTutorAPI(itemPaciente.idPaciente, usuarioSeleccionado.idUsuario);
        if (respuesta.status === 200) {
            Swal.fire({
                title: "Tutor asignado correctamente!",
                icon: "success",
                draggable: true
            });
            const respuestaPacientes = await listarPacientesAPI();
            if (respuestaPacientes.status === 200) {
                const datos = await respuestaPacientes.json();
                setPaciente(datos);
                cerrarModalTutor();
            }
        }

    }

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
                    onChange={(e) => setBusqueda(e.target.value)}
                />

                {busqueda.length > 0 && (
                    <ListGroup style={{ maxHeight: '250px', overflowY: 'auto' }}>
                        {usuariosFiltrados.length > 0 ? (
                            usuariosFiltrados.map((usuario) => (
                                <ListGroup.Item
                                    key={usuario.idUsuario}
                                    action
                                    active={usuarioSeleccionado?.idUsuario === usuario.idUsuario}
                                    onClick={() => setUsuarioSeleccionado(usuario)}
                                    className="d-flex align-items-center gap-2"
                                >
                                    <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                        style={{ width: '36px', height: '36px', fontSize: '13px', flexShrink: 0 }}>
                                        {usuario.nombreCompleto?.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="mb-0 fw-semibold" style={{ fontSize: '14px' }}>{usuario.nombreCompleto}</p>
                                        <small className="text-muted">{usuario.email}</small>
                                    </div>
                                </ListGroup.Item>
                            ))
                        ) : (
                            <ListGroup.Item className="text-center text-muted">
                                No se encontraron usuarios
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn-principal' onClick={cerrarModalTutor}>Cancelar</Button>
                <Button
                    className='btn-principal'
                    disabled={!usuarioSeleccionado}
                    onClick={asignarTutor}
                >
                    Asociar tutor
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAsignarTutor;