import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const FormularioEditarPaciente = () => {

    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
    }
    return (
        <Form onSubmit={handleSubmit(postValidaciones)}>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Nombre Completo</Form.Label>
                <Form.Control className='input-pildora' type="text" placeholder="ej: Juan Perez"
                    {...register("nombreCompleto", {
                        required: "El nombre es un dato obligatorio",
                        minLength: {
                            value: 5,
                            message: "El nombre debe contener minimo 5 caracteres"
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
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>DNI</Form.Label>
                <Form.Control className='input-pildora' type="text" placeholder="ej: 45875521"
                    {...register("dni", {
                        required: "El DNI es un dato obligatorio",
                        minLength: {
                            value: 8,
                            message: "El DNI debe contener minimo 8 caracteres"
                        },
                        maxLength: {
                            value: 8,
                            message: "El DNI debe contener maximo 8 caracteres"
                        }
                    })}
                    onChange={() => clearErrors("dni")}
                />
                <Form.Text className="text-danger">
                    {errors.dni?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Domicilio</Form.Label>
                <Form.Control className='input-pildora' type="text" placeholder="ej: España 1030"
                    {...register("domicilio", {
                        required: "El domicilio es un dato obligatorio",
                        minLength: {
                            value: 5,
                            message: "El domicilio debe contener minimo 5 caracteres"
                        },
                        maxLength: {
                            value: 70,
                            message: "El domicilio debe contener minimo 70 caracteres"
                        }
                    })}
                    onChange={() => clearErrors("domicilio")}
                />
                <Form.Text className="text-danger">
                    {errors.domicilio?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Fecha de Nacimiento</Form.Label>
                <Form.Control className='input-pildora' type="date"
                    {...register("fechaNacimiento", {
                        required: "La fecha de nacimiento es un dato obligatorio",
                        max: {
                            value: new Date().toISOString().split("T")[0],
                            message: "No puede elegir una fecha futura"
                        }
                    })}
                    onChange={() => clearErrors("fechaNacimiento")}
                />
                <Form.Text className="text-danger">
                    {errors.fechaNacimiento?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Obra Social</Form.Label>
                <Form.Select className='input-pildora'
                    {...register("obraSocial", {
                        required: "Debe seleccionar una obra social"
                    })}
                >
                    <option value="">Seleccione una obra social</option>
                    <option value="1">Subsidio</option>
                    <option value="2">Soreme</option>
                    <option value="3">San Nicolas</option>
                    <option value="4">Ricardo Mora</option>
                </Form.Select>
                <Form.Text className="text-danger">
                    {errors.obraSocial?.message}
                </Form.Text>
            </Form.Group>
            <div className="boton d-flex justify-content-center">
                <Button className='btn-principal w-100' type="submit">
                    Actualizar
                </Button>
            </div>
        </Form>
    );
};

export default FormularioEditarPaciente;