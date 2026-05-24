import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { agregarEvolucionPacienteAPI, obtenerRegistrosEvolucionAPI } from '../../helpers/queries';
import Swal from 'sweetalert2';

const ModalEvolucion = ({ showModalEvolucion, cerrarModalEvolucion, id, setDatosEvolucion }) => {
    const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm();




    const postValidaciones = async (data) => {
        const respuesta = await agregarEvolucionPacienteAPI(id, data);
        if (respuesta.status === 201) {
            Swal.fire({
                title: "Evolucion del paciente registrada exitosamente!",
                icon: "success",
                draggable: true
            });
            const respuestaActualizada = await obtenerRegistrosEvolucionAPI(id);
            if (respuestaActualizada.status === 200) {
                const datos = await respuestaActualizada.json();
                setDatosEvolucion(datos);
            }
            cerrarModalEvolucion();
            reset();
        } else {
            Swal.fire({
                title: "Ocurrio un error al registrar la evolucion del paciente. Intentelo mas tarde!",
                icon: "error",
                draggable: true
            });
        }
    }


    return (
        <Modal show={showModalEvolucion} onHide={cerrarModalEvolucion}>
            <Modal.Header className='d-flex justify-content-center'>
                <h4 className='titulo'>Registrar Evolucion</h4>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(postValidaciones)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='etiquetas'>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="ej: El paciente evoluciona..." className='custom-input input-form'
                            {...register("descripcion", {
                                required: "La descripcion es un dato obligatorio",
                                minLength: {
                                    value: 20,
                                    message: "La descripcion debe contener minimo 20 caracteres"
                                },
                                maxLength: {
                                    value: 300,
                                    message: "La descripcion debe contener maximo 300 caracteres"
                                }
                            })}
                            onChange={() => clearErrors("descripcion")}
                        />
                        <Form.Text className="text-danger">
                            {errors.descripcion?.message}
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

export default ModalEvolucion;