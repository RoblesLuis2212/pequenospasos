import { Table, Button, InputGroup, Form, Badge } from 'react-bootstrap';
import './Productos.css';
import ModalProductos from './ModalProductos';
import { useState } from 'react';
import ItemProducto from './ItemProducto';

const ProductosTabs = ({ productos, setProductos, setModoModalProducto, modoModalProducto, setProductoSeleccionado, productoSeleccionado }) => {
    //Estado para abrir modal de crear y editar productos.
    const [showModalProductos, setShowModalProductos] = useState(false);

    const cerrarModalProductos = () => setShowModalProductos(false);
    const abrirModalProductos = () => {
        setModoModalProducto("crear");
        setShowModalProductos(true);
    }

    const abrirModalProductosEditar = (producto) => {
        setModoModalProducto("editar");
        setProductoSeleccionado(producto);
        setShowModalProductos(true);
    }

    const [busqueda, setBusqueda] = useState("");

    const productosFiltrados = productos.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.categoria.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        String(p.precio).includes(busqueda) || p.estado.toLowerCase().includes(busqueda.toLowerCase())
    )

    return (
        <>
            <div className="productos-wrapper">
                {/* Barra de acciones */}
                <div className="productos-toolbar">
                    <Button className="btn-agregar" onClick={abrirModalProductos}>+ Agregar producto</Button>
                    <InputGroup className="productos-search">
                        <Form.Control
                            placeholder="Buscar por nombre, categoría, último control, precio o estado..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        <Button className="btn-buscar">Buscar</Button>
                    </InputGroup>
                </div>

                {/* Tabla */}
                <h6 className="productos-titulo">Listado de productos</h6>
                <div className="tabla-wrapper">
                    <Table hover className="productos-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Categoría</th>
                                <th>Stock</th>
                                <th>Último control</th>
                                <th>Precio</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productosFiltrados.length > 0 ? (
                                productosFiltrados.map((itemProducto) => (
                                    <ItemProducto itemProducto={itemProducto} key={itemProducto.idProducto} abrirModalProductosEditar={abrirModalProductosEditar} setProductos={setProductos}></ItemProducto>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={9} className="text-center py-4 text-muted">
                                        No hay productos cargados
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
            <ModalProductos showModalProductos={showModalProductos} cerrarModalProductos={cerrarModalProductos} setProductos={setProductos} modoModalProductos={modoModalProducto} productoSeleccionado={productoSeleccionado}></ModalProductos>
        </>
    );
};

export default ProductosTabs;