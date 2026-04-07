const usuariosBackend = import.meta.env.VITE_API_USUARIOS;

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(usuariosBackend + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const registro = async (usuario) => {
  try {
    const respuesta = await fetch(usuariosBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};
