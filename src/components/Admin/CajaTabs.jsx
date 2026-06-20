import { Button } from "react-bootstrap";
import ItemMovimiento from "./ItemMovimiento";
import { useState } from "react";
import ModalNuevaVenta from "./ModalNuevaVenta";
import { abrirCajaAPI, cerrarCajaAPI, obtenerCajaActivaAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const CajaTabs = ({ caja, setCaja }) => {
    const [showModalVenta, setShowModalVenta] = useState(false);

    const cerrarModalVenta = () => setShowModalVenta(false);
    const abrirModalVenta = () => setShowModalVenta(true);

    const fecha = caja?.caja?.fechaApertura ? new Date(caja.caja.fechaApertura) : null;

    const fechaFormateada = fecha?.toLocaleDateString('es-AR', {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const horaFormateada = fecha?.toLocaleTimeString('es-AR', {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    });

    const fechaHoraFinal = `${fechaFormateada}`;

    const usuarioActual = JSON.parse(sessionStorage.getItem("usuarioKey")).usuario?.nombre;

    const abrirCaja = async () => {
        const respuesta = await abrirCajaAPI();
        if (respuesta.status === 201) {
            Swal.fire({ title: "Caja abierta exitosamente!", icon: "success" });
            const respuestaCaja = await obtenerCajaActivaAPI();
            if (respuestaCaja.status === 200) {
                const datos = await respuestaCaja.json();
                setCaja(datos);
            }
        } else if (respuesta.status === 400) {
            Swal.fire({ title: "Ya existe una caja abierta actualmente!", icon: "info" });
        } else {
            Swal.fire({ title: "Ocurrio un error al abrir la caja. Intentelo más tarde", icon: "error" });
        }
    }

    const cerrarCaja = async () => {
        const respuesta = await cerrarCajaAPI(caja?.caja?.idCaja);
        if (respuesta.status === 200) {
            Swal.fire({ title: "Caja cerrada exitosamente!", icon: "success" });
            setCaja([]);
        } else if (respuesta.status === 400) {
            Swal.fire({ title: "No existe una caja abierta actualmente!", icon: "info" });
        } else {
            Swal.fire({ title: "Ocurrio un error al cerrar la caja. Intentelo más tarde", icon: "error" });
        }
    }


    return (
        <>
            <div className="admin-wrapper">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <p className="titulo" style={{ fontSize: '15px' }}>Caja del día</p>
                        {caja?.caja ? (
                            <p className="mb-0 text-muted" style={{ fontSize: '13px' }}>
                                {fechaHoraFinal} · Abierta por {usuarioActual} · {horaFormateada} hs
                            </p>

                        ) : (
                            <p className="text-muted">No hay caja abierta</p>
                        )}
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className={caja.caja?.estado === "ABIERTA" ? 'badge bg-success' : 'badge bg-danger'}>{caja?.caja?.estado === "ABIERTA" ? 'Abierta' : 'Cerrada'}</span>
                        <Button className="btn btn-primary-outline" size="sm" onClick={abrirModalVenta} disabled={caja.caja?.estado !== "ABIERTA"}>Nueva venta<i className="bi bi-plus ms-1"></i></Button>
                        <Button variant="outline-secondary" size="sm" onClick={abrirCaja}>Abrir caja</Button>
                        <Button variant="outline-danger" size="sm" onClick={cerrarCaja}>Cerrar caja</Button>
                    </div>
                </div>

                {/* Métricas */}
                <div className="row g-3 mb-4">
                    <div className="col">
                        <div className="p-3 rounded-3" style={{ background: 'var(--bs-secondary-bg)' }}>
                            <p className="titulo" style={{ fontSize: '13px' }}>Total recaudado</p>
                            <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${caja.metricas?.totalRecaudado || 0}</p>
                            <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{caja.metricas?.cantidadVentas} transacciones</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 rounded-3" style={{ background: 'var(--bs-secondary-bg)' }}>
                            <p className="titulo" style={{ fontSize: '13px' }}>Transferencia</p>
                            <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${caja.metricas?.porMetodoPago?.TRANSFERENCIA || 0}</p>
                            <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{caja.metricas?.cantidadVentasTransferencia} transacciones</p>
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
                    {
                        caja?.caja?.ventas && caja.caja.ventas.length > 0 ? (
                            caja?.caja?.ventas.map((itemMovimiento, index) => (
                                <ItemMovimiento key={index} itemMovimiento={itemMovimiento} isLast={index === caja.length - 1}></ItemMovimiento>
                            ))
                        ) : (
                            <p className="text-muted text-center">Sin movimientos para listar</p>
                        )
                    }
                </div>

            </div>
            <ModalNuevaVenta showModalVenta={showModalVenta} cerrarModalVenta={cerrarModalVenta} caja={caja} setCaja={setCaja} titulo="Nueva venta"></ModalNuevaVenta>
        </>

    );
};

export default CajaTabs;