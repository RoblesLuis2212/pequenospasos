import { Nav, Tab } from 'react-bootstrap';
import ProductosTabs from './ProductosTabs';
import PedidosTabs from './PedidosTabs';
import TurnosTabs from './TurnosTabs';
import "./Admin.css";
import PacientesTabs from './PacientesTabs';
import { useState } from 'react';
import CajaTabs from './CajaTabs';

const AdminTabs = ({ productos, setProductos, pedidos, setPedidos, pacientes, setPaciente, turnos, setTurnos, caja, setCaja, abrirModalVenta, setProductosInicio }) => {
    //Este estado funcionara para saber que accion realizaremos al abrir el modal de productos.
    const [modoModalProducto, setModoModalProducto] = useState("crear");
    //Se almacenara en un estado el producto que al administrador seleccione para editar
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const tabs = [
        { key: 'turnos', label: 'Turnos', component: <TurnosTabs turnos={turnos} setTurnos={setTurnos}></TurnosTabs> },
        { key: 'paciente', label: "Pacientes", component: <PacientesTabs pacientes={pacientes} setPaciente={setPaciente}></PacientesTabs> },
        { key: 'productos', label: 'Productos', component: <ProductosTabs productos={productos} setProductos={setProductos} setModoModalProducto={setModoModalProducto} modoModalProducto={modoModalProducto} modoModalProducto={modoModalProducto} setProductoSeleccionado={setProductoSeleccionado} productoSeleccionado={productoSeleccionado} setProductosInicio={setProductosInicio} ></ProductosTabs> },
        { key: 'pedidos', label: 'Pedidos', component: <PedidosTabs pedidos={pedidos} setPedidos={setPedidos}></PedidosTabs> },
        { key: 'caja', label: 'Caja', component: <CajaTabs caja={caja} setCaja={setCaja} abrirModalVenta={abrirModalVenta}></CajaTabs> }
    ];


    return (
        <section className='container-fluid mt-4'>
            <div className="row">
                <div className="col-12">
                    <Tab.Container defaultActiveKey="turnos">
                        <Nav
                            variant="pills"
                            className='gap-1 p-2 rounded-3 nav-dashboard'
                            style={{
                                background: 'linear-gradient(135deg, #f8f7ff 0%, #ede9fe 100%)',
                                border: '1px solid #ddd6fe',
                                boxShadow: '0 2px 12px rgba(109, 40, 217, 0.08)'
                            }}
                        >
                            {tabs.map(({ key, label }) => (
                                <Nav.Item key={key}>
                                    <Nav.Link
                                        eventKey={key}
                                        className='fw-semibold px-4 py-2 rounded-2'
                                        style={{
                                            color: '#6d28d9',
                                            letterSpacing: '0.04em',
                                            fontSize: '0.85rem',
                                            transition: 'all 0.2s ease',
                                        }}
                                    >
                                        {label}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>

                        <Tab.Content className="mt-3">
                            {tabs.map(({ key, component }) => (
                                <Tab.Pane key={key} eventKey={key}>
                                    {component}
                                </Tab.Pane>
                            ))}
                        </Tab.Content>

                    </Tab.Container>
                </div>
            </div>
        </section>
    );
};

export default AdminTabs;