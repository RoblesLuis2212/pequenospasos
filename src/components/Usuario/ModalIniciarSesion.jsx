import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./InicioSesion.css";
import FormularioInicioSesion from './FormularioInicioSesion';

const ModalIniciarSesion = ({ handleClose, show }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <div className="header d-flex flex-column justify-content-center align-items-center">
                <h3 className='titulo-bienvenido mt-4'>Bienvenido de nuevo</h3>
                <p className='text-muted'>Ingresa a tu cuenta para continuar con el progreso de tu peque</p>
            </div>
            <Modal.Body>
                <FormularioInicioSesion></FormularioInicioSesion>
            </Modal.Body>
        </Modal>
    );
};

export default ModalIniciarSesion;