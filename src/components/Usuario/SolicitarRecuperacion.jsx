import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import "./RecuperarContrasena.css";
import { useForm } from 'react-hook-form';
import { solicitarRecuperacionPassword } from '../../helpers/queries';

const SolicitarRecuperacion = () => {
    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();
    const navigate = useNavigate();

    const postValidaciones = async (data) => {
        const respuesta = await solicitarRecuperacionPassword(data.email);
        if (respuesta.status === 200) {
            navigate("/confirmacion-correo", { state: { email: data.email } });
        }
        console.log(data);
        reset();
    }

    return (
        <section className="container-fluid recuperar-container">
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="recuperar-card">
                        <div className="recuperar-icono d-flex justify-content-center align-items-center"><i className="bi bi-lock-fill"></i></div>
                        <h4 className="text-center titulo mt-2">¿Olvidaste tu contraseña?</h4>
                        <p className="text-muted text-center">Te enviaremos un enlace para restablecer tu contraseña. Valido por 30 minutos.</p>
                        <div className="d-flex justify-content-center">
                            <Form className='recuperar-form' onSubmit={handleSubmit(postValidaciones)}>
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Correo Electronico</Form.Label>
                                    <Form.Control className='custom-input' type="email" placeholder="ej: juanperez@gmail.com"
                                        {...register("email", {
                                            required: "El correo es obligatorio",
                                            pattern: {
                                                value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                                message: "Email no valido"
                                            }
                                        })}
                                        onChange={() => clearErrors("email")}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.email?.message}
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

export default SolicitarRecuperacion;