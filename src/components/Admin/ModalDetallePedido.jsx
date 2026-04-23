import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDetallePedido = ({ modalDetallePedido, cerrarModalDetallePedido }) => {
    return (
        <Modal show={modalDetallePedido} onHide={cerrarModalDetallePedido}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        </Modal>
    );
};

export default ModalDetallePedido;