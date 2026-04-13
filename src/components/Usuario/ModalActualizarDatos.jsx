import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormularioActualizarDatos from './FormularioActualizarDatos';

const ModalActualizarDatos = ({ showPadres, cerrarModalPadre }) => {
    return (
        <Modal show={showPadres} onHide={cerrarModalPadre}>
            <div className='d-flex flex-column p-3'>
                <h4 className='text-center titulo mt-2'>Mis datos personales</h4>
                <p className='text-center text-muted m-0'>Mantené tus datos personales actualizados para no perderte ninguna novedad.</p>
            </div>
            <Modal.Body>
                <FormularioActualizarDatos></FormularioActualizarDatos>
            </Modal.Body>
        </Modal>
    );
};

export default ModalActualizarDatos;