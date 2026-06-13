import Table from 'react-bootstrap/Table';
import ItemCompras from './ItemCompras';
import { useEffect } from 'react';
import { listarComprasUsuario } from '../../helpers/queries';

const TablaCompras = ({ compras, obtenerComprasUsuario }) => {
    return (
        <Table responsive>
            <thead className='tabla-encabezado'>
                <tr>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Fecha de compra</th>
                    <th className='text-center'>Cantidad de productos</th>
                    <th className='text-center'>Estado</th>
                    <th className='text-center'>Total del pedido</th>
                    <th className='text-center'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {compras.filter(c => c.tipoVenta === "PRODUCTO").filter(c => c.tipoVenta != "CANCELADO").sort((a, b) => new Date(b.fechaCompra) - new Date(a.fechaCompra)).slice(0, 3).map((itemCompra) => (
                    <ItemCompras itemCompra={itemCompra} key={itemCompra.idVenta} obtenerComprasUsuario={obtenerComprasUsuario}></ItemCompras>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaCompras;