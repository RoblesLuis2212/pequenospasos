import { Button, Table } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ModalPaciente from "./ModalPaciente";
import { useState } from "react";
import ItemPaciente from "./ItemPaciente";
import { set } from "react-hook-form";
import ModalDatosEscolares from "./ModalDatosEscolares";

const PacientesTabs = ({ pacientes, setPaciente }) => {
    const [showModalPacientes, setShowModalPacientes] = useState(false);

    const cerrarModalPacientes = () => setShowModalPacientes(false);
    const abrirModalPacientes = () => setShowModalPacientes(true);

    const [busqueda, setBusqeda] = useState("");

    const pacientesFiltrados = pacientes.filter((p) =>
        p.nombreCompleto.toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
        p.dni.toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
        p.obraSocial?.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()) ||
        p.usuario?.nombreCompleto.toLowerCase().includes(busqueda.toLocaleLowerCase())
    )

    const [showModalEscolar, setModalEscolar] = useState(false);
    const [pacienteSeleccionado, setPacienteSeleccionado] = useState([]);

    const cerrarModalEscolar = () => setModalEscolar(false);
    const abrirModalEscolar = (paciente) => {
        setPacienteSeleccionado(paciente);
        setModalEscolar(true);
    }


    return (
        <>
            <div className="admin-wrapper">
                <div className="admin-toolbar">
                    <Button className="btn-agregar" onClick={abrirModalPacientes}>+ Agregar Paciente</Button>
                    <InputGroup className="pedidos-search">
                        <Form.Control
                            placeholder="Buscar por nombre, dni, obra social..."
                            value={busqueda}
                            onChange={(e) => setBusqeda(e.target.value)}
                        />
                        <Button className="btn-buscar">Buscar</Button>
                    </InputGroup>
                </div>

                <h6 className="admin-titulo">Listado de pacientes</h6>
                <div className="tabla-wrapper">
                    <Table hover className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre completo</th>
                                <th>DNI</th>
                                <th>Domicilio</th>
                                <th>Edad</th>
                                <th>Obra Social</th>
                                <th>Padre/Tutor</th>
                                <th>Escuela</th>
                                <th>Turno</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientesFiltrados.length > 0 ? (
                                pacientesFiltrados.slice(0, 5).map((itemPaciente) => (
                                    <ItemPaciente itemPaciente={itemPaciente} key={itemPaciente.idPaciente} setPaciente={setPaciente} abrirModalEscolar={abrirModalEscolar}></ItemPaciente>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="text-center py-4 text-muted">
                                        No hay pedidos cargados
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
            <ModalPaciente showModalPacientes={showModalPacientes} cerrarModalPacientes={cerrarModalPacientes}></ModalPaciente>
            <ModalDatosEscolares cerrarModalEscolar={cerrarModalEscolar} showModalEscolar={showModalEscolar} pacienteSeleccionado={pacienteSeleccionado} setPaciente={setPaciente}></ModalDatosEscolares>
        </>
    );
};

export default PacientesTabs;