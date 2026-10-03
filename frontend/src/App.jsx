import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import ProblemaCotidiano from './components/ProblemaCotidiano'
import ComoFunciona      from './components/ComoFunciona'
import FlujoDeTrabajo    from './components/FlujoDeTrabajo'
import RedDeSucursales   from './components/RedDeSucursales'
import FAQ               from './components/FAQ'
import Demo              from './components/Demo'

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
      </main>
    </>
  )
}

export default App
