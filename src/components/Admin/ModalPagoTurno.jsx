import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { listarTurnos, obtenerCajaActivaAPI, pacientesconTurnos, registrarPagoTurnoAPI } from '../../helpers/queries';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ModalPagoTurno = ({ showPagoTurno, abrirModalPagoTurno, cerrarModalPagoTurno, turnoSeleccionado, setTurnos, setCaja }) => {

    const { register, handleSubmit, reset, formState: { errors }, clearErrors, setValue } = useForm();

    const postValidaciones = async (data) => {
        const respuesta = await registrarPagoTurnoAPI(turnoSeleccionado, {
            metodoPagoId: Number(data.metodoPagoId),
            pagoCon: Number(data.pagoCon)
        });
        if (respuesta.status === 200) {
            const respuestaActualizada = await listarTurnos();
            if (respuestaActualizada.status === 200) {
                const datos = await respuestaActualizada.json();
                setTurnos(datos);
            }
            const respuestaCaja = await obtenerCajaActivaAPI();
            if (respuestaCaja.status === 200) {
                const datosActualizados = await respuestaCaja.json();
                setCaja(datosActualizados);
            }
            cerrarModalPagoTurno();
            Swal.fire({ title: "Pago registrado exitosamente!", icon: "success" });
            reset();
        } else if (respuesta.status === 400) {
            Swal.fire({ title: "El monto recibido no puede ser menor al precio de la consulta!", icon: "warning" });
        } else {
            Swal.fire({ title: "Ocurrio un error al registrar el pago del turno. Intentelo mas tarde!", icon: "error" });
        }
    }

    useEffect(() => {
        if (turnoSeleccionado) {
            setValue("turnoId", turnoSeleccionado);
        }
    }, [turnoSeleccionado])

    return (
        <Modal show={showPagoTurno} onHide={cerrarModalPagoTurno}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>Registrar pago turno</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(postValidaciones)}>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>ID Turno</Form.Label>
                        <Form.Control type="number" placeholder="ej: 2" className='custom-input input-form'
                            {...register("turnoId", {
                                required: "El ID del turno es un dato obligatorio"
                            })}
                            onChange={() => clearErrors("turnoId")}
                        />
                        <Form.Text className="text-danger">
                            {errors.turnoId?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Dinero recibido</Form.Label>
                        <Form.Control type="number" placeholder="ej: 200000" className='custom-input input-form'
                            {...register("pagoCon", {
                                required: "La cantidad de dinero recibida es un dato obligatorio"
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.pagoCon?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Descripcion</Form.Label>
                        <Form.Control type="text" placeholder="ej: el cliente abono el turno con efectivo" className='custom-input input-form'
                            {...register("descripcion", {
                            })}
                        />
                    </Form.Group>
                    <Form.Group>
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
                            {errors.metodoPago?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button className='btn-principal mt-3 w-100' type="submit">
                        Registrar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalPagoTurno;