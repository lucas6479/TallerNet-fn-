import Reveal from './ui/Reveal'
import { integrantes } from '../data/equipoData'

function Equipo() {
  return (
    <section id="equipo" className="min-vh-100 py-5 d-flex flex-column justify-content-center">
      <div className="container">

        <Reveal className="text-center mb-5" onScroll>
          <span className="small d-block text-primary text-uppercase fw-medium mb-2">El equipo</span>
          <h2 className="display-6 mb-3">El equipo detrás de TallerNet</h2>
          <p className="lead text-white text-opacity-50">Diseñado y desarrollado como parte del proyecto TallerNet.</p>
        </Reveal>

        <div className="row g-4 justify-content-center">
          {integrantes.map((integrante) => (
            <Reveal key={integrante.siglas} className="col-md-4" onScroll>
              <div className="card card-hover h-100 rounded-4 text-center p-5">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="pub-team-avatar d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 border border-primary border-opacity-25 font-monospace fw-semibold text-primary mb-4">
                    {integrante.siglas}
                  </div>
                  <h3 className="fs-5 fw-semibold mb-1">{integrante.nombre}</h3>
                  <p className="font-monospace text-secondary mb-0">{integrante.rol}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Equipo
