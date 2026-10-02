import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import ProblemaCotidiano from './components/ProblemaCotidiano'
import ComoFunciona      from './components/ComoFunciona'
import FlujoDeTrabajo    from './components/FlujoDeTrabajo'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemaCotidiano />
        <ComoFunciona />
        <FlujoDeTrabajo />
      </main>
    </>
  )
}

export default App
