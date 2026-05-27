import React from 'react';
import nenesJugando from "../../assets/nenesjugando.PNG"
import "./HeroSection.css";
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ModalPacientes from '../Pacientes/ModalPacientes';
import { useState } from 'react';

const HeroSection = ({ usuarioLogueado }) => {

    const navigate = useNavigate();

    const [showPacientes, setShowPacientes] = useState(false);

    const cerrarModalPacientes = () => setShowPacientes(false);
    const abrirModalPacientes = () => setShowPacientes(true);

    const verificarSesion = () => {
        const usuarioKey = JSON.parse(sessionStorage.getItem("usuarioKey"));
        const usuario = usuarioKey?.usuario;

        if (!usuario) {
            navigate("/registro");
        } else {
            abrirModalPacientes();
        }
    }
    return (
        <>
            <section className='container-fluid'>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h5 className='bg-body-secondary py-2 border rounded mt-2 badge-infantil'>Fonoaudiología Especializada</h5>
                        <h1 className='titulo-principal'>Desbloquea el potencial de su <span className='texto-resaltado'>comunicación</span></h1>
                        <p className='fs-5 text-muted'>Acompañamos el crecimiento de tus hijos con terapias ludicas, profesionales y personalizadas para cada etapa de su desarrollo.</p>
                        <div className="container-buttons">
                            <Button className='btn-principal btn-principal-2' onClick={verificarSesion}>Solicitar Turno</Button>
                            <Button className='btn-secundario ms-3' href='#tratamientos'>Ver Programas</Button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center py-2 hero-img-container">
                        <img src={nenesJugando} className='img-hero-section' alt="Niños jugando" />
                    </div>
                </div>
            </section>
            <ModalPacientes showPacientes={showPacientes} cerrarModalPacientes={cerrarModalPacientes} usuarioLogueado={usuarioLogueado}></ModalPacientes>
        </>
    );
};

export default HeroSection;