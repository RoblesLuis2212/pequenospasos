import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const FormularioInicioSesion = () => {
    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(postValidaciones)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup className="input-pildora">
                    <InputGroupText>
                        <i className="bi bi-envelope-at-fill"></i>
                    </InputGroupText>
                    <Form.Control type="email" placeholder="Correo electronico"
                        {...register("email", {
                            required: "El email es un dato obligatorio",
                            pattern: {
                                value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                message: "Email no valido"
                            }
                        })}
                        onChange={() => clearErrors("email")}
                    />
                </InputGroup>
                <Form.Text className="text-danger">
                    {errors.email?.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <InputGroup className="input-pildora">
                    <InputGroupText>
                        <i class="bi bi-lock-fill"></i>
                    </InputGroupText>
                    <Form.Control type="password" placeholder="Contraseña"
                        {...register("password", {
                            required: "Este campo es obligatorio",
                            pattern: {
                                value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])\S{8,64}$/,
                                message: "contraseña no valida"
                            }
                        })}
                        onChange={() => clearErrors("password")}
                    />
                </InputGroup>
                <Form.Text className="text-danger">
                    {errors.password?.message}
                </Form.Text>
            </Form.Group>
            <div className='d-flex flex-column'>
                <Link className='text-decoration-none mb-2 align-self-end me-3'>¿Olvidaste tu contraseña?</Link>
                <Button className='btn-principal' type="submit">
                    Iniciar Sesion
                </Button>
                <p className='text-center mt-2'>¿No tienes cuenta? <Link to={"/registro"}>Registrate</Link></p>
            </div>
        </Form>
    );
};

export default FormularioInicioSesion;