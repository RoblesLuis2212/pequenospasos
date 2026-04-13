import Button from 'react-bootstrap/Button';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { InputGroup } from 'react-bootstrap';

const FormularioActualizarDatos = () => {
    const { handleSubmit, register, formState: { errors }, reset, clearErrors } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
    }

    return (
        <Form onSubmit={handleSubmit(postValidaciones)}>
            <Form.Group className='mb-3'>
                <Form.Label className='etiquetas'>Nombre completo</Form.Label>
                <InputGroup className='input-pildora'>
                    <InputGroupText>
                        <i className="bi bi-house-door-fill"></i>
                    </InputGroupText>
                    <Form.Control type="text" placeholder="Ej: Juan Perez"
                        {...register("nombreCompleto", {
                            required: "Este campo es obligatorio",
                            minLength: {
                                value: 12,
                                message: "El nombre debe contener minimo 12 caracteres"
                            },
                            maxLength: {
                                value: 100,
                                message: "El nombre debe contener minimo 100 caracteres"
                            }
                        })}
                        onChange={() => clearErrors("nombreCompleto")}
                    />
                    <Form.Text className="text-danger">
                        {errors.nombreCompleto?.message}
                    </Form.Text>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Telefono</Form.Label>
                <InputGroup className='input-pildora'>
                    <InputGroupText>
                        <i className="bi bi-telephone-fill"></i>
                    </InputGroupText>
                    <Form.Control type="text" placeholder="ej: España 120"
                        {...register("telefono", {
                            required: "Este dato es obligatorio",
                            minLength: {
                                value: 10,
                                message: "El telefono debe contener minimo 10 caracteres"
                            },
                            maxLength: {
                                value: 15,
                                message: "El telefono debe contener minimo 15 digitos"
                            }
                        })}
                        onChange={() => clearErrors("telefono")}
                    />
                    <Form.Text className="text-danger">
                        {errors.telefono?.message}
                    </Form.Text>
                </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Email</Form.Label>
                <InputGroup className='input-pildora'>
                    <InputGroupText>
                        <i className="bi bi-envelope-at-fill"></i>
                    </InputGroupText>
                    <Form.Control type="email" placeholder="ej: juanperez@gmail.com"
                        {...register("email", {
                            required: "Este campo es obligatorio",
                            pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                            message: "Email no valido"
                        })}
                        onChange={() => clearErrors("email")}
                    />
                    <Form.Text className="text-danger">
                        {errors.email?.message}
                    </Form.Text>
                </InputGroup>
            </Form.Group>
            <div className="d-flex flex-column justify-content-center">
                <Button className='btn-principal mt-2' type="submit">
                    Actualizar datos
                </Button>
            </div>
        </Form>
    );
};

export default FormularioActualizarDatos;