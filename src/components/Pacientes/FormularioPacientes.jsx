import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./FormularioPaciente.css";

const FormularioPacientes = () => {
    return (
        <section className='container-fluid contenedor-registro-pacientes form-paciente'>
            <h3 className='text-center mt-3 titulo-registro'>Datos del pacientes</h3>
            <p className='text-center text-muted'>Por favor complete el formulario con la siguiente informacion.</p>
            <div className="row">
                <div className="col-12">
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Nombre Completo</Form.Label>
                                    <Form.Control className='input-form custom-input' type="text" placeholder="ej: Juan Perez" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>DNI</Form.Label>
                                    <Form.Control className='input-form custom-input' type="text" placeholder="ej: 45789658" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Domicilio</Form.Label>
                                    <Form.Control className='input-form custom-input' type="text" placeholder="ej: España 1030" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Fecha de Nacimiento</Form.Label>
                                    <Form.Control className='input-form custom-input' type="date" placeholder="ej: España 1030" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </div>
                            <div className="col-md-12">
                                <Form.Group>
                                    <Form.Label className='etiquetas'>Obra Social</Form.Label>
                                    <Form.Select className='input-form custom-input'>
                                        <option>Seleccione una obra social</option>
                                        <option value="1">Subsidio</option>
                                        <option value="2">Soreme</option>
                                        <option value="3">San Nicolas</option>
                                        <option value="4">Swiss Medical</option>
                                        <option value="5">Ricardo Mora</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                        <Button className='btn-registro btn-principal mt-3' type="submit">
                            Guardar
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default FormularioPacientes;