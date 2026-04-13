import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormularioCambiarContrasena = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Contraseña actual</Form.Label>
                <Form.Control className='custom-input' type="password" placeholder="ingrese su contraseña actual" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Nueva contraseña</Form.Label>
                <Form.Control className='custom-input' type="password" placeholder="Minimo 8 caracteres" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Confirmar nueva contraseña</Form.Label>
                <Form.Control className='custom-input' type="password" placeholder="Confirma la contraseña" />
            </Form.Group>
            <div className='d-flex flex-column justifyc-content-center'>
                <Button className='btn-principal' type="submit">
                    Cambiar contraseña
                </Button>
            </div>
        </Form>
    );
};

export default FormularioCambiarContrasena;