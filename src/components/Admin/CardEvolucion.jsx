import { Button } from "react-bootstrap";


const CardEvolucion = ({ itemEvolucion }) => {
    const fecha = new Date(itemEvolucion.fecha);

    const opciones = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let texto = fecha.toLocaleDateString("es-AR", opciones).replace(",", "");

    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");

    const fechaFinal = `${texto} · ${hora}:${minutos} hs`;

    return (
        <div className="ep-card">
            <div className="ep-card-header">
                <div className="ep-fecha-wrapper">
                    <i className="bi bi-calendar3 ep-icon"></i>
                    <p className="ep-card-fecha">{fechaFinal}</p>
                </div>
                <Button variant="outline-secondary" size="sm" className="ep-btn-editar">
                    <i className="bi bi-pencil me-1"></i> Editar
                </Button>
            </div>
            <p className="ep-descripcion">{itemEvolucion.descripcion}</p>
        </div>
    );
};

export default CardEvolucion;