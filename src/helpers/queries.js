import { get } from "react-hook-form";
import { data } from "react-router-dom";

const usuariosBackend = import.meta.env.VITE_API_USUARIOS;
const pacientesBackend = import.meta.env.VITE_API_PACIENTES;
const turnosBackend = import.meta.env.VITE_API_TURNOS;

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
