import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, Watch } from 'react-hook-form';
import { cambiarContrasena } from '../../helpers/queries';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FormularioCambiarContrasena = () => {

    const { handleSubmit, register, formState: { errors }, reset, clearErrors, watch } = useForm();

    const password = watch("nuevaPassword");
    const navigate = useNavigate();

    const postValidaciones = async (data) => {
        const respuesta = await cambiarContrasena(data);
        if (respuesta.status === 200) {
            Swal.fire({
                title: "Contraseña actualizada exisamente!",
                icon: "success",
                draggable: true
            });
        }
        navigate("/");
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(postValidaciones)}>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Contraseña actual</Form.Label>
                <Form.Control className='custom-input' type="password" placeholder="ingrese su contraseña actual"
                    {...register("passwordActual", {
                        required: "Este campo es obligatorio"
                    })}
                    onChange={() => clearErrors("passwordActual")}
                />
                <Form.Text className='text-danger'>{errors.passwordActual?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Nueva contraseña</Form.Label>
                <Form.Control className='custom-input' type="password" placeholder="Minimo 8 caracteres"
                    {...register("nuevaPassword", {
                        required: "Este campo es obligatorio",
                        pattern: {
                            value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,64}/,
                            message: "La contraseña debe contener una mayuscula, una minuscula, un numero y un caracter especial"
                        }
                    })}
                    onChange={() => clearErrors("nuevaPassword")}
                />
                <Form.Text className='text-danger'>{errors.nuevaPassword?.message}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Confirmar nueva contraseña</Form.Label>
                <Form.Control className='custom-input' type="password" placeholder="Confirma la contraseña"
                    {...register("confirmarPassword", {
                        required: "Este campo es obligatorio",
                        validate: (valor) => valor === password || "Las contraseñas no coinciden"
                    })}
                    onChange={() => clearErrors("confirmarPassword")}
                />
                <Form.Text className='text-danger'>{errors.confirmarPassword?.message}</Form.Text>
            </Form.Group>
            <div className='d-flex flex-column justifyc-content-center'>
                <Button className='btn-principal mt-2' type="submit">
                    Cambiar contraseña
                </Button>
            </div>
        </Form>
    );
};

export default FormularioCambiarContrasena;