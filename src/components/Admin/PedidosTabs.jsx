import { Table, Button, InputGroup, Form } from 'react-bootstrap';
import './Admin.css';
import ItemPedidos from './ItemPedidos';
import { useState } from 'react';

const PedidosTabs = ({ pedidos, setPedidos }) => {
    const [busqueda, setBusqueda] = useState("");

    const pedidosFiltrados = pedidos.filter((p) =>
        p.nombreCompleto?.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.estado?.toLowerCase().includes(busqueda.toLowerCase()) ||
        String(p.idVenta).includes(busqueda)
    ).sort((a, b) => new Date(b.fechaCompra) - new Date(a.fechaCompra)).filter((p) => p.estado === "PENDIENTE" || p.estado === "APROBADO").slice(0, 5)

    return (
        <div className="admin-wrapper">
            <div className="admin-toolbar">
                <InputGroup className="pedidos-search">
                    <Form.Control
                        placeholder="Buscar por ID,cliente, estado..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}

                    />
                    <Button className="btn-buscar">Buscar</Button>
                </InputGroup>
            </div>

            <h6 className="admin-titulo">Listado de pedidos</h6>
            <div className="tabla-wrapper">
                <Table hover className="admin-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cliente</th>
                            <th>Productos</th>
                            <th>Fecha de compra</th>
                            <th>Total</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidosFiltrados.length > 0 ? (
                            pedidosFiltrados.map((itemPedido) => (
                                <ItemPedidos itemPedido={itemPedido} key={itemPedido.idVenta} setPedidos={setPedidos}></ItemPedidos>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="text-center py-4 text-muted">
                                    No hay pedidos cargados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default PedidosTabs;