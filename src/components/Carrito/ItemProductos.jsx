import { Button } from "react-bootstrap";

const ItemProductos = () => {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img src="https://http2.mlstatic.com/D_677960-MLA99563185220_122025-C.jpg" className='img-producto-carrito' alt="Producto" />
                    <p className='fw-bold ms-2'>Naipes Españoles</p>
                </div>
            </td>
            <td className='fw-bold'>$15000</td>
            <td className='fw-bold'>
                <Button variant="outline-secondary" className="me-2">-</Button>
                <span>3</span>
                <Button variant="outline-secondary" className="ms-2">+</Button>
            </td>
            <td className='fw-bold'>$45000</td>
        </tr>
    );
};

export default ItemProductos;