import { Button } from "react-bootstrap";
import "./EvolucionPaciente.css";
import { obtenerRegistrosEvolucionAPI } from "../../helpers/queries";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardEvolucion from "./CardEvolucion";
import ModalEvolucion from "./ModalEvolucion";
import { FormControl, Form } from "react-bootstrap";

const EvolucionPaciente = () => {

    const { id } = useParams();

    const [datosEvolucion, setDatosEvolucion] = useState([]);

    const obtenerEvolucion = async () => {
        const respuesta = await obtenerRegistrosEvolucionAPI(id);
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setDatosEvolucion(datos);
        }
    }

    useEffect(() => {
        obtenerEvolucion();
    }, [])


    const [showModalEvolucion, setShowModalEvolucion] = useState(false);
    const [registroSeleccionado, setRegistroSeleccionado] = useState("");
    const [modo, setModo] = useState("crear");

    const cerrarModalEvolucion = () => setShowModalEvolucion(false);
    const abrirModalEvolucion = () => {
        setModo("crear");
        setShowModalEvolucion(true);
    }

    const abrirModalEvolucionEditar = (registro) => {
        setModo("editar");
        setRegistroSeleccionado(registro);
        setShowModalEvolucion(true);
    }

    const [fechaDesde, setFechaDesde] = useState("");
    const [fechaHasta, setFechaHasta] = useState("");

    const fechaEvolucion = new Date(datosEvolucion.fecha);

    const evolucionesFiltradas = datosEvolucion.filter((evolucion) => {
        const fechaEvolucion = new Date(evolucion.fecha);


        if (fechaDesde) {
            const desde = new Date(fechaDesde);
            desde.setHours(0, 0, 0, 0);

            if (fechaEvolucion < desde) return false;
        }

        if (fechaHasta) {
            const hasta = new Date(fechaHasta);
            hasta.setHours(23, 59, 59, 999);

            if (fechaEvolucion > hasta) return false;
        }

        return true;
    });

    const hayFiltro = fechaDesde || fechaHasta;

    const registrosAMostrar = hayFiltro
        ? evolucionesFiltradas
        : datosEvolucion.slice(0, 3);

    return (
        <>
            <section className='container-fluid bg-container-evolucion'>
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-8">

                        {/* Header */}
                        <div className="ep-header">
                            <div>
                                <h4 className="ep-titulo">Evoluciones del paciente</h4>
                            </div>
                            <Button className="btn-secundario" onClick={abrirModalEvolucion}>
                                <i className="bi bi-plus-lg me-1"></i> Agregar evolución
                            </Button>
                        </div>

                        <div className="d-flex gap-3 my-3">
                            <div className="flex-grow-1">
                                <label>Desde</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={fechaDesde}
                                    onChange={(e) => setFechaDesde(e.target.value)}
                                />
                            </div>

                            <div className="flex-grow-1">
                                <label>Hasta</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={fechaHasta}
                                    onChange={(e) => setFechaHasta(e.target.value)}
                                />
                            </div>
                        </div>


                        {/* Cards */}
                        <div className="d-flex flex-column gap-3">
                            {registrosAMostrar.length > 0 ? (
                                registrosAMostrar.map((itemEvolucion) => (
                                    <CardEvolucion key={itemEvolucion.idEvolucion} itemEvolucion={itemEvolucion} abrirModalEvolucionEditar={abrirModalEvolucionEditar}
                                    ></CardEvolucion>
                                ))
                            ) : (
                                <>
                                    <div className="card py-2">
                                        <p className="text-center fw-bold mt-2">No hay registros de la evolucion del paciente.</p>
                                    </div>
                                </>
                            )

                            }
                        </div>
                    </div>
                </div>
            </section>
            <ModalEvolucion showModalEvolucion={showModalEvolucion} cerrarModalEvolucion={cerrarModalEvolucion} id={id} setDatosEvolucion={setDatosEvolucion} modo={modo} registroSeleccionado={registroSeleccionado}></ModalEvolucion>
        </>
    );
};

export default EvolucionPaciente;