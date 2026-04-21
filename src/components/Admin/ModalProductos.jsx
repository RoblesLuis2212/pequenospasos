import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const ModalProductos = ({ cerrarModalProductos, showModalProductos }) => {
    return (
        <Modal show={showModalProductos} onHide={cerrarModalProductos}>
            <Modal.Header>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        </Modal>
    );
};

export default ModalProductos;