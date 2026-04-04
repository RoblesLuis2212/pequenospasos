import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ModalIniciarSesion from './Usuario/ModalIniciarSesion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    // Estados para abrir el modal de inicio de sesion
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand className='logo ms-2' as={Link} to="/">Pequeños Pasos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto align-items-center mt-1 mt-md-0">
                            <Nav.Link>Inicio</Nav.Link>
                            <Nav.Link>Tratamientos</Nav.Link>
                            <Nav.Link>Tienda</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center me-4'>
                            <Nav.Link className='ms-4 ms-md-2' as={Link} to={"/registro"}>Registrarse</Nav.Link>
                            <Button className='btn-principal ms-4 ms-md-2' onClick={handleShow}>Iniciar Sesion</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ModalIniciarSesion handleClose={handleClose} show={show}></ModalIniciarSesion>
        </div>
    );
};

export default Menu;