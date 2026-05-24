import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

const ModalEvolucion = ({ showModalEvolucion, cerrarModalEvolucion }) => {
    const { register, handleSubmit, reset, clearErrors, formState: { errors } } = useForm();

    const postValidaciones = (data) => {
        console.log(data);
        reset();
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