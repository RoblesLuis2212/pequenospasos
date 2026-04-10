import React from 'react';
import TablaTurnos from './TablaTurnos';

const TurnosPaciente = () => {
    return (
        <section className='container mb-5'>
            <h3 className='text-center titulo mt-3 mb-2'>Turnos pacientes</h3>
            <p className='text-muted text-center'>Gestioná y controlá el turno de tus niños</p>
            <div className="row">
                <div className="col-12 tabla-container mt-">
                    <TablaTurnos></TablaTurnos>
                </div>
            </div>
        </section>
    );
};

export default TurnosPaciente;