import { Table, Button, InputGroup, Form } from 'react-bootstrap';
import './Admin.css';
import ItemPedidos from './ItemPedidos';

const PedidosTabs = ({ pedidos, setPedidos }) => {
    return (
        <div className="admin-wrapper">
            <div className="admin-toolbar">
                <InputGroup className="pedidos-search">
                    <Form.Control
                        placeholder="Buscar por cliente, producto, estado..."
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
                            <th>Total</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos.length > 0 ? (
                            pedidos.map((itemPedido) => (
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