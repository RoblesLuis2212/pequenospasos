import Form from 'react-bootstrap/Form';

const FiltroProductos = ({ setCategoria }) => {
    return (
        <Form.Select className='filtro-select mt-0' aria-label="Default select example"
            onChange={(e) => setCategoria(e.target.value)}
        >
            <option value="">Ordernar por</option>
            <option value="1">Juegos de mesa</option>
            <option value="2">Libros Infantiles</option>
            <option value="3">Material Creativo</option>
            <option value="4">Rompecabezas</option>
            <option value="5">Juegos Sensoriales</option>
            <option value="7">Juegos Didacticos</option>
        </Form.Select>
    );
};

export default FiltroProductos;