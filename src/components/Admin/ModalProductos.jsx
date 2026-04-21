import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ModalProductos = ({ cerrarModalProductos, showModalProductos }) => {
    return (
        <Modal show={showModalProductos} onHide={cerrarModalProductos}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>Agregar productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Nombre</Form.Label>
                        <Form.Control className='custom-input input-form' type="text" placeholder="ej: naipes españoles" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Precio</Form.Label>
                        <Form.Control className='custom-input input-form' type="number" placeholder="ej: $1200" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Stock</Form.Label>
                        <Form.Control className='custom-input input-form' type="number" placeholder="ej: 200" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Descripcion (opcional)</Form.Label>
                        <Form.Control className='custom-input input-form' type="text" placeholder="ej: 50 naipes para desafiar a tus amigos" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Imagen</Form.Label>
                        <Form.Control type="file"
                            accept='image/*'
                            className='custom-input input-form'
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Codigo de barras</Form.Label>
                        <Form.Control type="text"
                            placeholder='7896541236547'
                            className='custom-input input-form'
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Select className='custom-input input-form'>
                            <option value="">Seleccione una categoria</option>
                            <option value="1">Juegos de mesa</option>
                            <option value="2">Libros infantiles</option>
                            <option value="3">Material creativo</option>
                            <option value="4">Rompecabezas</option>
                            <option value="5">Juegos sensoriales</option>
                            <option value="7">Juguetes didacticos</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
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

export default ModalProductos;