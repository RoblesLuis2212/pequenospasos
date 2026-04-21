import { Button, Table } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const PacientesTabs = () => {
    return (
        <div className="admin-wrapper">
            <div className="admin-toolbar">
                <Button className="btn-agregar">+ Agregar Paciente</Button>
                <InputGroup className="pedidos-search">
                    <Form.Control
                        placeholder="Buscar por cliente, producto, estado..."
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
                            <th>Fecha de Nacimiento</th>
                            <th>Obra Social</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={7} className="text-center py-4 text-muted">
                                No hay pedidos cargados
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default PacientesTabs;