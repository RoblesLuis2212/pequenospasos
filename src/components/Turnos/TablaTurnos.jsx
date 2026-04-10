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
                {turnos.map((itemTurno) => (
                    <ItemTurno key={itemTurno.idTurno} itemTurno={itemTurno} obtenerTurnos={obtenerTurnos}></ItemTurno>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaTurnos;