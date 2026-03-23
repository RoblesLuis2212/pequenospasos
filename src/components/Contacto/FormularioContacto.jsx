import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contacto.css";

const FormularioContacto = () => {
    return (
        <section className='container-fluid bg-fondo py-3'>
            <h3 className='text-center titulo mt-3'>Acompañamos el crecimiento de tu pequeño</h3>
            <p className='text-center text-muted'>¿Tienes dudas sobre la fonoudiologia? Estamos aqui para ayudarte a navegar cada paso de este camino ligero como una nube.</p>
            <div className="row justify-content-center animacion-entrada">
                {/* Formulario de contacto */}
                <div className="col-12 col-md-8 custom-form-container">
                    <Form>
                        <h3 className='text-center titulo'>Contacto</h3>
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
                        <Button className="btn-principal" type="submit">
                            Enviar mensaje
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default FormularioContacto;