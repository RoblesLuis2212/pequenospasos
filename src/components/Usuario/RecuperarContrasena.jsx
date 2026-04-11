import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "./RecuperarContrasena.css";

const RecuperarContrasena = () => {
    return (
        <section className="container-fluid recuperar-container">
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="recuperar-card">
                        <div className="recuperar-icono d-flex justify-content-center align-items-center"><i className="bi bi-lock-fill"></i></div>
                        <h4 className="text-center titulo mt-2">¿Olvidaste tu contraseña?</h4>
                        <p className="text-muted text-center">Te enviaremos un enlace para restablecer tu contraseña. Valido por 30 minutos.</p>
                        <div className="d-flex justify-content-center">
                            <Form className='recuperar-form'>
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Correo Electronico</Form.Label>
                                    <Form.Control className='custom-input' type="email" placeholder="ej: juanperez@gmail.com" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <div className='d-flex flex-column'>
                                    <Button className='btn-principal nowrap' type="submit">
                                        Enviar enlace de recuperacion
                                    </Button>
                                </div>
                                <p className='text-muted mt-3 text-center'>¿No llego el correo? Revisá tu correo de spam o <br /><Link className='recuperar-texto'>Volvé a enviarlo</Link></p>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default RecuperarContrasena;