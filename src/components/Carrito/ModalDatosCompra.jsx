import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import jsPDF from 'jspdf';
import { useNavigate } from 'react-router-dom';

const ModalDatosCompra = ({ showModalCompra, cerrarModalCompra, detalleCarrito, venta }) => {

    const usuario = JSON.parse(sessionStorage.getItem("usuarioKey")).usuario.nombre;
    const navigate = useNavigate();

    const fecha = new Date(venta.fechaCompra);

    const opciones = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let texto = fecha.toLocaleDateString("es-AR", opciones).replace(",", "");

    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");

    const fechaFinal = `${texto} ${hora}:${minutos} hs`;

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
        doc.text(`${venta.idVenta}`, 30, y);

        y += 8;

        // Nombre
        doc.setFont("helvetica", "bold");
        doc.text("Cliente:", margenIzquierdo, y);
        doc.setFont("helvetica", "normal");
        doc.text(`${usuario}`, 35, y);

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
        doc.text("PENDIENTE", 35, y);

        y += 12;

        // Productos
        doc.setFont("helvetica", "bold");
        doc.text("Productos:", margenIzquierdo, y);

        doc.setFont("helvetica", "normal");
        y += 8;

        detalleCarrito.carrito?.detalleCarritos?.forEach((item) => {
            const nombre = item.producto?.nombre || "Sin nombre";
            const cantidad = item.cantidad;
            const precio = Number(item.producto?.precio || 0);
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
        doc.text(`Total: $${detalleCarrito.total}`, margenIzquierdo, y);

        // Descargar
        doc.save(`compra_${venta.idVenta}.pdf`);
    };


    return (
        <Modal show={showModalCompra} onHide={cerrarModalCompra}>
            <Modal.Header className='d-flex justify-content-center align-items-center'>
                <h4 className='text-center titulo'>Reserva de pedido exitoso!</h4>
            </Modal.Header>
            <Modal.Body>
                <p><strong>ID compra: </strong>{venta.idVenta}</p>
                <p><strong>Nombre completo: </strong>{usuario}</p>
                <p><strong>Fecha de compra: </strong>{fechaFinal}</p>
                <p><strong>Retiro en: </strong>Belgrano 625 Monteros</p>
                <p><strong>Productos: </strong></p>
                <ul className='list-group ms-4 mt-0 mb-3'>
                    {detalleCarrito.carrito?.detalleCarritos?.map((item, index) => (
                        <li key={index}>{item.producto?.nombre} x {item.cantidad} = <strong>${item.producto?.precio * item.cantidad}</strong></li>
                    ))}
                </ul>
                <p><strong>Estado del pedido: </strong>PENDIENTE</p>
                <p><strong>Total Pedido: </strong>${detalleCarrito.total}</p>
            </Modal.Body>
            <div className="opciones d-flex justify-content-around">
                <Button className='btn-secundario mb-3' onClick={descargarPDF}><i className="bi bi-filetype-pdf me-2"></i>Descargar PDF</Button>
                <Button className='btn-principal mb-3' onClick={() => {
                    navigate("/mis-compras");
                    cerrarModalCompra();
                }}><i className="bi bi-patch-check-fill me-2"></i>Aceptar</Button>
            </div>
        </Modal>
    );
};

export default ModalDatosCompra;