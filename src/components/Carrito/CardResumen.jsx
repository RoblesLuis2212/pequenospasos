import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VisaLogo from "../../assets/visa-logo.jpg";
import MPLogo from "../../assets/logo-mercadoPago.png";
import masterCardLogo from "../../assets/logo-masterCard.png";
import { finalizarCompraUsuario } from '../../helpers/queries';
import Swal from 'sweetalert2';

const CardResumen = ({ detalleCarrito }) => {
    console.log("Detalle carrito: ", detalleCarrito);

    const finalizarCompra = async () => {
        const respuesta = await finalizarCompraUsuario(detalleCarrito.carrito.idCarrito, "PENDIENTE");
        if (respuesta.status === 200) {
            Swal.fire({
                title: "Pedido finalizado exitosamente",
                showClass: {
                    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    ` },
                hideClass: {
                    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    ` }
            });
        }
    }

    return (
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
                    <Button className='btn-principal mt-2 w-100' onClick={finalizarCompra}>Finalizar Pedido</Button>
                    <Button className='btn-transparente mt-3'>Seguir comprando</Button>
                </div>
                <hr />
                {/* metodos de pago */}
                <div className="d-flex justify-content-around">
                    <img src={VisaLogo} className='metodo-pago' alt="metodo de pago Visa" />
                    <img src={masterCardLogo} className='metodo-pago' alt="metodo de pago Master Card" />
                    <img src={MPLogo} className='metodo-pago' alt="metodo de pago Mercado pago" />
                </div>
            </Card.Body >
        </Card >
    );
};

export default CardResumen;