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

function App() {
  //verificamos si hay datos de usuario guardados en el session storage
  const sesionUsuario = JSON.parse(sessionStorage.getItem("usuarioKey")) || {};
  //los datos obtenidos se guardan en el estado del componente
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);
  //el useEffect verifica un cambio en el estado del componente al iniciar sesion y guarda los datos de la misma en el session storage
  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado])

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
                <ContainerProductos></ContainerProductos>
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
            element={<RestablecerContrasena></RestablecerContrasena>}
          >

          </Route>
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
