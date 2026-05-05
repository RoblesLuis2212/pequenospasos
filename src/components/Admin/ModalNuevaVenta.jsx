import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const ModalNuevaVenta = ({ showModalVenta, cerrarModalVenta }) => {
    return (
        <Modal show={showModalVenta} onHide={cerrarModalVenta}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>Nueva venta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>ID Compra</Form.Label>
                        <Form.Control type="number" placeholder="ej: 1" className='custom-input input-form' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Tipo de venta</Form.Label>
                        <Form.Select className='custom-input input-form'>
                            <option value="">Seleccione el tipo de venta</option>
                            <option value="">Turno</option>
                            <option value="">Producto</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="ej: el cliente pago con transferencia" className='custom-input input-form' />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Metodo de pago</Form.Label>
                        <Form.Select className='custom-input input-form'>
                            <option value="">Seleccione un metodo de pago</option>
                            <option value="">Efectivo</option>
                            <option value="">Transferencia</option>
                            <option value="">Credito</option>
                            <option value="">Debito</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button className='btn-principal w-100' type="submit">
                        Registrar venta
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalNuevaVenta;