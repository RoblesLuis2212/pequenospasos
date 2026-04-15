import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const Search = () => {
    return (
        <Form className='mt-md-3 mt-0'>
            <Form.Group className="mb-3">
                <div className='d-flex'>
                    <Form.Control className='input-pildora input-search' type="text" placeholder="ej: buscar producto..."
                    />
                </div>
            </Form.Group>
        </Form>
    );
};

export default Search;