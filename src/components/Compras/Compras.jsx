import TablaCompras from "./TablaCompras";

const Compras = () => {
    return (
        <section className='container py-2'>
            <div className="row d-flex justify-content-center">
                <h4 className='titulo text-center mt-3'>Mis Compras</h4>
                <div className="col-12 tabla-container">
                    <TablaCompras></TablaCompras>
                </div>
            </div>
        </section>
    );
};

export default Compras;