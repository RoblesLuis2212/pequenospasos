import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registro } from '../../helpers/queries';
import Swal from 'sweetalert2';

const FormularioRegistro = () => {

    const { register, handleSubmit, formState: { errors }, watch, reset, clearErrors } = useForm()
    const password = watch("password");

    const navigate = useNavigate();

    const postValidaciones = async (data) => {
        const { confirmarPassword, ...dataSinConfirmar } = data;

        const dataCompleta = { ...dataSinConfirmar, rolId: 2 };
        const respuesta = await registro(dataCompleta);
        if (respuesta.status === 201) {
            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            });
            navigate("/");
            reset();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error en el registro',
                text: 'No se pudo crear la cuenta. Intentelo mas tarde.',
            });
        }
    }

    return (
        <Form onSubmit={handleSubmit(postValidaciones)}>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Nombre completo</Form.Label>
                <Form.Control className='custom-input input-form' type="text" placeholder="ej: Martina Gomez"
                    {...register("nombreCompleto", {
                        required: "Esta campo es obligatorio",
                        minLength: {
                            value: 3,
                            message: "El nombre debe tener minimo 12 caracteres"
                        },
                        maxLength: {
                            value: 100,
                            message: "El nombre debe contener maximo 100 caracteres"
                        }
                    })}
                    onChange={() => clearErrors("nombreCompleto")}
                />
                <Form.Text className="text-danger">
                    {errors.nombreCompleto?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Correo electronico</Form.Label>
                <Form.Control className='custom-input input-form' type="email" placeholder="ej: martinagomez@gmail.com"
                    {...register("email", {
                        required: "Este campo es obligatorio",
                        pattern: {
                            value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                            message: "El email ingresado no es valido"
                        }
                    })}
                    onChange={() => clearErrors("email")}
                />
                <Form.Text className='text-danger'>
                    {errors.email?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label className='etiquetas'>Telefono</Form.Label>
                <Form.Control className='custom-input input-form' type='text' placeholder='ej: 3863587896'
                    {...register("telefono", {
                        required: "El telefono es un dato obligatorio",
                        minLength: {
                            value: 10,
                            message: "El telefono debe tener minimo 10 digitos"
                        },
                        maxLength: {
                            value: 15,
                            message: "El telefono debe tener maximo 15 digitos"
                        }
                    })}
                    onChange={() => clearErrors("telefono")}
                />
                <Form.Text>
                    {errors.telefono?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Contraseña</Form.Label>
                <Form.Control className='custom-input input-form' type="password" placeholder="ej: minimo 8 caracteres"
                    {...register("password", {
                        required: "Este campo es obligatorio",
                        pattern: {
                            value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,64}/,
                            message: "La contraseña debe contener al menos una minuscula, una mayuscula, un numero y un caracter especial"
                        }
                    })}
                    onChange={() => clearErrors("password")}
                />
                <Form.Text className='text-danger'>
                    {errors.password?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Confirmar contraseña</Form.Label>
                <Form.Control className='custom-input input-form' type="password" placeholder="repetir contraseña"
                    {...register("confirmarPassword", {
                        required: "Confirma tu contraseña",
                        validate: (value) => value === password || "Las contraseñas no coinciden"
                    })}
                    onChange={() => clearErrors("confirmarPassword")}
                />
                <Form.Text className='text-danger'>
                    {errors.confirmarPassword?.message}
                </Form.Text>
            </Form.Group>
            <div className="boton d-flex flex-column justify-content-center align-items-center">
                <Button className='btn-principal btn-registro' type="submit">
                    Crear Cuenta
                </Button>
                <p className='mt-3 texto'>¿Ya tienes cuenta?<Link className='ms-2'>Inicia Sesion</Link></p>
            </div>
        </Form>
    );
};

export default FormularioRegistro;