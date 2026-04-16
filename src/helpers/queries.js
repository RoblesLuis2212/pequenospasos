import { get } from "react-hook-form";
import { data } from "react-router-dom";

const usuariosBackend = import.meta.env.VITE_API_USUARIOS;
const pacientesBackend = import.meta.env.VITE_API_PACIENTES;
const turnosBackend = import.meta.env.VITE_API_TURNOS;
const productosBackend = import.meta.env.VITE_API_PRODUCTOS;

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

export const registroPacientes = async (paciente) => {
  try {
    const respuesta = await fetch(pacientesBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(paciente),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const reservarTurno = async (paciente) => {
  try {
    const respuesta = await fetch(turnosBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(paciente),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const obtenerUsuarioIDApi = async (id, token) => {
  try {
    const respuesta = await fetch(`${usuariosBackend}/${id}`, {
      method: "GET",
      headers: {
        "x-token": token,
      },
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const obtenerPacienteIDAPI = async (id) => {
  try {
    const respuesta = await fetch(`${pacientesBackend}/${id}`, {
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const actualizarDatosPaciente = async (id, usuario) => {
  try {
    const respuesta = await fetch(`${pacientesBackend}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const solicitarTurnoAPI = async (datos) => {
  try {
    const respuesta = await fetch(turnosBackend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(datos),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const listarTurnos = async () => {
  try {
    const respuesta = await fetch(turnosBackend, {
      method: "GET",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const pacientesconTurnos = async (id) => {
  try {
    const sesionUsuario = JSON.parse(sessionStorage.getItem("usuarioKey"));
    const respuesta = await fetch(
      `${turnosBackend}/turnos-usuario/${sesionUsuario.usuario.id}`,
      {
        method: "GET",
        headers: {
          "x-token": sesionUsuario.token,
        },
      },
    );
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const cambiarEstadoTurnoPaciente = async (id, nuevoEstado) => {
  try {
    const respuesta = await fetch(`${turnosBackend}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify({ estado: nuevoEstado }),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const solicitarRecuperacionPassword = async (email) => {
  try {
    const respuesta = await fetch(`${usuariosBackend}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const restablecerPassword = async (token, nuevaPassword) => {
  try {
    const respuesta = await fetch(`${usuariosBackend}/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, nuevaPassword }),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const cambiarContrasena = async (data) => {
  try {
    const respuesta = await fetch(`${usuariosBackend}/cambiar-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(data),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const actualizarDatosUsuario = async (id, datos) => {
  try {
    const respuesta = await fetch(`${usuariosBackend}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify(datos),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const listarProductosAPI = async () => {
  try {
    const respuesta = await fetch(productosBackend);
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const listarProductosInicioAPI = async () => {
  try {
    const respuesta = await fetch(`${productosBackend}/inicio`);
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const paginacion = async (pagina = 1) => {
  try {
    const respuesta = await fetch(
      `${productosBackend}/paginado?page=${pagina}&limit=8`,
    );
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const filtrarProductosAPI = async (categoria = "", pagina = 1) => {
  const respuesta = await fetch(
    `${productosBackend}/filtro?categoria=${categoria}&page=${pagina}&limit=8`,
  );
  return respuesta;
};

export const buscarProductoAPI = async (nombre, pagina = 1) => {
  const respuesta = await fetch(
    `${productosBackend}/buscar?nombre=${nombre}&page=${pagina}&limit=8`,
  );
  return respuesta;
};
