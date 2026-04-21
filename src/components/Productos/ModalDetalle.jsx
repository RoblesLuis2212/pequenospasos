import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AgregarAlCarritoAPI, obtenerCarritoUsuarioAPI } from '../../helpers/queries';
import Swal from 'sweetalert2';

const ModalDetalle = ({ handleClose, show, itemProducto }) => {

    const agregarAlCarrito = async () => {
        const respuestacarritoUsuario = await obtenerCarritoUsuarioAPI();
        let cantidadActual = 0;

        if (respuestacarritoUsuario.status === 200) {
            const datos = await respuestacarritoUsuario.json();
            const itemCarrito = datos.carrito.detalleCarritos.find(item => item.productoId === itemProducto.idProducto)

            if (itemCarrito) cantidadActual = itemCarrito.cantidad
        }

        await AgregarAlCarritoAPI(itemProducto.idProducto, cantidadActual + 1);
        Swal.fire({
            title: "Producto agregado a tu carrito!",
            icon: "success",
            draggable: true
        });
        handleClose();

    }

    return (
        <Modal show={show} onHide={handleClose} size='lg' centered>
            <Modal.Body className='p-0 overflow-hidden'>
                {/* Imagen */}
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6 d-flex align-items-center justify-content-center p-4">
                        <img src={itemProducto.imagen} alt="Producto en venta" className='img-detalle' />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 p-md-5 d-flex flex-column justify-content-center">
                        {/* Informacion del producto */}
                        <h3 className='nombre-producto nombre-modal ms-4 ms-md-0'>{itemProducto.nombre}</h3>
                        <div className='d-flex justify-content-start'>
                            <p className='precio-producto ms-4 ms-md-0'>${itemProducto.precio}</p>
                            <p className='categoria-producto ms-2'>{itemProducto.categoria?.nombre}</p>
                        </div>
                        <p className='text-muted ms-3 ms-md-0'>{itemProducto.descripcion}</p>
                        <div className='d-flex flex-column gap-2 gap-md-3'>
                            <Button className='btn-principal mx-3' onClick={agregarAlCarrito}>Añadir al carrito</Button>
                            <Button className='btn-principal seguir-compra mx-3' onClick={handleClose}>Seguir comprando</Button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal >
    );
};

export default ModalDetalle;