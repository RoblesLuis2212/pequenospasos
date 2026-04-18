import Table from 'react-bootstrap/Table';
import ItemCompras from './ItemCompras';

const TablaCompras = () => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha de compra</th>
                    <th>Cantidad de productos</th>
                    <th>Estado</th>
                    <th>Total del pedido</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <ItemCompras></ItemCompras>
            </tbody>
        </Table>
    );
};

export default TablaCompras;