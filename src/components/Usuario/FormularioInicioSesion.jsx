import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { Link } from 'react-router-dom';

const FormularioInicioSesion = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup className="input-pildora">
                    <InputGroupText>
                        <i className="bi bi-envelope-at-fill"></i>
                    </InputGroupText>
                    <Form.Control type="email" placeholder="Correo electronico" />
                </InputGroup>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <InputGroup className="input-pildora">
                    <InputGroupText>
                        <i class="bi bi-lock-fill"></i>
                    </InputGroupText>
                    <Form.Control type="password" placeholder="Contraseña" />
                </InputGroup>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <div className='d-flex flex-column'>
                <Link className='text-decoration-none mb-2 align-self-end me-3'>¿Olvidaste tu contraseña?</Link>
                <Button className='btn-principal' type="submit">
                    Iniciar Sesion
                </Button>
                <p className='text-center mt-2'>¿No tienes cuenta? <Link to={"/registro"}>Registrate gratis</Link></p>
            </div>
        </Form>
    );
};

export default FormularioInicioSesion;