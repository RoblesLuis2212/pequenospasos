import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VisaLogo from ".././../assets/visa-logo.jpg";
import MPLogo from ".././../assets/logo-mercadoPago.png";

const CardResumen = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>RESUMEN DEL PEDIDO</Card.Title>
                <hr />
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold'>Total pedido: </p>
                    <span>$120000</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='fw-bold'>Retiro en:</p>
                    <span>Belgrano 625 Monteros</span>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button className='btn-secundario mt-2 w-100'>Finalizar Pedido</Button>
                </div>
                <hr />
                <div className="metodos-pago">
                    <img src={VisaLogo} className='metodo-pago' alt="" />
                    <img src={MPLogo} className='metodo-pago' alt="" />
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardResumen;