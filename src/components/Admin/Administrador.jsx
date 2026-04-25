import { Card, Badge } from "react-bootstrap";
import AdminTabs from "./AdminTabs";
import { useEffect, useState } from "react";
import { listarPacientesAPI, listarPedidosAPI, listarProductosAPI } from "../../helpers/queries";

const Administrador = () => {
    const [productos, setProductos] = useState([]);

    const obtenerProductos = async () => {
        const respuesta = await listarProductosAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setProductos(datos);
        }
    }

    useEffect(() => {
        obtenerProductos();
    }, [])

    const [pedidos, setPedidos] = useState([]);

    const obtenerPedidos = async () => {
        const respuesta = await listarPedidosAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
        }
    }

    useEffect(() => {
        obtenerPedidos();
    }, [])

    const [pacientes, setPaciente] = useState([]);

    const obtenerPacientes = async () => {
        const respuesta = await listarPacientesAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setPaciente(datos);
        }
    }

    useEffect(() => {
        obtenerPacientes();
    }, [])

    return (
        <>
            <section className='container-fluid'>
                <div className="row mt-1 g-3">
                    <div className="col-12 col-lg-4">
                        <Card className="shadow-sm h-100" >
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
                        <Card className="shadow-sm h-100" >
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
                        <Card className="shadow-sm h-100" >
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
            <AdminTabs productos={productos} setProductos={setProductos} pedidos={pedidos} setPedidos={setPedidos} pacientes={pacientes} setPaciente={setPaciente}></AdminTabs>
        </>
    );
};

export default Administrador;