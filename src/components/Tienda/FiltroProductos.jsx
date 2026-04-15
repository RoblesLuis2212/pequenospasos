import Form from 'react-bootstrap/Form';

const FiltroProductos = () => {
    return (
        <Form.Select className='filtro-select mt-0' aria-label="Default select example">
            <option value="">Ordernar por</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    );
};

export default FiltroProductos;