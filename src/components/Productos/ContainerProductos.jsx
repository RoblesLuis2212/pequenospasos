import CardProducto from "./CardProducto";
import "./Productos.css";

const ContainerProductos = ({ productos }) => {
    return (
        <section className='container-fluid bg-container py-3'>
            <h3 className='text-center titulo-tienda mt-3'>Nuestra Tienda</h3>
            <p className='text-muted text-center mt-2'>Herramientas profesionales para continuar la terapia en casa de forma divertida</p>
            <div className="row">
                {productos.map((itemProducto) => (
                    <div className="col-12 col-md-6 col-lg-3 d-flex" key={itemProducto.idProducto}>
                        <CardProducto itemProducto={itemProducto} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContainerProductos;