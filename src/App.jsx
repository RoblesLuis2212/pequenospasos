import FormularioContacto from "./components/Contacto/FormularioContacto"
import HeroSection from "./components/HeroSection/HeroSection"
import Menu from "./components/Menu"
import ContainerProductos from "./components/Productos/ContainerProductos"
import Tratamientos from "./components/Tratamientos/Tratamientos"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <header>
        <Menu></Menu>
      </header>
      <main>
        <HeroSection></HeroSection>
        <Tratamientos></Tratamientos>
        <ContainerProductos></ContainerProductos>
        <FormularioContacto></FormularioContacto>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App
