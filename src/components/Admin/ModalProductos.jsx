import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import FormRange from 'react-bootstrap/esm/FormRange';
import { FormLabel } from 'react-bootstrap';
import { agregarProductosAPI, listarProductosAPI } from '../../helpers/queries';
import Swal from 'sweetalert2';

const ModalProductos = ({ cerrarModalProductos, showModalProductos, setProductos }) => {
    const { handleSubmit, register, formState: { errors }, reset, clearErrors } = useForm();

    const postValidaciones = async (data) => {
        //Se desestructura el objeto
        const productoForm = { ...data, imagen: data.imagen[0] }
        //Mandamos los datos a la API para guardar el producto
        const respuesta = await agregarProductosAPI(productoForm);
        //Si la respuesta es favorable
        if (respuesta.status === 201) {
            //Consultamos a la API de nuevo para tener los datos actualizados con el producto nuevo
            const respuestadatos = await listarProductosAPI();
            if (respuestadatos.status === 200) {
                const datos = await respuestadatos.json()
                setProductos(datos);//Luego actualizamos el estado local con los datos obtenidos
            }
            //Mensaje de exito
            Swal.fire({
                title: "Producto creado exitosamente!",
                icon: "success",
                draggable: true
            });
            cerrarModalProductos();
        }
    }


    return (
        <Modal show={showModalProductos} onHide={cerrarModalProductos}>
            <Modal.Header className='d-flex justify-content-center'>
                <Modal.Title className='titulo'>Agregar productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(postValidaciones)}>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Nombre</Form.Label>
                        <Form.Control className='custom-input input-form' type="text" placeholder="ej: naipes españoles"
                            {...register("nombre", {
                                required: "El nombre del producto es un dato obligatorio",
                                minLength: {
                                    value: 5,
                                    message: "El nombre del producto debe contener minimo 5 caracteres"
                                },
                                maxLength: {
                                    value: 100,
                                    message: "El nombre del producto debe contener maximo 100 caracteres"
                                }
                            })}
                            onChange={() => clearErrors("nombre")}
                        />
                        <Form.Text className="text-danger">
                            {errors.nombre?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Precio</Form.Label>
                        <Form.Control className='custom-input input-form' type="number" placeholder="ej: $1200"
                            {...register("precio", {
                                required: "El precio es un dato obligatorio",
                                min: {
                                    value: 100,
                                    message: "El precio minimo es 100"
                                },
                                max: {
                                    value: 1000000,
                                    message: "El precio maximo es 1.000.000"
                                }
                            })}
                            onChange={() => clearErrors("precio")}
                        />
                        <Form.Text className="text-danger">
                            {errors.precio?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Stock</Form.Label>
                        <Form.Control className='custom-input input-form' type="number" placeholder="ej: 200"
                            min={0}
                            {...register("stock", {
                                required: "El stock es un dato obligatorio",
                                min: {
                                    value: 0,
                                    message: "El stock no puede ser negativo"
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.stock?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Descripcion (opcional)</Form.Label>
                        <Form.Control className='custom-input input-form' type="text" placeholder="ej: 50 naipes para desafiar a tus amigos"
                            {...register("descripcion")}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Imagen</Form.Label>
                        <Form.Control type="file"
                            accept='image/*'
                            className='custom-input input-form'
                            {...register("imagen", {
                                required: "La imagen es un dato obligatorio"
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.imagen?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className='etiquetas'>Codigo de barras</Form.Label>
                        <Form.Control type="text"
                            placeholder='7896541236547'
                            className='custom-input input-form'
                            {...register("codigoBarras", {
                                required: "El codigo de barras es un dato obligatorio",
                                minLength: {
                                    value: 13,
                                    message: "El codigo de barras debe contener minimo 13 digitos"
                                },
                                maxLength: {
                                    value: "El codigo de barras debe contener maximo 13 digitos"
                                }
                            })}
                            onChange={() => clearErrors("codigoBarras")}
                        />
                        <Form.Text className="text-danger">
                            {errors.codigoBarras?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label className='etiquetas'>Categoria</Form.Label>
                        <Form.Select className='custom-input input-form'
                            {...register("categoriaId")}
                        >
                            <option value="">Seleccione una categoria</option>
                            <option value="1">Juegos de mesa</option>
                            <option value="2">Libros infantiles</option>
                            <option value="3">Material creativo</option>
                            <option value="4">Rompecabezas</option>
                            <option value="5">Juegos sensoriales</option>
                            <option value="7">Juguetes didacticos</option>
                        </Form.Select>
                        <Form.Text className="text-danger">
                            {errors.categoriaId?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button className='btn-principal w-100' type="submit">
                        Agregar
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalProductos;