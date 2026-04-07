import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./FormularioPaciente.css";
import { useForm } from 'react-hook-form';

const FormularioPacientes = () => {

    const { register, handleSubmit, reset, formState: { errors }, clearErrors } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
        reset();
    }

    return (
        <section className='container-fluid contenedor-registro-pacientes form-paciente'>
            <h3 className='text-center mt-3 titulo-registro'>Datos del pacientes</h3>
            <p className='text-center text-muted'>Por favor complete el formulario con la siguiente informacion.</p>
            <div className="row">
                <div className="col-12">
                    <Form onSubmit={handleSubmit(postValidaciones)}>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Nombre Completo</Form.Label>
                                    <Form.Control className='input-form custom-input' type="text" placeholder="ej: Juan Perez"
                                        {...register("nombreCompleto", {
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
                                        onChange={() => clearErrors("nombreCompleto")}
                                    />
                                    <Form.Text className="text-danger">
                                        {errors.nombreCompleto?.message}
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>DNI</Form.Label>
                                    <Form.Control className='input-form custom-input' type="text" placeholder="ej: 45789658"
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
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Domicilio</Form.Label>
                                    <Form.Control className='input-form custom-input' type="text" placeholder="ej: España 1030"
                                        {...register("domicilio", {
                                            required: "El domicilio es un dato obligatorio",
                                            minLength: {
                                                value: 5,
                                                message: "El domicilio debe contener minimo 5 caracteres",
                                            },
                                            maxLength: {
                                                value: 70,
                                                message: "El domicilio debe contener maximo 70 caracteres"
                                            }

                                        })}
                                        onChange={() => clearErrors("domicilio")}

                                    />
                                    <Form.Text className="text-danger">
                                        {errors.domicilio?.message}
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Fecha de Nacimiento</Form.Label>
                                    <Form.Control className='input-form custom-input' type="date" placeholder="ej: España 1030"
                                        {...register("fechaNacimiento", {
                                            required: "La fecha de nacimiento es un dato obligatorio",
                                            max: {
                                                value: new Date().toISOString().split("T")[0],
                                                message: "No puede elegir una fecha futura"
                                            }
                                        })}

                                    />
                                    <Form.Text className="text-danger">
                                        {errors.fechaNacimiento?.message}
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-md-12">
                                <Form.Group>
                                    <Form.Label className='etiquetas'>Obra Social</Form.Label>
                                    <Form.Select className='input-form custom-input'
                                        {...register("obraSocial", {
                                            required: "Debe seleccionar una obra social"
                                        })}
                                        onChange={() => clearErrors("obraSocial")}
                                    >
                                        <option value="">Seleccione una obra social</option>
                                        <option value="1">Subsidio</option>
                                        <option value="2">Soreme</option>
                                        <option value="3">San Nicolas</option>
                                        <option value="4">Swiss Medical</option>
                                        <option value="5">Ricardo Mora</option>
                                    </Form.Select>
                                    <Form.Text className='text-danger'>
                                        {errors.obraSocial?.message}
                                    </Form.Text>
                                </Form.Group>
                            </div>
                        </div>
                        <Button className='btn-registro btn-principal mt-3' type="submit">
                            Guardar
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default FormularioPacientes;