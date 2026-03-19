import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Menu = () => {
    return (
        <div>
            <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand className='logo ms-2'>Pequeños Pasos</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto align-items-center">
                            <Nav.Link active>Inicio</Nav.Link>
                            <Nav.Link>Tratamientos</Nav.Link>
                            <Nav.Link>Tienda</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center me-4'>
                            <Nav.Link className='me-2'>Registrarse</Nav.Link>
                            <Button className='btn-principal'>Solicitar Turno</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;