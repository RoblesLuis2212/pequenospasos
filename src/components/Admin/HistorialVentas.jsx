import React from 'react';
import { Form } from 'react-bootstrap';

const HistorialVentas = () => {
    return (
        <section className='container'>
            <div className="row">
                <div className="col-12">
                    <h4 className='text-center titulo mt-2'>Historial de ventas</h4>
                </div>
                <div className="col-12 col-md-6 col-lg-12">
                    <Form.Control type='date' className='input-custom custom-input'></Form.Control>
                </div>
                <div className="col-12 col-md-6 col-lg-12 mt-2">
                    <Form.Select className='input custom-input'>
                        <option value="">Todos los tipos</option>
                        <option value="CONSULTA">Consulta</option>
                        <option value="PRODUCTO">Producto</option>
                    </Form.Select>
                </div>
                <div className="col-12 col-md-6 col-lg-12 mt-2">
                    <Form.Select className='input custom-input'>
                        <option value="">Todos los metodos</option>
                        <option value="1">Efectivo</option>
                        <option value="2">Transferencia</option>
                        <option value="3">Credito</option>
                        <option value="4">Debito</option>
                    </Form.Select>
                </div>
            </div>
        </section>
    );
};

export default HistorialVentas;