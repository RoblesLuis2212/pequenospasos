import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { obtenerCajaActivaAPI, registrarPagoProductoAPI } from '../../helpers/queries';
import Swal from 'sweetalert2';

const ModalNuevaVenta = ({ showModalVenta, cerrarModalVenta, caja, setCaja, titulo }) => {

    const { register, handleSubmit, reset, formState: { errors }, clearErrors } = useForm();


    const postValidaciones = async (data) => {
        const respuesta = await registrarPagoProductoAPI(data.idVenta, {
            descripcion: data.descripcion,
            metodoPagoId: Number(data.metodoPagoId),
            pagoCon: Number(data.pagoCon)
        });
        if (respuesta.status === 200) {
            reset();
            Swal.fire({ title: "Pago registrado exitosamente!", icon: "success" });
            cerrarModalVenta();
            const respuestaActualizada = await obtenerCajaActivaAPI();
            if (respuesta.status === 200) {
                const datos = await respuestaActualizada.json();
                setCaja(datos);
            }
        }
    }


    return (
        <Modal show={showModalVenta} onHide={cerrarModalVenta}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>{titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(postValidaciones)}>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>ID Compra</Form.Label>
                        <Form.Control type="number" placeholder="ej: 1" className='custom-input input-form'
                            {...register("idVenta", {
                                required: "El ID de la compra es un dato obligatorio",
                            })}
                            onChange={() => clearErrors("idVenta")}
                        />
                        <Form.Text className="text-danger">
                            {errors.idVenta?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label className='etiquetas'>Dinero recibido</Form.Label>
                        <Form.Control type="number" placeholder='ej: 20000' className='custom-input input-form'
                            {...register("pagoCon", {
                                required: "La cantidad de dinero recibida es un dato obligatorio"
                            })}
                        />
                        <Form.Text className='text-danger'></Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="ej: el cliente pago con transferencia" className='custom-input input-form'
                            {...register("descripcion")}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Metodo de pago</Form.Label>
                        <Form.Select className='custom-input input-form'
                            {...register("metodoPagoId", {
                                required: "El metodo de pago es un dato obligatorio"
                            })}
                        >
                            <option value="">Seleccione un metodo de pago</option>
                            <option value="1">Efectivo</option>
                            <option value="2">Transferencia</option>
                            <option value="3">Debito</option>
                            <option value="4">Credito</option>
                        </Form.Select>
                        <Form.Text className="text-danger">
                            {errors.metodoPagoId?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button className='btn-principal w-100' type="submit">
                        Registrar venta
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalNuevaVenta;