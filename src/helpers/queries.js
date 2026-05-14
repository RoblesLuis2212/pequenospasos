import { act } from "react";
import { get } from "react-hook-form";
import { data } from "react-router-dom";

const usuariosBackend = import.meta.env.VITE_API_USUARIOS;
const pacientesBackend = import.meta.env.VITE_API_PACIENTES;
const turnosBackend = import.meta.env.VITE_API_TURNOS;
const productosBackend = import.meta.env.VITE_API_PRODUCTOS;
const carritoBackend = import.meta.env.VITE_API_CARRITO;
const ventasBackend = import.meta.env.VITE_API_VENTAS;
const cajaBackend = import.meta.env.VITE_API_CAJA;

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

export const obtenerProductosDestacadosAPI = async () => {
  try {
    const respuesta = await fetch(`${productosBackend}/destacados`);
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const obtenerCarritoUsuarioAPI = async () => {
  try {
    const respuesta = await fetch(`${carritoBackend}`, {
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

export const AgregarAlCarritoAPI = async (productoId, cantidad) => {
  try {
    const respuesta = await fetch(`${carritoBackend}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: JSON.stringify({ productoId, cantidad }),
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const eliminarProductoCarrito = async (idDetalleCarrito) => {
  try {
    const respuesta = await fetch(`${carritoBackend}/${idDetalleCarrito}`, {
      method: "DELETE",
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

export const finalizarCompraUsuario = async (id) => {
  try {
    const respuesta = await fetch(`${ventasBackend}/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const listarComprasUsuario = async () => {
  try {
    const respuesta = await fetch(`${ventasBackend}`, {
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

export const cancelarCompraUsuario = async (id) => {
  try {
    const respuesta = await fetch(`${ventasBackend}/${id}`, {
      method: "PATCH",
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

export const agregarProductosAPI = async (producto) => {
  try {
    const formData = new FormData();
    formData.append("nombre", producto.nombre);
    formData.append("precio", producto.precio);
    formData.append("stock", producto.stock);
    formData.append("descripcion", producto.descripcion);
    formData.append("imagen", producto.imagen);
    formData.append("codigoBarras", producto.codigoBarras);
    formData.append("categoriaId", producto.categoriaId);

    const respuesta = await fetch(productosBackend, {
      method: "POST",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: formData,
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const editarProductoAPI = async (id, productoActualizado) => {
  try {
    const formData = new FormData();
    formData.append("nombre", productoActualizado.nombre);
    formData.append("precio", productoActualizado.precio);
    formData.append("stock", productoActualizado.stock);
    formData.append("descripcion", productoActualizado.descripcion);
    formData.append("imagen", productoActualizado.imagen);
    formData.append("codigoBarras", productoActualizado.codigoBarras);
    formData.append("categoriaId", productoActualizado.categoriaId);

    const respuesta = await fetch(`${productosBackend}/${id}`, {
      method: "PUT",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
      },
      body: formData,
    });
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const cambiarEstadoProductoAPI = async (id, nuevoEstado) => {
  try {
    const respuesta = await fetch(`${productosBackend}/${id}`, {
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

export const listarPedidosAPI = async () => {
  try {
    const respuesta = await fetch(`${ventasBackend}/ventas-admin`, {
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

export const aprobarCompraAPI = async (id) => {
  try {
    const respuesta = await fetch(`${ventasBackend}/${id}/aprobar`, {
      method: "PUT",
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

export const cancelarCompraAdmin = async (id) => {
  try {
    const respuesta = await fetch(`${ventasBackend}/${id}/cancelar-admin`, {
      method: "PATCH",
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

export const listarPacientesAPI = async () => {
  try {
    const respuesta = await fetch(pacientesBackend, {
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

export const listarPacientesPadresAPI = async () => {
  try {
    const respuesta = await fetch(`${usuariosBackend}`, {
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

export const asignarTutorAPI = async (idPaciente, idUsuario) => {
  try {
    const respuesta = await fetch(
      `${pacientesBackend}/${idPaciente}/asignar-tutor`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-token": JSON.parse(sessionStorage.getItem("usuarioKey")).token,
        },
        body: JSON.stringify({ usuarioId: idUsuario }),
      },
    );
    return respuesta;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const obtenerCajaActivaAPI = async () => {
  try {
    const respuesta = await fetch(`${cajaBackend}`, {
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

export const registrarPagoProductoAPI = async (id, datos) => {
  try {
    const respuesta = await fetch(`${cajaBackend}/${id}/compra-pago`, {
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

export const abrirCajaAPI = async () => {
  try {
    const respuesta = await fetch(`${cajaBackend}`, {
      method: "POST",
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

export const cerrarCajaAPI = async (id) => {
  try {
    const respuesta = await fetch(`${cajaBackend}/${id}/cierre`, {
      method: "PATCH",
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

export const registrarPagoTurnoAPI = async (id, data) => {
  try {
    const respuesta = await fetch(`${cajaBackend}/${id}/turno-pago`, {
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
