import CardProducto from "./CardProducto";
import "./Productos.css";

const ContainerProductos = () => {
    return (
        <section className='container-fluid bg-container py-3'>
            <h3 className='text-center titulo-tienda mt-3'>Nuestra Tienda</h3>
            <p className='text-muted text-center mt-2'>Herramientas profesionales para continuar la terapia en casa de forma divertida</p>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <CardProducto nombre={"Balde Bloque de Ladrillos"} imagen={"https://tribilinbb.com.ar/wp-content/uploads/2021/05/LADRILLLOS-DURAVIT-10.jpg"} precio={20000}></CardProducto>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <CardProducto nombre={"Domino juego de mesa"} imagen={"https://http2.mlstatic.com/D_656188-MLA98308042610_112025-C.jpg"} precio={20000}></CardProducto>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <CardProducto nombre={"Rompecabezas"} imagen={"https://http2.mlstatic.com/D_Q_NP_2X_738370-CBT105104496309_012026-P.webp"} precio={15000}></CardProducto>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <CardProducto nombre={"Cartas UNO"} imagen={"https://acdn-us.mitiendanube.com/stores/001/910/805/products/uno-fe16f218cb4721b1b117418347419949-1024-1024.webp"} precio={20000}></CardProducto>
                </div>
            </div>
        </section>
    );
};

export default ContainerProductos;