import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
import ModalEditarDatos from './ModalEditarDatos';
import { useEffect, useState } from 'react';
import { obtenerUsuarioIDApi } from '../../helpers/queries';


const ModalPacientes = ({ showPacientes, cerrarModalPacientes, usuarioLogueado }) => {

    const navigate = useNavigate();

    const [showModalEditarDatos, setModalEditarDatos] = useState(false);

    const CerrarModalEditarDatos = () => setModalEditarDatos(false);
    const AbrirModalEditarDatos = () => setModalEditarDatos(true);

    //guardarmos el usuario ID del usuario que se guarda en el estado del componente App
    const idUsuario = usuarioLogueado?.usuario?.id;

    //Estado para guardar los datos del usuario
    const [datosUsuario, setDatosUsuario] = useState(null);

    //Obtenemos los datos del usuario apartir de su ID
    const obtenerUsuarioID = async () => {
        const respuesta = await obtenerUsuarioIDApi(idUsuario, usuarioLogueado?.token);
        if (respuesta?.status === 200) {
            const datos = await respuesta.json();
            console.log(datos);
            setDatosUsuario(datos);
        }
    }

    useEffect(() => {
        if (!usuarioLogueado?.usuario?.id || !usuarioLogueado?.token) return;
        obtenerUsuarioID();
    }, [usuarioLogueado]);

    return (
        <>
            <Modal show={showPacientes}>
                <Modal.Header className='titulo d-flex justify-content-center'>
                    <h4> Mis Niños</h4>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {datosUsuario?.pacientes.map((itemPaciente) => (
                            <ListGroup.Item className='d-flex justify-content-between'>
                                {/* Info del paciente */}
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi bi-person-square fs-4"></i>
                                    <span className="fw-semibold">{itemPaciente.nombreCompleto}</span>
                                </div>

                                {/* Botones */}
                                <div className="d-flex gap-2">
                                    <Button className='btn-secundario' size="sm" onClick={() => {
                                        cerrarModalPacientes();
                                        navigate(`/turnos/${itemPaciente.idPaciente}`)
                                    }}>
                                        Solicitar Turno
                                    </Button>
                                    <Button className="btn-secundario" onClick={() => {
                                        cerrarModalPacientes();
                                        AbrirModalEditarDatos();
                                    }} size="sm">
                                        Editar
                                    </Button>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Modal.Footer className='d-flex justify-content-center'>
                        <Button className='btn-principal w-100' onClick={cerrarModalPacientes}>Salir</Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal >
            <ModalEditarDatos show={showModalEditarDatos} handleClose={CerrarModalEditarDatos} usuarioLogueado={usuarioLogueado}></ModalEditarDatos>
        </>
    );
};

export default ModalPacientes;