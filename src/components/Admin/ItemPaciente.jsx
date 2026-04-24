import { Button } from "react-bootstrap";
import { useState } from "react";

const ItemPaciente = ({ itemPaciente }) => {

    const calcularEdad = () => {
        const hoy = new Date();
        const nacimiento = new Date(itemPaciente.fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();

        // Si todavía no llegó el cumpleaños este año, restamos 1
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    const [showModalDatosPaciente, setShowModalDatosPaciente] = useState(false);

    const cerrarModalDatosPaciente = () => setShowModalDatosPaciente(false);
    const abrirModalDatosPaciente = () => setShowModalDatosPaciente(true);

    return (
        <>
            <tr>
                <td>{itemPaciente.idPaciente}</td>
                <td>{itemPaciente.nombreCompleto}</td>
                <td>{itemPaciente.dni}</td>
                <td>{itemPaciente.domicilio}</td>
                <td>{calcularEdad(itemPaciente.fechaNacimiento)} años</td>
                <td>{itemPaciente.obraSocial
                    ? itemPaciente.obraSocial.nombre
                    : "Sin obra social"}</td>
                <td>{itemPaciente.usuario?.nombreCompleto ? itemPaciente.usuario?.nombreCompleto : "Sin tutor"}</td>
                <td>
                    <div>
                        <Button variant="secondary" className="me-2"><i className="bi bi-person-fill"></i></Button>
                        <Button variant="primary"><i className="bi bi-calendar-check-fill"></i></Button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ItemPaciente;