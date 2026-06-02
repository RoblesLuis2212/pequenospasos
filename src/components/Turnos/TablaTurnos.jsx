import Table from 'react-bootstrap/Table';
import ItemTurno from './ItemTurno';
import "./TablaTurnos.css";
import { useEffect, useState } from 'react';
import { obtenerPacienteIDAPI, pacientesconTurnos } from '../../helpers/queries';

const TablaTurnos = () => {
    const [turnos, setTurnos] = useState([]);

    const obtenerTurnos = async () => {
        const respuesta = await pacientesconTurnos();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setTurnos(datos);
        }
    }

    useEffect(() => {
        obtenerTurnos();
    }, []);

    const turnosFiltrados = turnos.filter((t) => t.estado === "APROBADO" || t.estado === "PENDIENTE").filter((t => new Date(t.fecha) >= new Date())).sort((a, b) => new Date(a.fecha) - new Date(b.fecha)).slice(0, 4);

    return (
        <Table responsive>
            <thead className='tabla-encabezado'>
                <tr>
                    <th className='text-center'>Codigo</th>
                    <th className='text-center'>Nombre Paciente</th>
                    <th className='text-center'>Fecha y hora</th>
                    <th className='text-center'>Estado del turno</th>
                    <th className='text-center'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {turnosFiltrados.length > 0 ? (
                    turnosFiltrados.map((itemTurno) => (
                        <ItemTurno key={itemTurno.idTurno} itemTurno={itemTurno} obtenerTurnos={obtenerTurnos} setTurnos={setTurnos}></ItemTurno>
                    ))
                ) : (
                    <tr>
                        <td colSpan={5} className="text-center py-3 text-muted">
                            No hay turnos disponibles
                        </td>
                    </tr>
                )
                }
            </tbody>
        </Table>
    );
};

export default TablaTurnos;