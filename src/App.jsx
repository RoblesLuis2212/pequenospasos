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

function App() {


  const sesionUsuario = JSON.parse(sessionStorage.getItem("usuarioKey")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado])

  //Aqui se realiza la configuracion de las diferentes rutas a las que se podra acceder en la pagina
  return (
    <>
      <header>
        <Menu setUsuarioLogueado={setUsuarioLogueado}></Menu>
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
            path="/turnos"
            element={
              <Turnos></Turnos>
            }
          >
          </Route>
          {/* Pagina de registro de pacientes */}
          <Route
            path="/registro-pacientes"
            element={
              <FormularioPacientes></FormularioPacientes>
            }
          >
          </Route>
        </Routes>
        <Footer />
      </main>
    </>
  )
}

export default App
