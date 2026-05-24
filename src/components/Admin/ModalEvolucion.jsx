import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const ModalEvolucion = ({ showModalEvolucion, cerrarModalEvolucion }) => {
    return (
        <Modal show={showModalEvolucion} onHide={cerrarModalEvolucion}>
            <Modal.Header className='d-flex justify-content-center'>
                <h4 className='titulo'>Registrar Evolucion</h4>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='etiquetas'>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="ej: El paciente evoluciona..." className='custom-input input-form' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
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