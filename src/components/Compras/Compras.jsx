import { useEffect, useState } from "react";
import { listarComprasUsuario } from "../../helpers/queries";
import TablaCompras from "./TablaCompras";

const Compras = () => {

    const [compras, setCompras] = useState([]);

    const obtenerComprasUsuario = async () => {
        const respuesta = await listarComprasUsuario();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setCompras(datos);
            console.log(datos);
        }
    }

    useEffect(() => {
        obtenerComprasUsuario();
    }, []);

    return (
        <section className='container py-2'>
            <div className="row d-flex justify-content-center">
                <h4 className='titulo text-center mt-3'>Mis Compras</h4>
                <div className="col-12 tabla-container">
                    <TablaCompras compras={compras}></TablaCompras>
                </div>
            </div>
        </section>
    );
};

export default Compras;