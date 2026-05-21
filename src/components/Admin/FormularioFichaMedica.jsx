import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioFichaMedica = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Edad que comenzo a caminar</Form.Label>
                <Form.Control type="text" placeholder="ej: 2 años y medio" className='custom-input input-form' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Socializacion</Form.Label>
                <Form.Control type="text" placeholder="ej: juega con los niños en su escuela" className='custom-input' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Derivacion</Form.Label>
                <Form.Control type="text" placeholder="ej: derivado por Neurologo" className='custom-input' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Horarios de Sueño</Form.Label>
                <Form.Control type="text" placeholder="ej: duerme a la noche apartir de las 22hs" className='custom-input' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Contacto visual</Form.Label>
                <Form.Control type="text" placeholder="ej: solo con su madre" className='custom-input' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Actividades</Form.Label>
                <Form.Control type="text" placeholder="ej: asiste a hockey los dias Lunes y Miercoles" className='custom-input' />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Button className='btn-principal' type="submit">
                Guardar datos
            </Button>
        </Form>
    );
};

export default FormularioFichaMedica;