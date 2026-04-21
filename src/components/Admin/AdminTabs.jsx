import Nav from 'react-bootstrap/Nav';
import "./Admin.css";

const AdminTabs = () => {
    return (
        <section className='container-fluid mt-4'>
            <div className="row">
                <div className="col-12">
                    <Nav
                        variant="pills"
                        defaultActiveKey="turnos"
                        className='gap-1 p-2 rounded-3 nav-dashboard'
                        style={{
                            background: 'linear-gradient(135deg, #f8f7ff 0%, #ede9fe 100%)',
                            border: '1px solid #ddd6fe',
                            boxShadow: '0 2px 12px rgba(109, 40, 217, 0.08)'
                        }}
                    >
                        {[
                            { key: 'turnos', label: 'Turnos' },
                            { key: 'productos', label: 'Productos' },
                            { key: 'pedidos', label: 'Pedidos' },
                        ].map(({ key, label }) => (
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
                </div>
            </div>
        </section>
    );
};

export default AdminTabs;