import AsistenteHero from './AsistenteHero'
import Reveal from './ui/Reveal'

function Hero() {
  return (
    <section id="inicio" className="min-vh-100 pt-2 pb-4 py-lg-5 d-flex align-items-start align-items-lg-center overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Copy */}
          <Reveal className="col-lg-5 text-center text-lg-start">
            <p className="small fw-medium text-uppercase text-primary mb-4">TALLERNET · GESTIÓN CONECTADA</p>
            <h1 className="display-5 fw-semibold lh-1 text-white mb-4">
              Todo tu taller. Una sola operación.
            </h1>
            <p className="text-white text-opacity-75 lh-lg mx-auto mx-lg-0 mb-3">
              Vehículos, órdenes, repuestos y sucursales conectados en un mismo lugar.
            </p>
            <p className="text-white text-opacity-50 lh-lg mx-auto mx-lg-0 mb-5">
              Sabé qué está pasando en cada taller sin depender de papeles, planillas o mensajes.
            </p>
            <div className="text-center text-lg-start mb-4 mb-lg-0">
              <a href="#demo" className="btn pub-demo-btn btn-lg">
                Solicitar demo
                <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
              </a>
            </div>
          </Reveal>

          {/* Dashboard mockup */}
          <Reveal className="col-lg-7 d-none d-sm-block">
            <div className="position-relative">
              <div className="pub-hero-mascot d-none d-lg-block">
                <AsistenteHero />
              </div>
              <div className="card-100 overflow-hidden rounded-3 border border-primary border-opacity-25 shadow-lg">

                {/* Chrome */}
                <div className="d-flex align-items-center gap-2 px-3 py-2 border-bottom border-secondary border-opacity-25">
                  <div className="d-flex gap-1 flex-shrink-0">
                    <span className="d-inline-block p-1 rounded-circle bg-secondary bg-opacity-50"></span>
                    <span className="d-inline-block p-1 rounded-circle bg-secondary bg-opacity-50"></span>
                    <span className="d-inline-block p-1 rounded-circle bg-secondary bg-opacity-50"></span>
                  </div>
                  <small className="text-secondary text-opacity-50 mx-auto">TallerNet · Dashboard</small>
                </div>

                {/* Body */}
                <div className="p-3">

                  {/* KPIs */}
                  <div className="row row-cols-4 g-2 mb-3">
                    <div className="col">
                      <div className="border border-secondary border-opacity-25 rounded-1 p-2">
                        <div className="fw-semibold text-white">12</div>
                        <div className="small text-secondary">En taller</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="border border-secondary border-opacity-25 rounded-1 p-2">
                        <div className="fw-semibold text-white">9</div>
                        <div className="small text-secondary">Órdenes activas</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="border border-warning border-opacity-25 rounded-1 p-2">
                        <div className="fw-semibold text-warning">3</div>
                        <div className="small text-secondary">Stock bajo</div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="border border-secondary border-opacity-25 rounded-1 p-2">
                        <div className="fw-semibold text-white">2</div>
                        <div className="small text-secondary">Transferencias pend.</div>
                      </div>
                    </div>
                  </div>

                  {/* Section label */}
                  <p className="small text-secondary text-uppercase fw-semibold mb-2">Vehículos activos</p>

                  {/* Tabla */}
                  <div className="table-responsive">
                    <table className="table table-dark table-sm align-middle mb-0">
                      <thead>
                        <tr>
                          <th>Patente</th>
                          <th>Vehículo</th>
                          <th>Estado</th>
                          <th>Mecánico</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><span className="badge bg-secondary bg-opacity-25 text-white text-opacity-75 font-monospace fw-bold rounded-1">ABC 123</span></td>
                          <td>Toyota Corolla</td>
                          <td><span className="badge rounded-pill bg-info bg-opacity-10 text-info border border-info border-opacity-25 fw-medium px-2 py-1">En reparación</span></td>
                          <td className="text-secondary">M. García</td>
                        </tr>
                        <tr>
                          <td><span className="badge bg-secondary bg-opacity-25 text-white text-opacity-75 font-monospace fw-bold rounded-1">DEF 456</span></td>
                          <td>Volkswagen Gol</td>
                          <td><span className="badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 fw-medium px-2 py-1">Listo</span></td>
                          <td className="text-secondary">A. Torres</td>
                        </tr>
                        <tr>
                          <td><span className="badge bg-secondary bg-opacity-25 text-white text-opacity-75 font-monospace fw-bold rounded-1">GHI 789</span></td>
                          <td>Ford Ranger</td>
                          <td><span className="badge rounded-pill bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 fw-medium px-2 py-1">Esperando repuesto</span></td>
                          <td className="text-secondary">L. Pérez</td>
                        </tr>
                        <tr>
                          <td><span className="badge bg-secondary bg-opacity-25 text-white text-opacity-75 font-monospace fw-bold rounded-1">JKL 012</span></td>
                          <td>Renault Clio</td>
                          <td><span className="badge rounded-pill bg-info bg-opacity-10 text-info border border-info border-opacity-25 fw-medium px-2 py-1">En reparación</span></td>
                          <td className="text-secondary">P. Ramírez</td>
                        </tr>
                        <tr>
                          <td><span className="badge bg-secondary bg-opacity-25 text-white text-opacity-75 font-monospace fw-bold rounded-1">MNO 345</span></td>
                          <td>Honda Civic</td>
                          <td><span className="badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 fw-medium px-2 py-1">Listo</span></td>
                          <td className="text-secondary">N. López</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}

export default Hero
