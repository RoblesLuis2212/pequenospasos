import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='container-fluid bg-container py-4'>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center align-items-md-start order-1">
                    {/* Columna principal */}
                    <h5 className="logo">Pequeños Pasos</h5>
                    <Link className="text-decoration-none link-footer mt-2" to={"/"}>Inicio</Link>
                    <Link className="text-decoration-none link-footer mt-2">Nuestros servicios</Link>
                    <Link className="text-decoration-none link-footer mt-2">Preguntas frecuentes</Link>
                    <Link className="text-decoration-none link-footer mt-2">Acerca de nosotros</Link>
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center align-items-md-start order-2">
                    {/* Columnas con las funcionalidades que manipulará el paciente */}
                    <h5 className="titulo-columnas mt-4 mt-md-0">Portal pacientes</h5>
                    <Link className="text-decoration-none link-footer mt-2">Iniciar Sesion</Link>
                    <Link className="text-decoration-none link-footer mt-2">Crear Cuenta</Link>
                    <Link className="text-decoration-none link-footer mt-2">Turnos Online</Link>
                    <Link className="text-decoration-none link-footer mt-2">Ayuda con mi cuenta</Link>
                </div>
                <div className="col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center align-items-md-start order-3 order-md-4 order-lg-4">
                    {/* Columna de contacto */}
                    <h5 className="titulo-columnas mt-4 mt-md-0 mt-md-4 mt-lg-0">Contacto</h5>
                    <p className="texto mt-2"><i className="bi bi-whatsapp me-2"></i>3863418518</p>
                    <p className="texto"><i className="bi bi-envelope-fill me-2 me-md-0 me-lg-2"></i>lucianafono2014@gmail.com</p>
                    <p className="texto"><i className="bi bi-geo-alt-fill me-2 me-md-0 me-lg-2"></i>Belgrano 625, Monteros Tucumán</p>
                    <p className="texto"><i className="bi bi-clock-fill me-2"></i>Lunes, Miercoles y Viernes - 16:30 a 21:00 hs</p>
                </div>
                <div className="col-12 col-md-4 col-lg-3 order-4 order-md-3 order-lg-4">
                    {/* Columna de redes sociales */}

                    <h5 className="titulo-columnas mt-3 mt-md-0 text-center text-md-start">Metodos de pago</h5>
                    <div className="d-flex flex-column align-items-center align-items-md-start">
                        <p className="texto mt-2"><i className="bi bi-cash-coin me-2"></i>Efectivo</p>
                        <p className="texto"><i className="bi bi-bank2 me-2"></i>Transferencia</p>
                        <p className="texto"><i className="bi bi-credit-card-2-back-fill me-2"></i>Tarjeta de debito</p>
                        <p className="texto"><i className="bi bi-credit-card-2-front-fill me-2"></i>Tarjeta de credito</p>
                    </div>
                </div>
                <div className="col-12 order-5">
                    <p className="text-center mt-4">&copy; Todos los derechos reservados 2026</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;