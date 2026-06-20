import React from 'react';

const ItemMovimiento = ({ isLast, itemMovimiento }) => {
    const colorEstado = {
        "RETIRADO": "success",
        "PAGADO": "success",
        "CANCELADO": "danger",
        "PENDIENTE": "warning",
        "APROBADO": "success",
    };

    const fecha = new Date(itemMovimiento.fechaRetiro);

    const fechaFormateada = fecha.toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).replace(",", "")

    console.log("item turno: ", itemMovimiento);

    return (
        <>
            <div
                className="d-flex justify-content-between align-items-center py-2"
                style={{ borderBottom: !isLast ? '0.5px solid var(--bs-border-color)' : 'none' }}
            >
                <div>
                    <div className="d-flex">
                        <p className="mb-0 fw-500" style={{ fontSize: '14px' }}>{itemMovimiento.turno?.paciente?.usuario?.nombreCompleto || itemMovimiento.usuario?.nombreCompleto}
                            {itemMovimiento.turno?.paciente?.nombreCompleto && ' ·'}
                        </p>
                        <p className="mb-0 fw-500 ms-1" style={{ fontSize: '14px' }}>{itemMovimiento.turno?.paciente?.nombreCompleto && `${itemMovimiento.turno.paciente.nombreCompleto} (Paciente)`} </p>
                    </div>
                    <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>
                        {fechaFormateada} hs · {itemMovimiento.metodopago?.nombre} · {itemMovimiento.tipoVenta} · {itemMovimiento.pagoCon && ` Pagó: $${itemMovimiento.pagoCon} · Vuelto: $${itemMovimiento.vuelto}`}
                    </p>
                </div>
                <div className="text-end">
                    <p className="mb-0 fw-500">${itemMovimiento.monto}</p>
                    <span className={`badge bg-${colorEstado[itemMovimiento.estado]}`} style={{ fontSize: '11px' }}>
                        {itemMovimiento.estado}
                    </span>
                </div>
            </div>
        </>
    );
};

export default ItemMovimiento;