import React from 'react';
import FormularioFichaMedica from './FormularioFichaMedica';

const FichaMedicaPaciente = () => {
    return (
        <section className='container'>
            <div className="row">
                <div className="col-12">
                    <h4 className='text-center titulo'>Ficha Medica</h4>
                </div>
                <div className="col-12">
                    <FormularioFichaMedica></FormularioFichaMedica>
                </div>
                <div className="col-12 col-md-6">1234</div>
            </div>
        </section>
    );
};

export default FichaMedicaPaciente;