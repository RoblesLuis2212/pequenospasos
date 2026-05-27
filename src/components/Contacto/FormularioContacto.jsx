import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contacto.css";
import { useForm } from 'react-hook-form';
import { enviarCorreoAPI } from '../../helpers/queries';
import Swal from 'sweetalert2';

const FormularioContacto = () => {

    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();

    const postValidaciones = async (data) => {
        const respuesta = await enviarCorreoAPI(data);
        if (respuesta.status === 200) {
            Swal.fire({ title: "Correo enviado correctamente!", icon: "success" });
        } else {
            Swal.fire({ title: "Ocurrio un error al enviar el correo. Intentelo más tarde!", icon: "error" });
        }
        reset();
    }
    return (
        <section className='container-fluid bg-fondo py-3'>
            <h3 className='text-center titulo mt-3'>Acompañamos el crecimiento de tu pequeño</h3>
            <p className='text-center text-muted'>¿Tienes dudas sobre la fonoudiologia? Estamos aqui para ayudarte a navegar cada paso de este camino ligero como una nube.</p>
            <div className="row justify-content-center animacion-entrada">
                {/* Formulario de contacto */}
                <div className="col-12 col-md-8 custom-form-container">
                    <Form onSubmit={handleSubmit(postValidaciones)}>
                        <h3 className='text-center titulo'>Contacto</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='etiquetas'>Nombre completo</Form.Label>
                            <Form.Control type="text" placeholder="ej: Juan Perez" className='custom-input'
                                {...register("nombre", {
                                    required: "El nombre es un dato obligatorio",
                                    minLength: {
                                        value: 5,
                                        message: "El nombre debe contener minimo 5 caracteres"
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "El nombre debe contener maximo 100 caracteres"

                                    }
                                })}
                                onChange={() => clearErrors("nombre")}
                            />
                            <Form.Text className="text-danger">
                                {errors.nombreCompleto?.message}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className='etiquetas'>Correo electronico</Form.Label>
                            <Form.Control type="email" placeholder="ej: juanperez@gmail.com" className='custom-input'
                                {...register("email", {
                                    required: "El email es un dato obligatorio",
                                    pattern: {
                                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        message: "Email invalido"
                                    }
                                })}
                                onChange={() => clearErrors("email")}
                            />
                            <Form.Text className='text-danger'>
                                {errors.email?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className='etiquetas'>¿Como podemos ayudarte?</Form.Label>
                            <Form.Control
                                className='custom-input'
                                as="textarea"
                                placeholder="deja tu comentario aqui"
                                style={{ height: '100px' }}
                                {...register("mensaje", {
                                    required: "Este campo es obligatorio",
                                    minLength: {
                                        value: 20,
                                        message: "La consulta debe contener minimo 20 caracteres"
                                    },
                                    maxLength: {
                                        value: "200",
                                        message: "La consulta debe contener maximo 200 caracteres"
                                    }
                                })}
                                onChange={() => clearErrors("mensaje")}
                            />
                            <Form.Text className='text-danger'>
                                {errors.mensaje?.message}
                            </Form.Text>
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