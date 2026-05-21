import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { crearFichaMedicaAPI, editarFichaMedicaAPI, obtenerFichaMedicaPacienteAPI } from '../../helpers/queries';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const FormularioFichaMedica = ({ id }) => {

    const { register, handleSubmit, reset, formState: { errors }, clearErrors, setValue } = useForm();

    const location = useLocation();
    const esEdicion = location.pathname.includes("editar");

    const navigate = useNavigate();

    const postValidaciones = async (data) => {
        if (esEdicion) {
            const respuesta = await editarFichaMedicaAPI(id, data);
            if (respuesta.status === 200) {
                Swal.fire({ title: "Ficha médica actualizada correctamente!", icon: "success" });
                navigate("/admin");
                reset();
            } else {
                Swal.fire({ title: "Ocurrio un error al actualizar la ficha medica. Intentelo nuevamente!", icon: "error" });
            }
        } else {
            const respuesta = await crearFichaMedicaAPI(id);
            if (respuesta.status === 201) {
                Swal.fire({ title: "Ficha medica creada correctamente", icon: "success" });
                navigate("/admin");
                reset();
            } else {
                Swal.fire({ title: "Ocurrio un error al crear la ficha medica. Intentelo nuevamente!", icon: "error" })
            }
        }
    }

    useEffect(() => {
        if (esEdicion && id) {
            const cargarFicha = async () => {
                const respuestas = await obtenerFichaMedicaPacienteAPI(id);
                if (respuestas.status === 200) {
                    const datos = await respuestas.json();
                    setValue("edad_camino", datos.edad_camino);
                    setValue("socializacion", datos.socializacion);
                    setValue("derivacion", datos.derivacion);
                    setValue("horarios_sueno", datos.horarios_sueno);
                    setValue("contacto_visual", datos.contacto_visual);
                    setValue("actividades", datos.actividades);
                }
            }
            cargarFicha();
        }
    }, [id]);

    return (
        <Form onSubmit={handleSubmit(postValidaciones)}>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Edad que comenzo a caminar</Form.Label>
                <Form.Control type="text" placeholder="ej: 2 años y medio" className='custom-input input-form'
                    {...register("edad_camino", {
                        required: "Este dato es obligatorio",
                        minLength: {
                            value: 3,
                            message: "El campo debe contener minimo 3 caracteres"
                        },
                        maxLength: {
                            value: 60,
                            message: "El campo debe contener maximo 60 caracteres"
                        }
                    })}
                    onChange={() => clearErrors("edad_camino")}
                />
                <Form.Text className="text-danger">
                    {errors.edad_camino?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Socializacion</Form.Label>
                <Form.Control type="text" placeholder="ej: juega con los niños en su escuela" className='custom-input input-form'
                    {...register("socializacion", {
                        required: "Este campo es obligatorio",
                        minLength: {
                            value: 10,
                            message: "El campo debe contener minimo 10 caracteres"
                        },
                        maxLength: {
                            value: "60",
                            message: "El campo debe contener minimo 60 caracteres"
                        }
                    })}
                    onChange={() => clearErrors("socializacion")}
                />
                <Form.Text className="text-danger">
                    {errors.socializacion?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Derivacion</Form.Label>
                <Form.Control type="text" placeholder="ej: derivado por Neurologo" className='custom-input input-form'
                    {...register("derivacion")}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Horarios de Sueño</Form.Label>
                <Form.Control type="text" placeholder="ej: duerme a la noche apartir de las 22hs" className='custom-input input-form'
                    {...register("horarios_sueno", {
                        required: "Este campo es obligatorio",
                        minLength: {
                            value: 10,
                            message: "El campo debe contener minimo 10 caracteres"
                        },
                        maxLength: {
                            value: 200,
                            message: "El campo debe contener maximo 200 caracteres"
                        }
                    })}
                    onChange={() => clearErrors("horarios_sueno")}
                />
                <Form.Text className="text-danger">
                    {errors.horarios_sueno?.message}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Contacto visual</Form.Label>
                <Form.Control type="text" placeholder="ej: solo con su madre" className='custom-input input-form'
                    {...register("contacto_visual", {
                    })}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label className='etiquetas'>Actividades</Form.Label>
                <Form.Control type="text" placeholder="ej: asiste a hockey los dias Lunes y Miercoles" className='custom-input input-form'
                    {...register("actividades", {
                        required: "Este campo es obligatorio",
                        minLength: {
                            value: 5,
                            message: "Este campo debe contener minimo 5 caracteres"
                        },
                        maxLength: {
                            value: 150,
                            message: "Este campo debe contener maximo 150 caracteres"
                        }
                    })}
                    onChange={() => clearErrors("actividades")}
                />
                <Form.Text className="text-danger">
                    {errors.actividades?.message}
                </Form.Text>
            </Form.Group>
            <Button className='btn-principal' type="submit">
                Guardar datos
            </Button>
        </Form>
    );
};

export default FormularioFichaMedica;