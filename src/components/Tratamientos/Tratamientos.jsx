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
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 border border-black">
                        <CardTratamiento></CardTratamiento>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 border border-black">
                        <CardTratamiento></CardTratamiento>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 border border-black">
                        <CardTratamiento></CardTratamiento>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 border border-black">
                        <CardTratamiento></CardTratamiento>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tratamientos;