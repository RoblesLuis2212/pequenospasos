import React from 'react';
import TablaTurnos from './TablaTurnos';

const TurnosPaciente = () => {
    return (
        <section className='container border border-black mt-2'>
            <h3 className='text-center titulo mt-3'>Pacientes turnos</h3>
            <div className="row">
                <div className="col-12">
                    <TablaTurnos></TablaTurnos>
                </div>
            </div>
        </section>
    );
};

export default TurnosPaciente;