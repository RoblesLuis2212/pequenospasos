import Table from 'react-bootstrap/Table';
import ItemCompras from './ItemCompras';

const TablaCompras = ({ compras }) => {
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
                {compras.map((itemCompra) => (
                    <ItemCompras itemCompra={itemCompra} key={itemCompra.idVenta}></ItemCompras>
                ))}
            </tbody>
        </Table>
    );
};

export default TablaCompras;