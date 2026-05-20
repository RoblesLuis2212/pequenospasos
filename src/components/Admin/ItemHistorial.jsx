import React from 'react';

const ItemHistorial = () => {
    return (
        <div
            className="d-flex justify-content-between align-items-center py-2"
            style={{ borderBottom: !isLast ? '0.5px solid var(--bs-border-color)' : 'none' }}
        >
            <div>
                <p className="mb-0 fw-500" style={{ fontSize: '14px' }}>{itemMovimiento.usuario?.nombreCompleto}</p>
                <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>
                    {fechaFormateada} hs · {itemMovimiento.metodopago?.nombre} · {itemMovimiento.tipoVenta}
                </p>
            </div>
            <div className="text-end">
                <p className="mb-0 fw-500">${itemMovimiento.monto}</p>
                <span className={`badge bg-${colorEstado[itemMovimiento.estado]}`} style={{ fontSize: '11px' }}>
                    {itemMovimiento.estado}
                </span>
            </div>
        </div>
    );
};

export default ItemHistorial;