import Table from 'react-bootstrap/Table';
import ItemProductos from './ItemProductos';

const TablaProductos = () => {
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <ItemProductos></ItemProductos>
                    <ItemProductos></ItemProductos>
                    <ItemProductos></ItemProductos>
                    <ItemProductos></ItemProductos>
                </tbody>
            </Table>
        </>
    );
};

export default TablaProductos;