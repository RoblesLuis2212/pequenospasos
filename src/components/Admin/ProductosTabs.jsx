import { Table, Button, InputGroup, Form, Badge } from 'react-bootstrap';
import './Productos.css';
import ModalProductos from './ModalProductos';
import { useState } from 'react';
import ItemProducto from './ItemProducto';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

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
    ).filter((p) => busqueda ? true : p.estado !== "INACTIVO").sort((a, b) => new Date(b.fechaCreacion) - new Date(a.fechaCreacion)).slice(0, 5)
    //Funcion para la exportacion de pdf
    const exportarPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text("Listado de productos", 14, 15);

        autoTable(doc, {
            startY: 25,
            head: [["#", "Nombre", "Categoría", "Stock", "Precio", "Estado"]],
            body: productosFiltrados.map((p) => [
                p.idProducto,
                p.nombre,
                p.categoria.nombre,
                p.stock,
                `$${p.precio}`,
                p.estado,
            ]),
            styles: { fontSize: 9 },
            headStyles: { fillColor: [109, 40, 217] }, // color violeta como tu UI
        });

        doc.save("productos.pdf");
    };

    const exportarExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const hoja = workbook.addWorksheet("Productos");

        // Ancho de columnas
        hoja.columns = [
            { header: "#", key: "id", width: 8 },
            { header: "Nombre", key: "nombre", width: 30 },
            { header: "Categoría", key: "categoria", width: 20 },
            { header: "Stock", key: "stock", width: 10 },
            { header: "Precio", key: "precio", width: 15 },
            { header: "Estado", key: "estado", width: 15 },
        ];

        // Estilo del encabezado
        hoja.getRow(1).eachCell((cell) => {
            cell.fill = {
                type: "pattern",
                pattern: "solid",
                fgColor: { argb: "FF6D28D9" }, // violeta
            };
            cell.font = { bold: true, color: { argb: "FFFFFFFF" }, size: 11 };
            cell.alignment = { horizontal: "center", vertical: "middle" };
            cell.border = {
                bottom: { style: "thin", color: { argb: "FF000000" } },
            };
        });
        hoja.getRow(1).height = 25;

        // Filas de datos
        productosFiltrados.forEach((p, index) => {
            const fila = hoja.addRow({
                id: p.idProducto,
                nombre: p.nombre,
                categoria: p.categoria.nombre,
                stock: p.stock,
                precio: p.precio,
                estado: p.estado,
            });

            // ✅ Si el stock es bajo, toda la fila en rojo claro
            const stockBajo = p.stock < 5;
            const colorFila = stockBajo ? "FFFEE2E2" : index % 2 === 0 ? "FFEDE9FE" : "FFFFFFFF";

            fila.eachCell((cell) => {
                cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: colorFila } };
                cell.alignment = { horizontal: "center", vertical: "middle" };
            });

            // ✅ La celda de stock en rojo y negrita si es bajo
            if (stockBajo) {
                const celdaStock = fila.getCell("stock");
                celdaStock.font = { bold: true, color: { argb: "FFDC2626" } };
            }

            // Color estado
            const celdaEstado = fila.getCell("estado");
            celdaEstado.font = {
                bold: true,
                color: { argb: p.estado === "DISPONIBLE" ? "FF16A34A" : "FFDC2626" },
            };

            fila.height = 20;
        });

        // Descargar
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "productos.xlsx");
    };

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
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <h6 className="productos-titulo">Listado de productos</h6>
                    <div className='d-flex gap-2'>
                        <Button variant='success' onClick={exportarExcel}>Exportar Excel</Button>
                        <Button variant='danger' onClick={exportarPDF}>Exportar PDF</Button>
                    </div>
                </div>
                <div className="tabla-wrapper">
                    <Table hover className="productos-table">
                        <thead>
                            <tr>
                                <th>ID</th>
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
            </div >
            <ModalProductos showModalProductos={showModalProductos} cerrarModalProductos={cerrarModalProductos} setProductos={setProductos} modoModalProductos={modoModalProducto} productoSeleccionado={productoSeleccionado}></ModalProductos>
        </>
    );
};

export default ProductosTabs;