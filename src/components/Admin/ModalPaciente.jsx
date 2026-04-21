import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const ModalPaciente = ({ showModalPacientes, cerrarModalPacientes }) => {
    return (
        <Modal show={showModalPacientes} onHide={cerrarModalPacientes}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>Agregar paciente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Nombre Completo</Form.Label>
                        <Form.Control className='custom-input input-form' type="text" placeholder="ej: Juan Perez" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>DNI</Form.Label>
                        <Form.Control className='custom-input input-form' type="text" placeholder="ej: 41478856" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Domicilio</Form.Label>
                        <Form.Control className='custom-input input-form' type="text" placeholder="ej: España 201" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Fecha de Nacimiento</Form.Label>
                        <Form.Control className='custom-input input-form' type="date" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='etiquetas'>Obra Social</Form.Label>
                        <Form.Select className='input-form custom-input' >
                            <option value="">Seleccione una obra social</option>
                            <option value="1">Subsidio</option>
                            <option value="2">Soreme</option>
                            <option value="3">San Nicolas</option>
                            <option value="4">Swiss Medical</option>
                            <option value="5">Ricardo Mora</option>
                        </Form.Select>
                        <Form.Text className='text-danger'>
                            texto
                        </Form.Text>
                    </Form.Group>
                    <Button className='btn-principal w-100' type="submit">
                        Agregar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalPaciente;