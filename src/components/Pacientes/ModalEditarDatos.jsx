import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormularioEditarPaciente from './FormularioEditarPaciente';

const ModalEditarDatos = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header className='d-flex justify-content-center'>
                <h4 className='titulo'>Editar datos del paciente</h4>
            </Modal.Header>
            <Modal.Body>
                <FormularioEditarPaciente></FormularioEditarPaciente>
            </Modal.Body>
        </Modal>
    );
};

export default ModalEditarDatos;