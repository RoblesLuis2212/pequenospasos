import TablaProductos from "./TablaProductos";
import "./Carrito.css";
import CardResumen from "./CardResumen";
import ContainerProductosRecomendados from "./ContainerProductosRecomendados";

const Carrito = () => {
    return (
        <>
            <section className='container mt-3'>
                <h4 className="titulo">Tu carrito de compras</h4>
                <div className="row g-4">
                    <div className="col-12 col-md-8 col-md-8">
                        <TablaProductos></TablaProductos>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4">
                        <CardResumen></CardResumen>
                    </div>
                </div>
            </section>
            <ContainerProductosRecomendados></ContainerProductosRecomendados>
        </>
    );
};

export default Carrito;