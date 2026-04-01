import { useState } from "react";
import FormularioTurnos from "./FormularioTurnos";
import "./Turnos.css";
import Calendario from "./Calendario";

const Turnos = () => {
    //Estado para controlar la vista
    const [paso, setPaso] = useState(1);

    const siguientePaso = () => {
        setPaso(paso + 1);
    }
    return (
        <section className='container-fluid contenedor-registro form-registro'>
            <h3 className='text-center mt-3 titulo-registro'>{paso === 1 ? "Datos del paciente" : "Seleccione su turno"}</h3>
            <p className='text-center text-muted'>{paso === 1 ? "Por favor complete el formulario con la siguiente informacion." : "Elige una fecha y horario."}</p>
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    {paso === 1 && (
                        <FormularioTurnos siguientePaso={siguientePaso}></FormularioTurnos>
                    )}
                    {paso === 2 && (
                        <Calendario></Calendario>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Turnos;