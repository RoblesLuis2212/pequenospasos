import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalNuevaVenta = ({ showModalVenta, cerrarModalVenta }) => {
    return (
        <Modal show={showModalVenta} onHide={cerrarModalVenta}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        </Modal>
    );
};

export default ModalNuevaVenta;