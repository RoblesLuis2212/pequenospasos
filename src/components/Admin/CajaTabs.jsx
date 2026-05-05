import { Button } from "react-bootstrap";
import ItemMovimiento from "./ItemMovimiento";
import { useState } from "react";
import ModalNuevaVenta from "./ModalNuevaVenta";

const CajaTabs = ({ caja, setCaja }) => {
    const [showModalVenta, setShowModalVenta] = useState(false);

    const cerrarModalVenta = () => setShowModalVenta(false);
    const abrirModalVenta = () => setShowModalVenta(true);

    return (
        <>
            <div className="admin-wrapper">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <p className="titulo" style={{ fontSize: '15px' }}>Caja del día</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '13px' }}>
                            lunes 28 de abril · Abierta por Geremias Robles · 08:00 hs
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="badge bg-success">Abierta</span>
                        <Button className="btn-principal" onClick={abrirModalVenta}>Nueva venta<i className="bi bi-plus ms-1"></i></Button>
                        <Button variant="outline-secondary" size="sm">Abrir caja</Button>
                        <Button variant="outline-danger" size="sm">Cerrar caja</Button>
                    </div>
                </div>

                {/* Métricas */}
                <div className="row g-3 mb-4">
                    <div className="col">
                        <div className="p-3 rounded-3" style={{ background: 'var(--bs-secondary-bg)' }}>
                            <p className="titulo" style={{ fontSize: '13px' }}>Total recaudado</p>
                            <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${caja.metricas?.totalRecaudado}</p>
                            <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{caja.metricas?.cantidadVentas} transacciones</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 rounded-3" style={{ background: 'var(--bs-secondary-bg)' }}>
                            <p className="titulo" style={{ fontSize: '13px' }}>Transferencia</p>
                            <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${caja.metricas?.porMetodoPago?.TRANSFERENCIA}</p>
                            <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>3 transacciones</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 rounded-3" style={{ background: 'var(--bs-secondary-bg)' }}>
                            <p className="titulo" style={{ fontSize: '13px' }}>Efectivo</p>
                            <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${caja.metricas?.porMetodoPago?.EFECTIVO || 0}</p>
                            <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{caja.metricas?.cantidadVentasEfectivo} transacciones</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 rounded-3" style={{ background: 'var(--bs-secondary-bg)' }}>
                            <p className="titulo" style={{ fontSize: '13px' }}>Débito</p>
                            <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${caja.metricas?.porMetodoPago?.DEBITO || 0}</p>
                            <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{caja.metricas?.cantidadVentasDebito} transacciones</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 rounded-3" style={{ background: 'var(--bs-secondary-bg)' }}>
                            <p className="titulo" style={{ fontSize: '13px' }}>Crédito</p>
                            <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${caja.metricas?.porMetodoPago?.CREDITO || 0}</p>
                            <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{caja.metricas?.cantidadVentasCredito} transacciones</p>
                        </div>
                    </div>
                </div>

                {/* Movimientos */}
                <div className="border rounded-3 p-3 shadow-lg">
                    <p className="titulo" style={{ fontSize: '15px' }}>Movimientos del día</p>
                    {caja?.caja?.ventas.map((itemMovimiento, index) => (
                        <ItemMovimiento key={index} itemMovimiento={itemMovimiento} isLast={index === caja.length - 1}></ItemMovimiento>

                    ))
                    }
                </div>

            </div>
            <ModalNuevaVenta showModalVenta={showModalVenta} cerrarModalVenta={cerrarModalVenta} caja={caja}></ModalNuevaVenta>
        </>

    );
};

export default CajaTabs;