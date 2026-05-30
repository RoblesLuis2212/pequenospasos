import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./FormularioPaciente.css";
import { useForm } from 'react-hook-form';
import { actualizarDatosPaciente, obtenerPacienteIDAPI, registroPacientes } from '../../helpers/queries';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const FormularioPacientes = ({ titulo }) => {

    const { register, handleSubmit, reset, formState: { errors }, clearErrors, setValue } = useForm();
    //obtenemos el ID del usuario registrado (padre) para poder relacionarlo con el paciente
    const rolUsuario = JSON.parse(sessionStorage.getItem("usuarioKey")).usuario.id;
    //se obtiene el id del usuario pasado por parametro
    const { id } = useParams();
    const navigate = useNavigate();

    const postValidaciones = async (data) => {
        if (titulo === "Datos del paciente") {
            const dataCompleta = { ...data, usuarioId: rolUsuario }
            const respuesta = await registroPacientes(dataCompleta);
            if (respuesta.status === 201) {
                Swal.fire({
                    title: "Paciente agregado correctamente",
                    text: `El paciente fue agregado exitosamente`,
                    icon: "success",
                }).then(() => {
                    navigate("/");
                });
            }
            reset();
        } else if (titulo === "Editar datos del paciente") {
            const { obraSocial } = data;
            const dataCompleta = {
                nombreCompleto: data.nombreCompleto,
                dni: data.dni,
                domicilio: data.domicilio,
                fechaNacimiento: data.fechaNacimiento,
                obraSocialId: Number(obraSocial)
            }
            const respuesta = await actualizarDatosPaciente(id, dataCompleta);
            if (respuesta.status === 200) {
                Swal.fire({
                    title: "Actualizacion exitosa",
                    text: `Los datos del paciente ${dataCompleta.nombreCompleto} se actualizaron correctamente`,
                    icon: "success",
                }).then(() => {
                    navigate("/");
                });
            }
        }
    }

    useEffect(() => {
        obtenerPacienteID();
    }, [])

    const obtenerPacienteID = async () => {
        if (titulo === "Editar datos del paciente") {
            const respuesta = await obtenerPacienteIDAPI(id);
            if (respuesta.status === 200) {
                const pacienteBuscado = await respuesta.json();
                setValue("nombreCompleto", pacienteBuscado.nombreCompleto);
                setValue("dni", pacienteBuscado.dni);
                setValue("domicilio", pacienteBuscado.domicilio);
                //se formatea la fecha obtenida de la BD para poder leerla
                const fechaFormato = pacienteBuscado.fechaNacimiento.split("T")[0];
                setValue("fechaNacimiento", fechaFormato);
                setValue("obraSocial", pacienteBuscado.obraSocialId);
            }
        }
    }



    return (
        <section className='container-fluid contenedor-registro-pacientes form-paciente'>
            <h3 className='text-center mt-3 titulo-registro'>{titulo}</h3>
            <p className='text-center text-muted'>{titulo === "Datos del paciente" ? "Por favor complete el formulario con la siguiente informacion." : "Por favor complete el formulario con informacion actualizada del paciente."}</p>
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
                                        <option value="2">Soremer</option>
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