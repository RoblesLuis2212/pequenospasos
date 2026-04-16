import { Button } from "react-bootstrap";

const ItemProductos = ({ itemProductoCarrito, actualizarCantidad }) => {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img src={itemProductoCarrito.producto?.imagen} className='img-producto-carrito' alt="Producto" />
                    <p className='fw-bold ms-2'>{itemProductoCarrito.producto?.nombre}</p>
                </div>
            </td>
            <td className='fw-bold'>${itemProductoCarrito.producto?.precio}</td>
            <td className='fw-bold'>
                <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                    <Button variant="outline-secondary" className="me-md-2 mb-2 mb-md-0" onClick={() => actualizarCantidad(itemProductoCarrito.idDetalleCarrito, itemProductoCarrito.cantidad - 1)}>-</Button>
                    <span>{itemProductoCarrito.cantidad}</span>
                    <Button variant="outline-secondary" className="ms-md-2 mt-2 mt-md-0"
                        onClick={() => actualizarCantidad(itemProductoCarrito.idDetalleCarrito, itemProductoCarrito.cantidad + 1)}
                    >+</Button>
                </div>
            </td>
            <td className='fw-bold'>${itemProductoCarrito.producto?.precio * itemProductoCarrito.cantidad}</td>
            <td>
                <Button variant="danger"><i className="bi bi-trash3-fill"></i></Button>
            </td>
        </tr>
    );
};

export default ItemProductos;