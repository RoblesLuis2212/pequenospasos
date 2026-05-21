import FormularioContacto from "./components/Contacto/FormularioContacto"
import HeroSection from "./components/HeroSection/HeroSection"
import Menu from "./components/Menu"
import ContainerProductos from "./components/Productos/ContainerProductos"
import Tratamientos from "./components/Tratamientos/Tratamientos"
import Footer from "./components/Footer/Footer"
import { Routes, Route } from "react-router-dom"
import Registro from "./components/Usuario/Registro"
import Turnos from "./components/Turnos/Turnos"
import FormularioPacientes from "./components/Pacientes/FormularioPacientes";
import { useEffect, useState } from "react"
import TurnosPaciente from "./components/Turnos/TurnosPaciente"
import SolicitarRecuperacion from "./components/Usuario/SolicitarRecuperacion"
import ConfirmacionCorreo from "./components/Usuario/ConfirmacionCorreo"
import RestablecerContrasena from "./components/Usuario/RestablecerContrasena"
import CambiarContrasena from "./components/Usuario/CambiarContrasena"
import Carrito from "./components/Carrito/Carrito"
import { listarProductosAPI, listarProductosInicioAPI } from "./helpers/queries"
import Tienda from "./components/Tienda/Tienda"
import Compras from "./components/Compras/Compras"
import Administrador from "./components/Admin/Administrador"
import HistorialVentas from "./components/Admin/HistorialVentas"
import FichaMedicaPaciente from "./components/Admin/FichaMedicaPaciente"

function App() {
  //verificamos si hay datos de usuario guardados en el session storage
  const sesionUsuario = JSON.parse(sessionStorage.getItem("usuarioKey")) || {};
  //los datos obtenidos se guardan en el estado del componente
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);
  //el useEffect verifica un cambio en el estado del componente al iniciar sesion y guarda los datos de la misma en el session storage
  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado])

  const [productos, setProductos] = useState([]);

  const obtenerProductosInicio = async () => {
    const respuesta = await listarProductosInicioAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setProductos(datos);
    }
  }

  useEffect(() => {
    obtenerProductosInicio();
  }, [])

  //Aqui se realiza la configuracion de las diferentes rutas a las que se podra acceder en la pagina
  return (
    <>
      <header>
        <Menu setUsuarioLogueado={setUsuarioLogueado} usuarioLogueado={usuarioLogueado}></Menu>
      </header>
      <main>
        {/* Pagina principal */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection></HeroSection>
                <Tratamientos></Tratamientos>
                <ContainerProductos productos={productos}></ContainerProductos>
                <FormularioContacto></FormularioContacto>
              </>
            }
          >
          </Route>
          {/* Pagina de registro */}
          <Route
            path="/registro"
            element={
              <Registro></Registro>
            }
          >
          </Route>
          {/* Pagina de solicitud de turnos */}
          <Route
            path="/turnos/:id"
            element={
              <Turnos></Turnos>
            }
          >
          </Route>
          {/* Pagina de registro de pacientes */}
          <Route
            path="/registro-pacientes"
            element={
              <FormularioPacientes titulo="Datos del paciente"></FormularioPacientes>
            }
          >
          </Route>
          {/* Pagina para editar datos del paciente */}
          <Route path="/editar-paciente/:id"
            element={<FormularioPacientes titulo="Editar datos del paciente"></FormularioPacientes>}
          >
          </Route>
          <Route
            path="/mis-turnos"
            element={<TurnosPaciente></TurnosPaciente>}
          >
          </Route>
          <Route
            path="/solicitar-recuperacion"
            element={<SolicitarRecuperacion></SolicitarRecuperacion>}
          >
          </Route>
          <Route
            path="/confirmacion-correo"
            element={<ConfirmacionCorreo></ConfirmacionCorreo>}
          >
          </Route>
          <Route
            path="/resetPassword"
            element={<RestablecerContrasena titulo="Nueva contraseña"></RestablecerContrasena>}
          >
          </Route>
          <Route
            path="/cambiar-contrasena"
            element={<CambiarContrasena></CambiarContrasena>}
          >
          </Route>
          <Route
            path="/carrito"
            element={<Carrito></Carrito>}
          >
          </Route>
          <Route
            path="/tienda"
            element={<Tienda></Tienda>}
          >
          </Route>
          <Route
            path="/mis-compras"
            element={<Compras></Compras>}
          >
          </Route>
          <Route
            path="/admin"
            element={<Administrador></Administrador>}
          >
          </Route>
          <Route
            path="/historial-ventas"
            element={<HistorialVentas></HistorialVentas>}
          >
          </Route>
          <Route
            path="/ficha-medica"
            element={<FichaMedicaPaciente></FichaMedicaPaciente>}
          >
          </Route>
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
