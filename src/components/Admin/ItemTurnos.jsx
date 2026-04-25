import { Button } from "react-bootstrap";
import { cambiarEstadoTurnoPaciente, listarTurnos } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemTurnos = ({ itemTurno, setTurnos }) => {

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

    const aprobarTurno = async () => {
        const respuesta = await cambiarEstadoTurnoPaciente(itemTurno.idTurno, "APROBADO");
        if (respuesta.status === 200) {
            Swal.fire({
                title: "Turno aprobado correctamente!",
                icon: "success",
                draggable: true
            });
            const respuestaDatos = await listarTurnos();
            if (respuestaDatos.status === 200) {
                const turnosActualizados = await respuestaDatos.json();
                setTurnos(turnosActualizados);
            }
        } else {
            Swal.fire({
                title: "Ocurrio un error al aprobar el turno. Intentelo más tarde",
                icon: "danger",
                draggable: true
            });
        }
    }

    const cancelarTurno = async () => {
        const respuesta = await cambiarEstadoTurnoPaciente(itemTurno.idTurno, "CANCELADO");
        if (respuesta.status === 200) {
            Swal.fire({
                title: "Turno cancelado correctamente!",
                icon: "success",
                draggable: true
            });
            const respuestaActualizada = await listarTurnos();
            if (respuestaActualizada.status === 200) {
                const datos = await respuestaActualizada.json();
                setTurnos(datos);
            }
        }
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
                    <Button variant="success" className="me-2" onClick={aprobarTurno} disabled={["APROBADO", "FINALIZADO", "CANCELADO"].includes(itemTurno.estado)}><i className="bi bi-check-circle-fill"></i></Button>
                    <Button variant="danger" onClick={cancelarTurno}
                        disabled={["FINALIZADO", "CANCELADO"].includes(itemTurno.estado)}
                    ><i className="bi bi-x-circle-fill"></i></Button>
                </div>
            </td>
        </tr>
    );
};

export default ItemTurnos;