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
            console.log(datos);
            setTurnos(datos);
        }
    }

    useEffect(() => {
        obtenerTurnos();
    }, []);



    return (
        <Table responsive className='mt-2'>
            <thead className='tabla-encabezado'>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre Paciente</th>
                    <th>Fecha y hora</th>
                    <th>Estado del turno</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {turnos.map((itemTurno) => (
                    <ItemTurno key={itemTurno.idTurno} itemTurno={itemTurno}></ItemTurno>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaTurnos;