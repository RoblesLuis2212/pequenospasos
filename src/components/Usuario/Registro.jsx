import React from 'react';
import FormularioRegistro from './FormularioRegistro';
import "./Registro.css";

const Registro = () => {
    return (
        <section className='container contenedor-registro form-registro mt-4 mb-3'>
            <h3 className='titulo-registro text-center'>Unete a Pequeños Pasos</h3>
            <p className='text-muted text-center'>Crea una cuenta para gestionar turnos y el progreso de tu peque</p>
            <div className="row">
                <div className="col-12">
                    <FormularioRegistro></FormularioRegistro>
                </div>
            </div>
        </section>
    );
};

export default Registro;