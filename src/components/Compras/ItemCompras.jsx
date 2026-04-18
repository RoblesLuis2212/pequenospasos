import { Button, Badge } from "react-bootstrap";
import ModalDatosCompra from "../Carrito/ModalDatosCompra";
import { useState } from "react";


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
                        <Button variant="success me-2"><i className="bi bi-filetype-pdf"></i></Button>
                        <Button variant="danger me-2"><i className="bi bi-x-circle-fill"></i></Button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default ItemCompras;