import React from 'react';
import FormularioCambiarContrasena from './FormularioCambiarContrasena';

const CambiarContrasena = () => {
    return (
        <section className='container-fluid recuperar-container'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="recuperar-card">
                        <h4 className='titulo text-center'>Cambiar contraseña</h4>
                        <p className='text-muted text-center'>Ingresa una nueva contraseña para proteger el acceso a tu cuenta.</p>
                        <FormularioCambiarContrasena></FormularioCambiarContrasena>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CambiarContrasena;