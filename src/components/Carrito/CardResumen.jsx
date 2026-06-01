import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VisaLogo from "../../assets/visa-logo.jpg";
import MPLogo from "../../assets/logo-mercadoPago.png";
import masterCardLogo from "../../assets/logo-masterCard.png";
import { finalizarCompraUsuario } from '../../helpers/queries';
import Swal from 'sweetalert2';
import ModalDatosCompra from './ModalDatosCompra';
import { useState } from 'react';

const CardResumen = ({ detalleCarrito, obtenerCarrito }) => {
    const [showModalCompra, setShowModalCompra] = useState(false);

    const cerrarModalCompra = () => setShowModalCompra(false);
    const abrirModalCompra = () => setShowModalCompra(true);

    const [venta, setVenta] = useState([]);

    const finalizarCompra = async () => {
        const respuesta = await finalizarCompraUsuario(detalleCarrito.carrito?.idCarrito);
        if (respuesta.status === 201) {
            const datos = await respuesta.json();
            setVenta(datos);
            abrirModalCompra();
        }
    }

    return (
        <>
            <Card className='shadow-sm'>
                <Card.Body>
                    {/* Resumen del pedido */}
                    <Card.Title>RESUMEN DEL PEDIDO</Card.Title>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <span>Retiro en:</span>
                        <p className='fw-bold'>Belgrano 625 Monteros</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <span>Total del pedido: </span>
                        <p className='fw-bold'>${detalleCarrito?.total ?? 0}</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <Button className='btn-principal mt-2 w-100' onClick={finalizarCompra}>Finalizar Reserva</Button>
                        <Button className='btn-transparente mt-3'>Seguir comprando</Button>
                    </div>
                    <hr />
                </Card.Body >
            </Card >
            <ModalDatosCompra showModalCompra={showModalCompra} cerrarModalCompra={cerrarModalCompra} detalleCarrito={detalleCarrito} venta={venta}></ModalDatosCompra>
        </>
    );
};

export default CardResumen;