import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';


const Paginado = ({ totalPaginas = 1, paginaActiva, setPaginaActiva }) => {
    let items = [];
    for (let numero = 1; numero <= totalPaginas; numero++) {
        items.push(
            <Pagination.Item
                key={numero}
                active={numero === paginaActiva}
                onClick={() => setPaginaActiva(numero)} // Cambia la página al hacer clic
            >
                {numero}
            </Pagination.Item>
        );
    }

    return (
        <div className='d-flex justify-content-center align-items-center mt-4'>
            <Pagination>
                <Pagination.Prev
                    onClick={() => paginaActiva > 1 && setPaginaActiva(paginaActiva - 1)}
                />

                {/* Renderizamos el array de items que generamos en el bucle */}
                {items}

                <Pagination.Next
                    onClick={() => paginaActiva < totalPaginas && setPaginaActiva(paginaActiva + 1)}
                />
            </Pagination>
        </div>
    );
};

export default Paginado;