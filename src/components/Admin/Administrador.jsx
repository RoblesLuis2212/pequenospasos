import { Card, Badge } from "react-bootstrap";
import AdminTabs from "./AdminTabs";
import { useEffect, useState } from "react";
import { listarPacientesAPI, listarPedidosAPI, listarProductosAPI, listarTurnos, obtenerCajaActivaAPI } from "../../helpers/queries";
import ModalNuevaVenta from "./ModalNuevaVenta";

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
            setPedidos(datos);
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

    const [turnos, setTurnos] = useState([]);

    const obtenerTurnos = async () => {
        const respuesta = await listarTurnos();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setTurnos(datos);
            console.log(datos);
        }
    }

    useEffect(() => {
        obtenerTurnos();
    }, [])

    const [caja, setCaja] = useState([]);

    const obtenerCaja = async () => {
        const respuesta = await obtenerCajaActivaAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setCaja(datos);
        }
    }

    useEffect(() => {
        obtenerCaja();
    }, []);

    const turnosPendientes = turnos.filter(t => t.estado === "PENDIENTE").length;
    const pedidosPendientes = pedidos.filter(p => p.estado === "PENDIENTE").length;
    const cantidadProductos = productos.length;

    return (
        <>
            <section className='container-fluid'>
                <div className="row mt-1 g-3">
                    <div className="col-12 col-lg-4">
                        <Card className="shadow-sm h-100" >
                            <Card.Body>
                                <Card.Title>Turnos</Card.Title>
                                <Card.Text className="fs-3 fw-bold text-warning">{turnosPendientes}</Card.Text>
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
                                <Card.Text className="fs-3 fw-bold text-success">{pedidosPendientes}</Card.Text>
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
                                <Card.Text className="fs-3 fw-bold text-primary">{cantidadProductos}</Card.Text>
                                <Badge bg="info" text="dark" className="align-self-start">
                                    Incluye sin stock
                                </Badge>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section >
            <AdminTabs productos={productos} setProductos={setProductos} pedidos={pedidos} setPedidos={setPedidos} pacientes={pacientes} setPaciente={setPaciente} turnos={turnos} setTurnos={setTurnos} caja={caja} setCaja={setCaja}></AdminTabs>
        </>
    );
};

export default Administrador;