import React from 'react';
import { Form } from 'react-bootstrap';
import ItemMovimiento from './ItemMovimiento';
import EstadisticasVentas from './EstadisticasVentas';

const HistorialVentas = () => {
    return (
        <section className='container-fluid recuperar-container'>
            <div className="row">
                <div className="col-12">
                    <h4 className='text-center titulo mt-2'>Historial de ventas</h4>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                    <Form.Control type='date' className='input-custom custom-input'></Form.Control>
                </div>
                <div className="col-12 col-md-6 col-lg-12 mt-2">
                    <Form.Select className='input custom-input'>
                        <option value="">Todos los tipos</option>
                        <option value="CONSULTA">Consulta</option>
                        <option value="PRODUCTO">Producto</option>
                    </Form.Select>
                </div>
                <div className="col-12 col-md-6 col-lg-12 mt-2">
                    <Form.Select className='input custom-input'>
                        <option value="">Todos los metodos</option>
                        <option value="1">Efectivo</option>
                        <option value="2">Transferencia</option>
                        <option value="3">Credito</option>
                        <option value="4">Debito</option>
                    </Form.Select>
                </div>
                <div className="col-12 col-md-6 col-lg-12 mt-2">
                    <Form.Control className='input-custom custom-input' placeholder='buscar por paciente,padre'></Form.Control>
                </div>
            </div>
            {/* Total de reacudacion por cada metodo de pago */}
            <div className="row g-3 mb-4 mt-2">
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Total recaudado</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>$1200</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>10 transacciones</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Efectivo</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>$1500</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>10 transacciones</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Transferencia</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>$1500</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>10 transacciones</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Debito</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>$1500</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>10 transacciones</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Credito</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>$1500</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>10 transacciones</p>
                    </div>
                </div>
                {/* Historial de movimientos */}
                <div className="container mt-4">
                    <div className="border rounded-3 p-3 bg-light">
                        <p className="titulo" style={{ fontSize: '15px' }}>Historial de ventas</p>
                        <ItemMovimiento isLast={false}
                            itemMovimiento={{
                                fechaRetiro: "2026-05-15T16:30:00.000Z",
                                monto: 25000,
                                tipoVenta: "CONSULTA",
                                estado: "PAGADO",
                                usuario: { nombreCompleto: "Luis García" },
                                metodopago: { nombre: "EFECTIVO" }
                            }}></ItemMovimiento>
                    </div>
                </div>
                {/* Estadisticas de ventas de productos vs consultas */}
                <div>
                    <EstadisticasVentas></EstadisticasVentas>
                </div>
            </div>
        </section>
    );
};

export default HistorialVentas;