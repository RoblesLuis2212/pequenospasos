import { Card, Badge } from "react-bootstrap";

const Administrador = () => {
    return (
        <section className='container-fluid'>
            <div className="row mt-1 g-3">
                <div className="col-12 col-lg-4">
                    <Card className="shadow-lg h-100" >
                        <Card.Body>
                            <Card.Title>Turnos</Card.Title>
                            <Card.Text className="fs-3 fw-bold text-warning">30</Card.Text>
                            <Badge bg="warning" text="white" className="align-self-start">
                                Pendientes
                            </Badge>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-lg-4">
                    <Card className="shadow-lg h-100" >
                        <Card.Body>
                            <Card.Title>Pedidos</Card.Title>
                            <Card.Text className="fs-3 fw-bold text-success">100</Card.Text>
                            <Badge bg="success" text="white" className="align-self-start">
                                Pendientes
                            </Badge>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-lg-4">
                    <Card className="shadow-lg h-100" >
                        <Card.Body>
                            <Card.Title>Productos totales</Card.Title>
                            <Card.Text className="fs-3 fw-bold text-primary">50</Card.Text>
                            <Badge bg="info" text="dark" className="align-self-start">
                                Incluye sin stock
                            </Badge>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section >
    );
};

export default Administrador;