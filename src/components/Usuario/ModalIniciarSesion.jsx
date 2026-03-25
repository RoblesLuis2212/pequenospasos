import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./InicioSesion.css";
import FormularioInicioSesion from './FormularioInicioSesion';

const ModalIniciarSesion = ({ handleClose, show }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <div className="header d-flex flex-column justify-content-center align-items-center">
                <div className="icono-nube"><i className="bi bi-cloud-fill"></i></div>
                <h3 className='titulo-bienvenido'>Bienvenido de nuevo</h3>
                <p className='text-muted'>Ingresa a tu cuenta para continuar con el progreso de tu peque</p>
            </div>
            <Modal.Body>
                <FormularioInicioSesion></FormularioInicioSesion>
            </Modal.Body>
        </Modal>
    );
};

export default ModalIniciarSesion;