import HeroSection from "./components/HeroSection/HeroSection"
import Menu from "./components/Menu"
import Tratamientos from "./components/Tratamientos/Tratamientos"

function App() {

  return (
    <>
      <header>
        <Menu></Menu>
      </header>
      <main>
        <HeroSection></HeroSection>
        <Tratamientos></Tratamientos>
      </main>
    </>
  )
}

export default App
