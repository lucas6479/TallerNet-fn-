import Reveal from './ui/Reveal'
import { pasosFlujo } from '../data/flujoDeTrabajoData'

function FlujoDeTrabajo() {
  return (
    <section id="como-funciona" className="py-5 min-vh-100 d-flex flex-column  justify-content-center">
      <div className="container">

        <Reveal className="text-center mb-5" onScroll>
          <span className="small text-primary text-uppercase fw-medium">Flujo de trabajo</span>
          <h2 className="display-6 mb-3">De ingreso a entrega</h2>
          <p className="lead text-white text-opacity-50">El recorrido completo de una orden de trabajo.</p>
        </Reveal>

        <div className="row g-5 text-center">
          {pasosFlujo.map((step) => (
            <Reveal key={step.num} className="col-md-3" onScroll>
              <span className="fs-5 font-monospace text-primary">{step.num}</span>
              <div className="my-4">
                <span className="d-inline-flex align-items-center justify-content-center border border-primary border-opacity-25 rounded-circle p-3 lh-1">
                  <i className={`bi ${step.icon} fs-3 text-primary`} aria-hidden="true"></i>
                </span>
              </div>
              <h3 className="fs-6 mb-3 mt-4">{step.title}</h3>
              <p className="text-secondary">{step.text}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FlujoDeTrabajo
