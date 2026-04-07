import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ModalIniciarSesion from './Usuario/ModalIniciarSesion';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
        </div>
    );
};

export default Menu;