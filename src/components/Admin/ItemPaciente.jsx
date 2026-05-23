import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalAsignarTutor from "./ModalAsignarTutor";
import { obtenerFichaMedicaPacienteAPI } from "../../helpers/queries";
import ModalDatosEscolares from "./ModalDatosEscolares";

const ItemPaciente = ({ itemPaciente, setPaciente, abrirModalEscolar }) => {

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

    const navigate = useNavigate();

    const abrirFicha = async () => {
        const respuesta = await obtenerFichaMedicaPacienteAPI(itemPaciente.idPaciente);
        if (respuesta.status === 200) {
            navigate(`/ficha-medica/${itemPaciente.idPaciente}/editar`);
        } else {
            navigate(`/ficha-medica/${itemPaciente.idPaciente}/crear`);
        }
    }

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
                <td>{itemPaciente.datosEscolares[0]?.escuela || "Sin datos escolares"}</td>
                <td>{itemPaciente.datosEscolares[0]?.turno || "Sin datos escolares"} </td>
                <td>
                    <div>
                        <Button variant="secondary" className="me-2" onClick={abrirModalTutor}><i className="bi bi-person-fill"></i></Button>
                        <Button variant="primary" as={Link} to={`/turnos/${itemPaciente.idPaciente}`}><i className="bi bi-calendar-check-fill"></i></Button>
                        <Button variant="success" onClick={abrirFicha} className="ms-2"><i className="bi bi-clipboard2-pulse-fill"></i></Button>
                        <Button variant="warning" className="mt-2 me-2" onClick={() => abrirModalEscolar(itemPaciente.idPaciente)}><i className="bi bi-backpack-fill"></i></Button>
                        <Button variant="dark" className="mt-2"><i className="bi bi-arrow-clockwise"></i></Button>
                    </div>
                </td>
            </tr>
            <ModalAsignarTutor showModalTutor={showModalTutor} cerrarModalTutor={cerrarModalTutor} itemPaciente={itemPaciente} setPaciente={setPaciente}></ModalAsignarTutor>
        </>
    );
};

export default ItemPaciente;