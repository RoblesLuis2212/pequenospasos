import { Table, Button, InputGroup, Form } from 'react-bootstrap';
import './Admin.css';


const TurnosTabs = () => {
    return (
        <div className="admin-wrapper">
            <div className="admin-toolbar">
                <Button className="btn-agregar">+ Agregar turno</Button>
                <InputGroup className="admin-search">
                    <Form.Control
                        placeholder="Buscar por nombre, fecha, estado..."
                    />
                    <Button className="btn-buscar">Buscar</Button>
                </InputGroup>
            </div>

            <h6 className="turnos-titulo">Listado de turnos</h6>
            <div className="tabla-wrapper">
                <Table hover className="admin-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Paciente</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={6} className="text-center py-4 text-muted">
                                No hay turnos cargados
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default TurnosTabs;