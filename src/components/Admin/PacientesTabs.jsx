import { Button, Table } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ModalPaciente from "./ModalPaciente";
import { useState } from "react";
import ItemPaciente from "./ItemPaciente";

const PacientesTabs = ({ pacientes, setPacientes }) => {
    const [showModalPacientes, setShowModalPacientes] = useState(false);

    const cerrarModalPacientes = () => setShowModalPacientes(false);
    const abrirModalPacientes = () => setShowModalPacientes(true);



    return (
        <>
            <div className="admin-wrapper">
                <div className="admin-toolbar">
                    <Button className="btn-agregar" onClick={abrirModalPacientes}>+ Agregar Paciente</Button>
                    <InputGroup className="pedidos-search">
                        <Form.Control
                            placeholder="Buscar por nombre, dni, obra social..."
                        />
                        <Button className="btn-buscar">Buscar</Button>
                    </InputGroup>
                </div>

                <h6 className="admin-titulo">Listado de pacientes</h6>
                <div className="tabla-wrapper">
                    <Table hover className="admin-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre completo</th>
                                <th>DNI</th>
                                <th>Domicilio</th>
                                <th>Edad</th>
                                <th>Obra Social</th>
                                <th>Padre/Tutor</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientes.length > 0 ? (
                                pacientes.map((itemPaciente) => (
                                    <ItemPaciente itemPaciente={itemPaciente} key={itemPaciente.idPaciente}></ItemPaciente>
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
        </>
    );
};

export default PacientesTabs;