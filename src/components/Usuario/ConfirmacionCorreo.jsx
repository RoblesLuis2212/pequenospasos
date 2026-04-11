import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const ConfirmacionCorreo = () => {
    return (
        <section className='container-fluid recuperar-container'>
            <div className="row">
                <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="recuperar-card">
                        <div className="recuperar-icono text-center"><i className="bi bi-envelope-at-fill"></i></div>
                        <h4 className="text-center titulo">¡Correo Enviado!</h4>
                        <p className="text-muted">Enviamos un enlace de recuperacion a <Link>correoejemplo@gmail.com</Link></p>
                        <p className="text-muted text-center">El enlace expira en <strong>30 min</strong> Revisa tu bandeja de entrada</p>
                        <Alert variant="warning">
                            <i className="bi bi-info-circle me-2"></i>
                            Si no llega en unos minutos, revisa tu carpeta de spam.
                        </Alert>
                        <hr />
                        <div className="d-flex flex-column justify-content-center">
                            <Button className="btn-principal">Reenviar correo</Button>
                            <Button className="mt-2 btn-transparente" as={Link} to={"/"}>Volver al inicio</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfirmacionCorreo;