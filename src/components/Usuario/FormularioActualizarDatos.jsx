import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioActualizarDatos = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Label className='etiquetas'>Nombre completo</Form.Label>
                <Form.Control className='input-pildora' type="text" placeholder="Ej: Juan Perez" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Telefono</Form.Label>
                <Form.Control className='input-pildora' type="text" placeholder="ej: España 120" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Email</Form.Label>
                <Form.Control className='input-pildora' type="email" placeholder="ej: juanperez@gmail.com" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <div className="d-flex flex-column justify-content-center">
                <Button className='btn-principal mt-2' type="submit">
                    Actualizar datos
                </Button>
            </div>
        </Form>
    );
};

export default FormularioActualizarDatos;