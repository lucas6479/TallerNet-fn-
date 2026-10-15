import Reveal from './ui/Reveal'
import { problemData } from '../data/problemaCotidianoData'

function ProblemaCotidiano() {
  return (
    <section id="problema" className="min-vh-100 py-5 d-flex flex-column justify-content-center">
      <div className="container">

        <Reveal className="text-center mb-5" onScroll>
          <span className="small text-primary text-uppercase fw-medium mb-2">El problema cotidiano</span>
          <h2 className="display-6 mb-3">¿Todavía usás papel y llamadas?</h2>
          <p className="lead text-white text-opacity-50">
            Si te reconocés en alguna de estas situaciones, TallerNet es para vos.
          </p>
        </Reveal>

        <div className="row g-4 g-lg-5">
          {problemData.map((prob) => (
            <Reveal key={prob.num} className="col-lg-4" onScroll>
              <div className="card card-hover h-100 rounded-4 p-3">
                <div className="card-body p-4">
                  <div className="pub-prob-ico d-flex align-items-center justify-content-center mb-4">
                    <i className={`bi ${prob.icon}`} aria-hidden="true"></i>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-4">
                    <span className="font-monospace text-primary">{prob.num}</span>
                    <span className="small fw-medium text-uppercase text-white text-opacity-50">{prob.category}</span>
                  </div>
                  <h3 className="fw-semibold">{prob.title}</h3>
                  <ul className="list-group list-group-flush mt-4">
                    {prob.items.map((item, i) => (
                      <li key={i} className="list-group-item bg-transparent px-0 text-white text-opacity-50 d-flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ProblemaCotidiano
