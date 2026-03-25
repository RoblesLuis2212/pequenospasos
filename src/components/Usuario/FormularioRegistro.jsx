import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioRegistro = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre completo</Form.Label>
                <Form.Control type="text" placeholder="ej: Martina Gomez" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control type="email" placeholder="ej: martinagomez@gmail.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="text" placeholder="ej: minimo 8 caracteres" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control type="text" placeholder="repetir contraseña" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default FormularioRegistro;