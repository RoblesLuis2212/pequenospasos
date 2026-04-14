import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VisaLogo from "../../assets/visa-logo.jpg";
import MPLogo from "../../assets/logo-mercadoPago.png";
import masterCardLogo from "../../assets/logo-masterCard.png";

const CardResumen = () => {
    return (
        <Card className='shadow-sm'>
            <Card.Body>
                {/* Resumen del pedido */}
                <Card.Title>RESUMEN DEL PEDIDO</Card.Title>
                <hr />
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold'>Subtotal pedido: </p>
                    <span>$60000</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold'>Retiro en:</p>
                    <span>Belgrano 625 Monteros</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold'>Total del pedido:</p>
                    <span>$120000</span>
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