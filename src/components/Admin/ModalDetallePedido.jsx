import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import jsPDF from 'jspdf';

const ModalDetallePedido = ({ modalDetallePedido, cerrarModalDetallePedido, itemPedido, fechaFinal }) => {

    const descargarPDF = () => {
        const doc = new jsPDF();

        const margenIzquierdo = 14;
        let y = 25;

        // Título
        doc.setFontSize(18);
        doc.text("Detalle de Compra", margenIzquierdo, y);

        y += 10;

        // ID
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("ID:", margenIzquierdo, y);
        doc.setFont("helvetica", "normal");
        doc.text(`${itemPedido.idVenta}`, 30, y);

        y += 8;

        // Nombre
        doc.setFont("helvetica", "bold");
        doc.text("Cliente:", margenIzquierdo, y);
        doc.setFont("helvetica", "normal");
        doc.text(`${itemPedido.usuario.nombreCompleto}`, 35, y);

        y += 8;

        // Fecha
        doc.setFont("helvetica", "bold");
        doc.text("Fecha:", margenIzquierdo, y);
        doc.setFont("helvetica", "normal");
        doc.text(`${fechaFinal}`, 35, y);

        y += 8;

        // Lugar de retiro
        doc.setFont("helvetica", "bold");
        doc.text("Retiro en:", margenIzquierdo, y);
        doc.setFont("helvetica", "normal");
        doc.text("Belgrano 625 Monteros", 40, y);

        y += 8;

        // Estado
        doc.setFont("helvetica", "bold");
        doc.text("Estado:", margenIzquierdo, y);
        doc.setFont("helvetica", "normal");
        doc.text(itemPedido.estado, 35, y);

        y += 12;

        // Productos
        doc.setFont("helvetica", "bold");
        doc.text("Productos:", margenIzquierdo, y);

        doc.setFont("helvetica", "normal");
        y += 8;

        itemPedido.detalles?.forEach((item) => {
            const nombre = item.producto?.nombre || "Sin nombre";
            const cantidad = item.cantidad;
            const precio = Number(item.producto?.precio_unitario || 0);
            const subtotal = cantidad * precio;

            const texto = `• ${nombre} x ${cantidad} = $${subtotal}`;

            const lineas = doc.splitTextToSize(texto, 180);
            doc.text(lineas, margenIzquierdo, y);

            y += lineas.length * 8;
        });

        // Total
        y += 10;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text(`Total: $${itemPedido.monto}`, margenIzquierdo, y);

        // Descargar
        doc.save(`compra_${itemPedido.idVenta}.pdf`);
    };


    return (
        <Modal show={modalDetallePedido} onHide={cerrarModalDetallePedido}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>Detalle pedido</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><strong>ID compra: </strong>{itemPedido.idVenta}</p>
                <p><strong>Nombre completo: </strong>{itemPedido.usuario.nombreCompleto}</p>
                <p><strong>Fecha de compra: </strong>{fechaFinal}</p>
                <p><strong>Retiro en: </strong>Belgrano 625 Monteros</p>
                <p><strong>Productos: </strong></p>
                <ul className="list-group ms-4 mt-0 mb-3">
                    {itemPedido.detalles?.map((item, index) => (
                        <li key={index} >{item.producto?.nombre} x {item.cantidad} = ${item.precio_unitario * item.cantidad}</li>
                    ))}
                </ul>
                <p><strong>Estado del pedido: </strong>{itemPedido.estado}</p>
                <p><strong>Total pedido: </strong>${itemPedido.monto}</p>
            </Modal.Body>
            <div className='d-flex justify-content-around'>
                <Button className='btn-secundario mb-3' onClick={descargarPDF}><i className="bi bi-filetype-pdf me-1"></i>Descargar PDF</Button>
                <Button className='btn-principal mb-3' onClick={cerrarModalDetallePedido}><i className="bi bi-patch-check-fill me-2"></i>Aceptar</Button>
            </div>
        </Modal>
    );
};

export default ModalDetallePedido;