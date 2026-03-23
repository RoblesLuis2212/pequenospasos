import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contacto.css";

const FormularioContacto = () => {
    return (
        <section className='container-fluid bg-fondo py-3'>
            <h3 className='text-center'>Acompañamos el crecimiento de tu pequeño</h3>
            <p className='text-center'>¿Tienes dudas sobre la fonoudiologia? Estamos aqui para ayudarte a navegar cada paso de este camino ligero como una nube.</p>
            <div className="row">
                <div className="col-12 col-md-6 custom-form-container">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='etiquetas'>Nombre completo</Form.Label>
                            <Form.Control type="text" placeholder="ej: Juan Perez" className='custom-input' />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='etiquetas'>Correo electronico</Form.Label>
                            <Form.Control type="email" placeholder="ej: juanperez@gmail.com" className='custom-input' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='etiquetas'>¿Como podemos ayudarte?</Form.Label>
                            <Form.Control
                                className='custom-input'
                                as="textarea"
                                placeholder="deja tu comentario aqui"
                                style={{ height: '100px' }}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-12 col-md-6">1234</div>
            </div>
        </section>
    );
};

export default FormularioContacto;