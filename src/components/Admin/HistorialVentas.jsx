import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import ItemMovimiento from './ItemMovimiento';
import EstadisticasVentas from './EstadisticasVentas';
import { HistorialVentasAPI, listarPedidosAPI } from '../../helpers/queries';

const HistorialVentas = () => {

    const [historial, setHistorial] = useState([]);

    const obtenerHistorialVenta = async () => {
        const respuesta = await HistorialVentasAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setHistorial(datos);
            console.log("Ventas: ", datos);
        }
    }

    useEffect(() => {
        obtenerHistorialVenta();
    }, [])

    const [paginaActual, setPaginaActual] = useState(1);
    const [filtroTipo, setFiltroTipo] = useState('');
    const [filtroMetodo, setFiltroMetodo] = useState('');
    const [filtroFecha, setFiltroFecha] = useState('');
    const [busqueda, setBusqueda] = useState('');

    const ventasFiltradas = historial.filter(v => {
        const coincideTipo = filtroTipo ? v.tipoVenta === filtroTipo : true

        const coincideMetodo = filtroMetodo ? v.metodoPagoId === Number(filtroMetodo) : true

        const fechaVenta = new Date(v.fechaCompra);
        const hoy = new Date();
        const coincideFecha = !filtroFecha ? true : filtroFecha === 'hoy' ? fechaVenta.toDateString() === hoy.toDateString() :
            filtroFecha === 'mes' ? fechaVenta.getMonth() === hoy.getMonth() && fechaVenta.getFullYear() === hoy.getFullYear() :
                filtroFecha === 'año' ? fechaVenta.getFullYear() === hoy.getFullYear() : true;

        const coincideBusqueda = busqueda ? v.turno?.paciente?.nombreCompleto.toLowerCase().includes(busqueda.toLocaleLowerCase()) : true


        return coincideTipo && coincideMetodo && coincideFecha && coincideBusqueda;
    })

    //Total recuadado por ventas
    const totalRecaudado = historial.reduce((acc, v) => acc + Number(v.monto), 0);
    const totalEfectivo = ventasFiltradas.filter(v => v.metodopago?.nombre === "EFECTIVO").reduce((acc, v) => acc + Number(v.monto), 0)
    const totalTransferencia = ventasFiltradas.filter(v => v.metodopago?.nombre === "TRANSFERENCIA").reduce((acc, v) => acc + Number(v.monto), 0)
    const totalDebito = ventasFiltradas.filter(v => v.metodopago?.nombre === "DEBITO").reduce((acc, v) => acc + Number(v.monto), 0);
    const totalCredito = ventasFiltradas.filter(v => v.metodopago?.nombre === "CREDITO").reduce((acc, v) => acc + Number(v.monto), 0);

    const cantidadEfectivo = ventasFiltradas.filter(v => v.metodopago?.nombre === "EFECTIVO").length;
    const cantidadTransferencia = ventasFiltradas.filter(v => v.metodopago?.nombre === "TRANSFERENCIA").length;
    const cantidadDebito = ventasFiltradas.filter(v => v.metodopago?.nombre === "DEBITO").length;
    const cantidadCredito = ventasFiltradas.filter(v => v.metodoPago?.nombre === "CREDITO").length;

    const datosPorMes = Array.from({ length: 12 }, (_, i) => {
        const ventasDelMes = historial.filter(v =>
            new Date(v.fechaCompra).getMonth() === i
        );
        return {
            mes: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'][i],
            consultas: ventasDelMes
                .filter(v => v.tipoVenta === 'CONSULTA')
                .reduce((acc, v) => acc + Number(v.monto), 0),
            productos: ventasDelMes
                .filter(v => v.tipoVenta === 'PRODUCTO')
                .reduce((acc, v) => acc + Number(v.monto), 0),
        };
    });


    return (
        <section className='container-fluid recuperar-container'>
            <div className="row">
                <div className="col-12">
                    <h4 className='text-center titulo mt-2'>Historial de ventas</h4>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                    <Form.Select type='date' className='input-custom custom-input' onChange={e => {
                        setFiltroFecha(e.target.value);
                        setPaginaActual(1);
                    }}>
                        <option value="">Todos</option>
                        <option value="hoy">Hoy</option>
                        <option value="mes">Mes</option>
                        <option value="año">Año</option>
                    </Form.Select>
                </div>
                <div className="col-12 col-md-6 col-lg-12 mt-2">
                    <Form.Select className='input custom-input' onChange={e => {
                        setFiltroTipo(e.target.value);
                        setPaginaActual(1);
                    }}>
                        <option value="">Todos los tipos</option>
                        <option value="CONSULTA">Consulta</option>
                        <option value="PRODUCTO">Producto</option>
                    </Form.Select>
                </div>
                <div className="col-12 col-md-6 col-lg-12 mt-2">
                    <Form.Select className='input custom-input' onChange={e => {
                        setFiltroMetodo(e.target.value);
                        setPaginaActual(1);
                    }}>
                        <option value="">Todos los metodos</option>
                        <option value="1">Efectivo</option>
                        <option value="2">Transferencia</option>
                        <option value="3">Credito</option>
                        <option value="4">Debito</option>
                    </Form.Select>
                </div>
                <div className="col-12 col-md-6 col-lg-12 mt-2">
                    <Form.Control className='input-custom custom-input' placeholder='buscar por paciente,padre' onChange={e => {
                        setBusqueda(e.target.value);
                        setPaginaActual(1);
                    }}></Form.Control>
                </div>
            </div>
            {/* Total de reacudacion por cada metodo de pago */}
            <div className="row g-3 mb-4 mt-2">
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Total recaudado</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${totalRecaudado}</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>10 transacciones</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Efectivo</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${totalEfectivo}</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{cantidadEfectivo} transacciones</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Transferencia</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${totalTransferencia}</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{cantidadTransferencia} transacciones</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Debito</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${totalDebito}</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{cantidadDebito} transacciones</p>
                    </div>
                </div>
                <div className="col">
                    <div className="p-3 rounded-3 bg-light">
                        <p className="titulo" style={{ fontSize: '13px' }}>Credito</p>
                        <p className="mb-0 fw-500" style={{ fontSize: '24px' }}>${totalCredito}</p>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{cantidadCredito} transacciones</p>
                    </div>
                </div>
                {/* Historial de movimientos */}
                <div className="container mt-4">
                    <div className="border rounded-3 p-3 bg-light">
                        <p className="titulo" style={{ fontSize: '15px' }}>Historial de ventas</p>
                        {ventasFiltradas.map((itemMovimiento, index) => (
                            <ItemMovimiento key={index} itemMovimiento={itemMovimiento} isLast={index === historial.length - 1}></ItemMovimiento>
                        ))}
                    </div>
                </div>
                {/* Estadisticas de ventas de productos vs consultas */}
                <div>
                    <EstadisticasVentas datos={datosPorMes}></EstadisticasVentas>
                </div>
            </div>
        </section>
    );
};

export default HistorialVentas;