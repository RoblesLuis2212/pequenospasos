import React from 'react';
import CardProducto from '../Productos/CardProducto';

const ContainerProductosRecomendados = () => {
    return (
        <article className='container'>
            <h4>Productos recomendados</h4>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3">
                    <CardProducto nombre={"Balde Bloque de Ladrillos"} imagen={"https://tribilinbb.com.ar/wp-content/uploads/2021/05/LADRILLLOS-DURAVIT-10.jpg"} precio={20000}></CardProducto>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <CardProducto nombre={"Balde Bloque de Ladrillos"} imagen={"https://tribilinbb.com.ar/wp-content/uploads/2021/05/LADRILLLOS-DURAVIT-10.jpg"} precio={20000}></CardProducto>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <CardProducto nombre={"Balde Bloque de Ladrillos"} imagen={"https://tribilinbb.com.ar/wp-content/uploads/2021/05/LADRILLLOS-DURAVIT-10.jpg"} precio={20000}></CardProducto>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <CardProducto nombre={"Balde Bloque de Ladrillos"} imagen={"https://tribilinbb.com.ar/wp-content/uploads/2021/05/LADRILLLOS-DURAVIT-10.jpg"} precio={20000}></CardProducto>
                </div>
            </div>
        </article>
    );
};

export default ContainerProductosRecomendados;