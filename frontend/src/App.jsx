import Navbar            from './components/Navbar'
import Hero              from './components/Hero'
import ProblemaCotidiano from './components/ProblemaCotidiano'
import ComoFunciona      from './components/ComoFunciona'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemaCotidiano />
        <ComoFunciona />
      </main>
    </>
  )
}

export default App
