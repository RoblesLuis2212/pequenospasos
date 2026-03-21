import React from 'react';
import "./Tratamientos.css"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardTratamiento from './CardTratamiento';

const Tratamientos = () => {
    return (
        <section className='container-fluid mt-5 bg-fondo py-5'>
            <div className="row">
                <div className="col-12 col-lg-6 d-flex d-lg-block flex-column justify-content-center align-items-center">
                    <h2 className='titulo-tratamientos ms-2'>Nuestros Tratamientos</h2>
                    <p className='text-muted fs-5 ms-2'>Especialidades diseñadas para transformar dificultades en fortalezas mediante el juego.</p>
                </div>
                <div className="col-12 col-lg-6 py-3 d-flex justify-content-center">
                    <Link className='link-opacity-100-hover links fs-5'>Ver todas las terapias<i className="bi bi-arrow-bar-right"></i></Link>
                </div>
                <div className="row g-3 g-md-2">
                    <div className="col-12 col-md-6 col-lg-3">
                        <CardTratamiento icono={"bi-ear fs-2 ms-2"} titulo={"Terapia Auditiva"} descripcion={"Implementamos programas especializados para fortalecer el procesamiento auditivo y la escucha activa en niños. Trabajamos en la interpretación de sonidos y el desarrollo de estrategias comunicativas."} className="mt-2"></CardTratamiento>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <CardTratamiento icono={"bi bi-chat-text-fill fs-2 ms-2"} titulo={"Motricidad Orofacial"} descripcion={"Nos enfocamos en la prevención y rehabilitación de alteraciones en las funciones musculares de la boca y la cara. A través de ejercicios específicos, optimizamos la respiración y deglución."}></CardTratamiento>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <CardTratamiento icono={"bi-mic-fill fs-2 ms-2"} titulo={"Lenguaje y Comunicacion"} descripcion={"Desarrollo y fortalecimiento de las habilidades comunicativas, favoreciendo la comprension y expresion del lenguaje en todas las edades."}></CardTratamiento>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <CardTratamiento icono={"bi bi-dice-6-fill fs-2 ms-2"} titulo={"Estimulacion temprana mediante el juego"} descripcion={"Intervencion temprana mediante el juego para potenciar el desarrollo del lenguaje, la atencion y la interaccion social en niños."}></CardTratamiento>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tratamientos;