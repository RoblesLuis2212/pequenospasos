import React from 'react';
import FormularioFichaMedica from './FormularioFichaMedica';
import { useParams } from 'react-router-dom';

const FichaMedicaPaciente = () => {
    const { id } = useParams();

    return (
        <section className='container-fluid recuperar-container'>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-8 bg-white p-4 border rounded-3 mt-4 mb-3">
                        <h4 className='text-center titulo'>Ficha Medica</h4>
                        <FormularioFichaMedica id={id}></FormularioFichaMedica>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FichaMedicaPaciente;