import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VisaLogo from "../../assets/visa-logo.jpg";
import MPLogo from "../../assets/logo-mercadoPago.png";
import masterCardLogo from "../../assets/logo-masterCard.png";

const CardResumen = ({ detalleCarrito }) => {
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
                    <p className='fw-bold'>${detalleCarrito.total}</p>
                </div>
                <div className='d-flex flex-column justify-content-center'>
                    <Button className='btn-principal mt-2 w-100'>Finalizar Pedido</Button>
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