import Table from 'react-bootstrap/Table';
import ItemProductos from './ItemProductos';

const TablaProductos = ({ productosCarrito, actualizarCantidad }) => {
    return (
        <>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productosCarrito.map((itemProductoCarrito) => (
                        <ItemProductos itemProductoCarrito={itemProductoCarrito} actualizarCantidad={actualizarCantidad} key={itemProductoCarrito.idDetalleCarrito}></ItemProductos>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default TablaProductos;