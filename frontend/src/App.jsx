import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import ProblemaCotidiano from './components/ProblemaCotidiano'
import ComoFunciona      from './components/ComoFunciona'
import FlujoDeTrabajo    from './components/FlujoDeTrabajo'
import RedDeSucursales   from './components/RedDeSucursales'
import FAQ               from './components/FAQ'
import Demo              from './components/Demo'
import Equipo            from './components/Equipo'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemaCotidiano />
        <ComoFunciona />
        <FlujoDeTrabajo />
        <RedDeSucursales />
        <FAQ />
        <Demo />
        <Equipo />
      </main>
    </>
  )
}

export default App
