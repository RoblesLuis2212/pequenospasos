import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalAsignarTutor from "./ModalAsignarTutor";

const ItemPaciente = ({ itemPaciente, setPaciente }) => {

    const calcularEdad = () => {
        const hoy = new Date();
        const nacimiento = new Date(itemPaciente.fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    const [showModalTutor, setShowModalTutor] = useState(false);

    const cerrarModalTutor = () => setShowModalTutor(false);
    const abrirModalTutor = () => setShowModalTutor(true);

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
                        <Button variant="secondary" className="me-2" onClick={abrirModalTutor}><i className="bi bi-person-fill"></i></Button>
                        <Button variant="primary" as={Link} to={`/turnos/${itemPaciente.idPaciente}`}><i className="bi bi-calendar-check-fill"></i></Button>
                    </div>
                </td>
            </tr>
            <ModalAsignarTutor showModalTutor={showModalTutor} cerrarModalTutor={cerrarModalTutor} itemPaciente={itemPaciente} setPaciente={setPaciente}></ModalAsignarTutor>
        </>
    );
};

export default ItemPaciente;