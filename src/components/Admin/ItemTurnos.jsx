import { Button } from "react-bootstrap";

const ItemTurnos = ({ itemTurno }) => {

    const fecha = new Date(itemTurno.fecha);

    const opciones = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let texto = fecha.toLocaleDateString("es-AR", opciones).replace(",", "");

    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");

    const fechaFinal = `${texto} ${hora}:${minutos} hs`;

    const colorEstado = {
        "PENDIENTE": "warning",
        "APROBADO": "success",
        "CANCELADO": "danger",
        "FINALIZADO": "secondary"
    }

    return (
        <tr>
            <td>{itemTurno.idTurno}</td>
            <td>{itemTurno.paciente.nombreCompleto}</td>
            <td>{texto}</td>
            <td>{hora}:{minutos} hs</td>
            <td>
                <div>
                    <span className={`badge bg-${colorEstado[itemTurno.estado]}`}>
                        {itemTurno.estado}
                    </span>
                </div>
            </td>
            <td>
                <div>
                    <Button variant="dark" className="me-2"><i className="bi bi-eye-fill"></i></Button>
                    <Button variant="success" className="me-2"><i className="bi bi-check-circle-fill"></i></Button>
                    <Button variant="danger"><i className="bi bi-x-circle-fill"></i></Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemTurnos;