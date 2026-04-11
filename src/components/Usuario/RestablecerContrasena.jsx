import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const RestablecerContrasena = () => {

    const { register, handleSubmit, formState: { errors }, reset, clearErrors, watch } = useForm();
    const password = watch("password", "");

    const postValidaciones = (data) => {
        console.log(data);
    }

    const calcularFuerza = (password) => {
        if (!password) return { nivel: 0, texto: '', color: '' };

        let puntos = 0;
        if (password.length >= 8) puntos++;
        if (/[A-Z]/.test(password)) puntos++;
        if (/[0-9]/.test(password)) puntos++;
        if (/[^A-Za-z0-9]/.test(password)) puntos++;

        const niveles = [
            { nivel: 0, texto: '', color: '' },
            { nivel: 1, texto: 'Débil', color: '#e53935' },
            { nivel: 2, texto: 'Media', color: '#f57f17' },
            { nivel: 3, texto: 'Buena', color: '#7cb342' },
            { nivel: 4, texto: 'Fuerte', color: '#2e7d32' },
        ];

        return niveles[puntos];
    };

    const fuerza = calcularFuerza(password);

    return (
        <section className='container-fluid recuperar-container'>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="recuperar-card">
                        <div className="recuperar-icono d-flex justify-content-center"><i className="bi bi-lock-fill"></i></div>
                        <h4 className='titulo text-center'>Nueva contraseña</h4>
                        <p className='text-muted text-center'>Elige una contraseña segura para tu cuenta.</p>
                        <div>
                            <Form onSubmit={handleSubmit(postValidaciones)}>
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Nueva contraseña</Form.Label>
                                    <Form.Control className='custom-input' type="password" placeholder="Password"
                                        {...register("password", {
                                            required: "este campo es obligatorio"
                                        })}
                                    />
                                    <Form.Text className='text-danger'>
                                        {errors.password?.message}
                                    </Form.Text>
                                </Form.Group>
                                {password && (
                                    <>
                                        <div className="fuerza-texto">
                                            <span>Fuerza</span>
                                            <span style={{ color: fuerza.color, fontWeight: 500 }}>{fuerza.texto}</span>
                                        </div>
                                        <div className="fuerza-barra mb-3">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div
                                                    key={i}
                                                    className="fuerza-segmento"
                                                    style={{ background: i <= fuerza.nivel ? fuerza.color : '#e0e0e0' }}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                                <Form.Group className="mb-3">
                                    <Form.Label className='etiquetas'>Confirmar contraseña</Form.Label>
                                    <Form.Control className='custom-input' type="password" placeholder="Password"
                                        {...register("confirmarPassword", {
                                            required: "Este campo es obligatorio",
                                            validate: (valor) => valor === password || "Las contraseñas no coinciden"
                                        })}
                                    />
                                    <Form.Text className='text-danger'>
                                        {errors.confirmarPassword?.message}
                                    </Form.Text>
                                </Form.Group>
                                <Alert className='bg-alert'>
                                    <i className="bi bi-info-circle me-2"></i>
                                    Minimo 8 caracteres, una mayuscula, una minuscula ,un numero y un caracter especial.
                                </Alert>
                                <div className="d-flex flex column justify-content-center">
                                    <Button className='btn-principal' type="submit">
                                        Guardar nueva contraseña
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RestablecerContrasena;