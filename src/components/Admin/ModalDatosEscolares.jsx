import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const ModalDatosEscolares = ({ cerrarModalEscolar, showModalEscolar }) => {
    return (
        <Modal show={showModalEscolar} onHide={cerrarModalEscolar}>
            <Modal.Header className='d-flex justify-content-center'>
                <h4 className='titulo'>Datos escolares</h4>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Escuela</Form.Label>
                        <Form.Control type="text" placeholder="ej: Escuela Jose Federico Moreno" className='custom-input input-form' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Escuela</Form.Label>
                        <Form.Select className='custom-input input-form'>
                            <option value="">Seleccione un turno</option>
                            <option value="MAÑANA">Mañana</option>
                            <option value="TARDE">Tarde</option>
                            <option value="NOCHE">Noche</option>
                        </Form.Select>
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

export default ModalDatosEscolares;