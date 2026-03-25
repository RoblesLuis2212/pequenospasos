import React from 'react';
import FormularioRegistro from './FormularioRegistro';
import "./Registro.css";

const Registro = () => {
    return (
        <section className='container'>
            <h3 className='titulo-registro text-center'>Unete a Pequeños Pasos</h3>
            <p className='text-muted'>Crea una cuenta para gestionar turnos y el progreso de tu peque</p>
            <div className="row">
                <div className="col-12 border border-black">
                    <FormularioRegistro></FormularioRegistro>
                </div>
            </div>
        </section>
    );
};

export default Registro;