import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ModalIniciarSesion from './Usuario/ModalIniciarSesion';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ModalPacientes from './Pacientes/ModalPacientes';
import Swal from 'sweetalert2';

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
    // Estados para abrir el modal de inicio de sesion
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //hook para la redireccion a las diferentes paginas de la web
    const navigate = useNavigate();

    //obtenemos la ubicacion del usuario en la web
    const ubicacion = useLocation();
    const registro = location.pathname === "/registro";

    const cerrarSesion = () => {
        //Eliminamos el item del usuario en el session storage para cerrar la sesion
        sessionStorage.removeItem("usuarioKey");
        setUsuarioLogueado({});
        navigate("/"); //Al cerrar sesion redirigimos al usuario a la pagina principal
    }

    //verificamos si el usuario esta logueado para permitirle sacar un turno
    const verificarSesion = () => {
        if (!usuarioLogueado.usuario) {
            Swal.fire({
                icon: "warning",
                title: "Atención",
                text: "Debes iniciar sesión para realizar esta acción",
                confirmButtonText: "Entendido",
                confirmButtonColor: "#f0ad4e",
            });
            return false;
        }
        return true;
    }

    const [showPacientes, setShowPacientes] = useState(false);

    const cerrarModalPacientes = () => setShowPacientes(false);
    const abrirModalPacientes = () => setShowPacientes(true);

    return (
        <div>
            <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand className='logo ms-2' as={Link} to="/">Pequeños Pasos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto align-items-center mt-1 mt-md-0">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link>Tratamientos</Nav.Link>
                            <Nav.Link>Tienda</Nav.Link>
                            <NavDropdown title="Niños">
                                <NavDropdown.Item onClick={abrirModalPacientes} className='nav-link'>Turnos</NavDropdown.Item>
                                <NavDropdown.Item className='nav-link' onClick={() => {
                                    if (verificarSesion()) {
                                        navigate("/registro-pacientes");
                                    }
                                }}>Registrar Paciente</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='align-items-center me-4'>
                            {usuarioLogueado.usuario ? (
                                <>
                                    <Button className='btn-principal ms-4 ms-md-2' onClick={cerrarSesion}><i className="bi bi-box-arrow-left me-2"></i>Cerrar Sesion</Button>
                                </>
                            ) : (
                                <>
                                    {/* si el usuario esta en la pagina de registro se oculta el boton */}
                                    {!registro && (
                                        <Nav.Link className='ms-4 ms-md-2' as={Link} to={"/registro"}>Registrarse</Nav.Link>
                                    )}
                                    <Button className='btn-principal ms-4 ms-md-2' onClick={handleShow}>Iniciar Sesion</Button>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ModalIniciarSesion handleClose={handleClose} show={show} setUsuarioLogueado={setUsuarioLogueado}></ModalIniciarSesion>
            <ModalPacientes showPacientes={showPacientes} cerrarModalPacientes={cerrarModalPacientes} usuarioLogueado={usuarioLogueado} show={handleShow}></ModalPacientes>
        </div>
    );
};

export default Menu;