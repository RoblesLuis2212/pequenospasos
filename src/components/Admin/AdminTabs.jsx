import { Nav, Tab } from 'react-bootstrap';
import ProductosTabs from './ProductosTabs';
import PedidosTabs from './PedidosTabs';
import TurnosTabs from './TurnosTabs';
import "./Admin.css";
import PacientesTabs from './PacientesTabs';

const AdminTabs = ({ productos, setProductos }) => {
    const tabs = [
        { key: 'turnos', label: 'Turnos', component: <TurnosTabs></TurnosTabs> },
        { key: 'paciente', label: "Pacientes", component: <PacientesTabs></PacientesTabs> },
        { key: 'productos', label: 'Productos', component: <ProductosTabs productos={productos} setProductos={setProductos}></ProductosTabs> },
        { key: 'pedidos', label: 'Pedidos', component: <PedidosTabs></PedidosTabs> },
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