import { Button, Badge } from "react-bootstrap";
import ModalDatosCompra from "../Carrito/ModalDatosCompra";
import { useEffect, useState } from "react";
import { listarComprasUsuario } from "../../helpers/queries";
import jsPDF from "jspdf";
import Compras from "./Compras";


const ItemCompras = ({ itemCompra }) => {
    //Formateo de la hora a un formato mas legible
    const fecha = new Date(itemCompra.fechaCompra);

    const opciones = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let texto = fecha.toLocaleDateString("es-AR", opciones).replace(",", "");

    const hora = fecha.getHours().toString().padStart(2, "0");
    const minutos = fecha.getMinutes().toString().padStart(2, "0");

    const fechaFinal = `${texto} ${hora}:${minutos} hs`;

    const getBadge = (estado) => {
        const colores = {
            PENDIENTE: 'warning',
            APROBADO: 'success',
            CANCELADO: 'danger',
            FINALIZADO: 'secondary'
        };
        return <Badge bg={colores[estado] ?? 'secondary'}>{estado}</Badge>;
    }

    const [showModalCompra, setShowModalCompra] = useState(true);

    const cerrarModalCompra = () => setShowModalCompra(false);
    const abrirModalCompra = () => setShowModalCompra(true);

    const usuario = JSON.parse(sessionStorage.getItem("usuarioKey")).usuario.nombre;

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
        doc.text(`${itemCompra.idVenta}`, 30, y);

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

        itemCompra.detalles?.forEach((item) => {
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
        doc.text(`Total: $${itemCompra.monto}`, margenIzquierdo, y);

        // Descargar
        doc.save(`compra_${itemCompra.idVenta}.pdf`);
    };

    return (
        <>
            <tr>
                <td className="text-center">{itemCompra.idVenta}</td>
                <td className="text-center">{fechaFinal}</td>
                <td className="text-center">{itemCompra.detalles.reduce((total, detalle) => total + detalle.cantidad, 0)}</td>
                <td className="text-center">{getBadge(itemCompra.estado)}</td>
                <td className="text-center">${itemCompra.monto}</td>
                <td>
                    <div className="d-flex justify-content-center">
                        <Button variant="success me-2" onClick={descargarPDF}><i className="bi bi-filetype-pdf"></i></Button>
                        <Button variant="danger me-2"><i className="bi bi-x-circle-fill"></i></Button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ItemCompras;