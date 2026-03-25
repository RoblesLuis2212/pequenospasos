import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const FormularioRegistro = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Nombre completo</Form.Label>
                <Form.Control className='custom-input input-form' type="text" placeholder="ej: Martina Gomez" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Correo electronico</Form.Label>
                <Form.Control className='custom-input input-form' type="email" placeholder="ej: martinagomez@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Contraseña</Form.Label>
                <Form.Control className='custom-input input-form' type="text" placeholder="ej: minimo 8 caracteres" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Confirmar contraseña</Form.Label>
                <Form.Control className='custom-input input-form' type="text" placeholder="repetir contraseña" />
            </Form.Group>
            <div className="boton d-flex flex-column justify-content-center align-items-center">
                <Button className='btn-principal btn-registro' type="submit">
                    Crear Cuenta
                </Button>
                <p className='mt-3 texto'>¿Ya tienes cuenta?<Link className='ms-2'>Inicia Sesion</Link></p>
            </div>
        </Form>
    );
};

export default FormularioRegistro;