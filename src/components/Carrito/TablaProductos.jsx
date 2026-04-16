import Table from 'react-bootstrap/Table';
import ItemProductos from './ItemProductos';

const TablaProductos = ({ productosCarrito, actualizarCantidad, obtenerCarrito }) => {
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
                    {productosCarrito.length > 0 ? (
                        productosCarrito.map((itemProductoCarrito) => (
                            <ItemProductos itemProductoCarrito={itemProductoCarrito} actualizarCantidad={actualizarCantidad} key={itemProductoCarrito.idDetalleCarrito} obtenerCarrito={obtenerCarrito} ></ItemProductos>
                        ))

                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                <p className="mb-0">No hay productos en el carrito.</p>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </Table>
        </>
    );
};

export default TablaProductos;