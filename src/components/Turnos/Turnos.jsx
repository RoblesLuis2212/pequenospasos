import { useState } from "react";
import "./Turnos.css";
import Calendario from "./Calendario";

const Turnos = () => {
    return (
        <section className='container-fluid contenedor-registro form-registro'>
            <h3 className='text-center mt-3 titulo-registro'>Solicitar Turno</h3>
            <p className='text-center text-muted'>Por favor seleccione una fecha y horario para su turno. </p>
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    <Calendario></Calendario>
                </div>
            </div>
        </section>
    );
};

export default Turnos;