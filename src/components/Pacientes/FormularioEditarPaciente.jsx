import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioEditarPaciente = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control type="text" placeholder="ej: Juan Perez" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>DNI</Form.Label>
                <Form.Control type="text" placeholder="ej: 45875521" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Domicilio</Form.Label>
                <Form.Control type="text" placeholder="ej: España 1030" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Obra Social</Form.Label>
                <Form.Select>
                    <option value="">Seleccione una obra social</option>
                    <option value="1">Subsidio</option>
                    <option value="2">Soreme</option>
                    <option value="3">San Nicolas</option>
                    <option value="4">Ricardo Mora</option>
                </Form.Select>
            </Form.Group>
            <div className="boton d-flex justify-content-center">
                <Button className='btn-principal w-100' type="submit">
                    Actualizar
                </Button>
            </div>
        </Form>
    );
};

export default FormularioEditarPaciente;