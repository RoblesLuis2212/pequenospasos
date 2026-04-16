import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const Search = ({ setBusqueda }) => {
    return (
        <Form className='mt-md-3 mt-0' onSubmit={(e) => {
            e.preventDefault();
            setBusqueda(e.target.search.value)
        }}>
            <Form.Group className="mb-3">
                <div className='d-flex'>
                    <Form.Control className='input-pildora input-search bg-white py-2' type="text" placeholder="ej: buscar producto..."
                        name='search'
                    />
                </div>
            </Form.Group>
        </Form>
    );
};

export default Search;