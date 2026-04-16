import React, { useEffect, useState } from 'react';
import CardProducto from '../Productos/CardProducto';
import { obtenerProductosDestacadosAPI } from '../../helpers/queries';

const ContainerProductosRecomendados = () => {

    const [productosDestacados, setProductosDestacados] = useState([]);


    const obtenerProductosDestacados = async () => {
        const respuesta = await obtenerProductosDestacadosAPI();
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            setProductosDestacados(datos);
        }
    }

    useEffect(() => {
        obtenerProductosDestacados();
    }, [])

    return (
        <article className='container-fluid recuperar-container pt-2 mt-3 pb-3'>
            <h4 className='titulo text-center mt-3'>Productos recomendados</h4>
            <div className="row">
                {productosDestacados.map((itemProducto) => (
                    <div className="col-12 col-md-6 col-lg-3" key={itemProducto.idProducto}>
                        <CardProducto itemProducto={itemProducto}></CardProducto>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default ContainerProductosRecomendados;