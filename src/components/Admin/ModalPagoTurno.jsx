import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const ModalPagoTurno = ({ showPagoTurno, abrirModalPagoTurno, cerrarModalPagoTurno }) => {
    return (
        <Modal show={showPagoTurno} onHide={cerrarModalPagoTurno}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>Registrar pago turno</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>ID Turno</Form.Label>
                        <Form.Control type="number" placeholder="ej: 2" className='custom-input input-form' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Dinero recibido</Form.Label>
                        <Form.Control type="number" placeholder="ej: 200000" className='custom-input input-form' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="ej: el cliente abono el turno con efectivo" className='custom-input input-form' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='etiquetas'>Metodo de pago</Form.Label>
                        <Form.Select className='custom-input input-form'>
                            <option value="">Seleccione un metodo de pago</option>
                            <option value="1">Efectivo</option>
                            <option value="2">Transferencia</option>
                            <option value="3">Debito</option>
                            <option value="4">Credito</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button className='btn-principal mt-3 w-100' type="submit">
                        Registrar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalPagoTurno;