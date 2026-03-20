import React from 'react';
import "./Tratamientos.css"
import { Button } from 'react-bootstrap';

const Tratamientos = () => {
    return (
        <section className='container-fluid border border-black mt-5'>
            <div className="row">
                <div className="col-12 col-md-6 border border-black">
                    <h2 className='titulo-tratamientos'>Nuestros Tratamientos</h2>
                    <p className='text-muted fs-5'>Especialidades diseñadas para transformar dificultades en fortalezas mediante el juego.</p>
                </div>
                <div className="col-12 col-md-6 border border-black">
                </div>
            </div>
        </section>
    );
};

export default Tratamientos;