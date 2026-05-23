import { Button } from "react-bootstrap";
import "./EvolucionPaciente.css";

const EvolucionPaciente = () => {
    return (
        <section className='container-fluid bg-container-evolucion'>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">

                    {/* Header */}
                    <div className="ep-header">
                        <div>
                            <h4 className="ep-titulo">Evoluciones del paciente</h4>
                            <p className="ep-subtitulo">3 registros cargados</p>
                        </div>
                        <Button className="ep-btn-agregar">
                            <i className="bi bi-plus-lg me-1"></i> Agregar evolución
                        </Button>
                    </div>

                    {/* Cards */}
                    <div className="d-flex flex-column gap-3">

                        <div className="ep-card">
                            <div className="ep-card-header">
                                <div className="ep-fecha-wrapper">
                                    <i className="bi bi-calendar3 ep-icon"></i>
                                    <p className="ep-card-fecha">miércoles 14 de mayo · 17:00 hs</p>
                                </div>
                                <Button variant="outline-secondary" size="sm" className="ep-btn-editar">
                                    <i className="bi bi-pencil me-1"></i> Editar
                                </Button>
                            </div>
                            <p className="ep-descripcion">La paciente muestra avances significativos en la articulación de fonemas fricativos. Se trabajó con ejercicios de soplo y discriminación auditiva. Responde bien a las actividades lúdicas propuestas.</p>
                        </div>

                        <div className="ep-card">
                            <div className="ep-card-header">
                                <div className="ep-fecha-wrapper">
                                    <i className="bi bi-calendar3 ep-icon"></i>
                                    <p className="ep-card-fecha">lunes 5 de mayo · 18:30 hs</p>
                                </div>
                                <Button variant="outline-secondary" size="sm" className="ep-btn-editar">
                                    <i className="bi bi-pencil me-1"></i> Editar
                                </Button>
                            </div>
                            <p className="ep-descripcion">Se realizó evaluación de comprensión lectora. La paciente presenta dificultades en la segmentación silábica. Se inicia trabajo específico con material visual y auditivo. Se sugiere refuerzo en casa.</p>
                        </div>

                        <div className="ep-card">
                            <div className="ep-card-header">
                                <div className="ep-fecha-wrapper">
                                    <i className="bi bi-calendar3 ep-icon"></i>
                                    <p className="ep-card-fecha">miércoles 23 de abril · 17:00 hs</p>
                                </div>
                                <Button variant="outline-secondary" size="sm" className="ep-btn-editar">
                                    <i className="bi bi-pencil me-1"></i> Editar
                                </Button>
                            </div>
                            <p className="ep-descripcion">Primera sesión de evaluación. Se aplicó protocolo de ingreso. La paciente mostró buena predisposición y colaboración. Se detectan dificultades en la producción de sibilantes y en la conciencia fonológica.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default EvolucionPaciente;