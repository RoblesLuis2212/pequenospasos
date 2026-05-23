import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { set, useForm } from 'react-hook-form';
import { agregarDatosEscolaresAPI, editarDatosEscolaresAPI, obtenerDatosEscolaresAPI } from '../../helpers/queries';
import Swal from 'sweetalert2';
import { use, useEffect, useState } from 'react';

const ModalDatosEscolares = ({ cerrarModalEscolar, showModalEscolar, pacienteSeleccionado }) => {

    const { register, handleSubmit, formState: { errors }, clearErrors, reset, setValue } = useForm();

    const postValidaciones = async (data) => {
        if (Edicion !== true) {
            const respuesta = await agregarDatosEscolaresAPI(pacienteSeleccionado, data);
            if (respuesta.status === 201) {
                Swal.fire({
                    title: "Datos escolares agregados exitosamente!",
                    icon: "success",
                    draggable: true
                });
                cerrarModalEscolar();
            } else {
                Swal.fire({
                    title: "Ocurrio un error al agregar los datos escolares. Intentelo nuevamente!",
                    icon: "error",
                    draggable: true
                });
            }
        } else {
            const respuesta = await editarDatosEscolaresAPI(pacienteSeleccionado, data);
            if (respuesta.status === 200) {
                Swal.fire({ title: "Datos escolares actualizados exitosamente", icon: "success", draggable: true });
                cerrarModalEscolar();
            }
        }
    }

    const [Edicion, setEdicion] = useState(false);

    useEffect(() => {
        //Si el modal no esta abierto no se ejecuta
        if (!showModalEscolar) return;

        const verificar = async () => {
            const respuesta = await obtenerDatosEscolaresAPI(pacienteSeleccionado);
            if (respuesta.status === 200) {
                setEdicion(true);
                const datos = await respuesta.json();
                setValue("escuela", datos.escuela);
                setValue("turno", datos.turno);
            } else {
                setEdicion(false);
                reset();
            }
        }
        verificar();
    }, [showModalEscolar, pacienteSeleccionado]);


    return (
        <Modal show={showModalEscolar} onHide={cerrarModalEscolar}>
            <Modal.Header className='d-flex justify-content-center'>
                <h4 className='titulo'>Datos escolares</h4>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(postValidaciones)}>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Escuela</Form.Label>
                        <Form.Control type="text" placeholder="ej: Escuela Jose Federico Moreno" className='custom-input input-form'
                            {...register("escuela", {
                                required: "La escuela a la que asiste el paciente es un dato obligatorio",
                                minLength: {
                                    value: 10,
                                    message: "El campo debe contener minimo 10 caracteres"
                                },
                                maxLength: {
                                    value: 60,
                                    message: "El campo debe contener minimo 60 caracteres"
                                }
                            })}
                            onChange={() => clearErrors("escuela")}
                        />
                        <Form.Text className="text-danger">
                            {errors.escuela?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Escuela</Form.Label>
                        <Form.Select className='custom-input input-form'
                            {...register("turno", {
                                required: "Por favor seleccione turno"
                            })}
                            onChange={() => clearErrors("turno")}
                        >
                            <option value="">Seleccione un turno</option>
                            <option value="MAÑANA">Mañana</option>
                            <option value="TARDE">Tarde</option>
                            <option value="NOCHE">Noche</option>
                        </Form.Select>
                        <Form.Text className="text-danger">
                            {errors.turno?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button className='btn-principal w-100' type="submit">
                        Guardar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalDatosEscolares;