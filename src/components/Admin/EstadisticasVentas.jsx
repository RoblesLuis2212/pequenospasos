import { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import './EstadisticasVentas.css';

const datosMock = {
    2026: [
        { mes: 'Ene', consultas: 85000, productos: 32000 },
        { mes: 'Feb', consultas: 92000, productos: 41000 },
        { mes: 'Mar', consultas: 110000, productos: 76000 },
        { mes: 'Abr', consultas: 78000, productos: 28000 },
        { mes: 'May', consultas: 95000, productos: 58000 },
        { mes: 'Jun', consultas: 0, productos: 0 },
        { mes: 'Jul', consultas: 0, productos: 0 },
        { mes: 'Ago', consultas: 0, productos: 0 },
        { mes: 'Sep', consultas: 0, productos: 0 },
        { mes: 'Oct', consultas: 0, productos: 0 },
        { mes: 'Nov', consultas: 0, productos: 0 },
        { mes: 'Dic', consultas: 0, productos: 0 },
    ],
    2025: [
        { mes: 'Ene', consultas: 70000, productos: 25000 },
        { mes: 'Feb', consultas: 80000, productos: 30000 },
        { mes: 'Mar', consultas: 95000, productos: 60000 },
        { mes: 'Abr', consultas: 65000, productos: 20000 },
        { mes: 'May', consultas: 88000, productos: 45000 },
        { mes: 'Jun', consultas: 91000, productos: 38000 },
        { mes: 'Jul', consultas: 74000, productos: 29000 },
        { mes: 'Ago', consultas: 82000, productos: 33000 },
        { mes: 'Sep', consultas: 69000, productos: 27000 },
        { mes: 'Oct', consultas: 93000, productos: 41000 },
        { mes: 'Nov', consultas: 87000, productos: 36000 },
        { mes: 'Dic', consultas: 105000, productos: 55000 },
    ],
};

const ticksY = [0, 250000, 500000, 800000, 1000000];

const formatearY = (v) => {
    if (v === 0) return '$0';
    if (v === 1000000) return '$1M';
    return `$${v / 1000}k`;
};

const formatearTooltip = (value) =>
    `$${value.toLocaleString('es-AR')}`;

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="ev-tooltip">
            <p className="ev-tooltip-label">{label}</p>
            {payload.map((p) => (
                <p key={p.dataKey} style={{ color: p.fill, margin: '2px 0', fontSize: '13px' }}>
                    {p.name}: ${p.value.toLocaleString('es-AR')}
                </p>
            ))}
        </div>
    );
};

const EstadisticasVentas = () => {
    const [anio, setAnio] = useState(2026);

    const datos = datosMock[anio];

    const totalConsultas = datos.reduce((acc, d) => acc + d.consultas, 0);
    const totalProductos = datos.reduce((acc, d) => acc + d.productos, 0);
    const totalAnual = totalConsultas + totalProductos;

    const mejorMes = datos.reduce((prev, curr) =>
        (curr.consultas + curr.productos) > (prev.consultas + prev.productos) ? curr : prev
    );

    return (
        <div className="ev-wrapper">

            {/* Gráfico */}
            <div className="ev-chart-card">
                <p className="ev-chart-titulo">Recaudación mensual</p>
                <p className="ev-chart-sub">Consultas vs productos por mes</p>

                {/* Leyenda */}
                <div className="ev-leyenda">
                    <span className="ev-leyenda-item">
                        <span className="ev-leyenda-dot" style={{ background: '#534AB7' }}></span>
                        Consultas
                    </span>
                    <span className="ev-leyenda-item">
                        <span className="ev-leyenda-dot" style={{ background: '#1D9E75' }}></span>
                        Productos
                    </span>
                </div>

                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={datos} barCategoryGap="30%" barGap={4}>
                        <CartesianGrid vertical={false} stroke="rgba(0,0,0,0.05)" />
                        <XAxis
                            dataKey="mes"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12, fill: '#888' }}
                        />
                        <YAxis
                            ticks={ticksY}
                            domain={[0, 1000000]}
                            tickFormatter={formatearY}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 11, fill: '#888' }}
                            width={48}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
                        <Bar dataKey="consultas" name="Consultas" fill="#534AB7" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="productos" name="Productos" fill="#1D9E75" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default EstadisticasVentas;