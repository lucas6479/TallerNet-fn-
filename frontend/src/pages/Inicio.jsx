import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProblemaCotidiano from '../components/ProblemaCotidiano'
import FlujoDeTrabajo from '../components/FlujoDeTrabajo'
import RedDeSucursales from '../components/RedDeSucursales'
import Demo from '../components/Demo'
import Equipo from '../components/Equipo'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import VolverArriba from '../components/VolverArriba'

function Inicio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemaCotidiano />
        <FlujoDeTrabajo />
        <RedDeSucursales />
        <Demo />
        <Equipo />
      </main>
      <Footer />
      <Chatbot />
      <VolverArriba />
    </>
  )
}

export default Inicio
