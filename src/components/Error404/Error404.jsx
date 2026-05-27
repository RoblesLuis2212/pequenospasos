import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Error404.css";

const Error404 = () => {
    return (
        <section className="error404-container">
            <div className="error404-content">
                <span className="error404-badge">
                    Página no encontrada
                </span>

                <h1 className="error404-title">
                    Error <span>404</span>
                </h1>

                <p className="error404-text">
                    Ups... la página que estás buscando no existe
                    o fue removida.
                </p>

                <div className="error404-buttons">
                    <Button
                        as={Link}
                        to="/"
                        className="btn-principal"
                    >
                        Volver al inicio
                    </Button>
                </div>
            </div>

            <div className="error404-image">
                <div className="error404-card">
                    <i className="bi bi-emoji-frown"></i>
                </div>
            </div>
        </section>
    );
};

export default Error404;