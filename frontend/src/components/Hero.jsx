import { motion } from 'motion/react'
import AsistenteHero from './AsistenteHero'

function Hero() {
  return (
    <section id="inicio" className="pub-hero d-flex flex-column overflow-hidden">
      <div className="container d-flex flex-column justify-content-between">

        <div className="row align-items-center pub-hero-row g-5">

          {/* Copy */}
          <motion.div
            className="col-lg-5 pub-hero-copy d-flex flex-column justify-content-center text-center text-lg-start align-items-center align-items-lg-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <p className="pub-hero-eyebrow">TALLERNET · GESTIÓN CONECTADA</p>
            <h1 className="pub-hero-title">
              Todo tu taller. Una sola operación.
            </h1>
            <p className="pub-hero-sub mx-auto mx-lg-0">
              Vehículos, órdenes, repuestos y sucursales conectados en un mismo lugar.
            </p>
            <p className="pub-hero-note mx-auto mx-lg-0">
              Sabé qué está pasando en cada taller sin depender de papeles, planillas o mensajes.
            </p>
            <div className="pub-hero-actions d-flex flex-wrap justify-content-center justify-content-lg-start mb-lg-0">
              <a href="#demo" className="btn-hero-primary">
                <i className="bi bi-arrow-right pub-nav-cta-arr-2" aria-hidden="true"></i>
                <span className="pub-nav-cta-text">Solicitar demo</span>
                <span className="pub-nav-cta-circle"></span>
                <i className="bi bi-arrow-right pub-nav-cta-arr-1" aria-hidden="true"></i>
              </a>
            </div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            className="col-lg-7 d-none d-sm-block"
            initial={{ opacity: 0, y: 22, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.6,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <div className="position-relative">
              <div className="pub-hero-mascot d-none d-lg-block">
                <AsistenteHero />
              </div>
            <div className="pub-mock">
              <div className="pub-mock-chrome">
                <div className="pub-mock-dots">
                  <span className="pub-mock-dot"></span>
                  <span className="pub-mock-dot"></span>
                  <span className="pub-mock-dot"></span>
                </div>
                <span className="pub-mock-chrome-title">TallerNet · Dashboard</span>
              </div>
              <div className="pub-mock-body">
                <div className="pub-mock-kpis">
                  <div className="pub-mock-kpi">
                    <div className="pub-mock-kpi-val">12</div>
                    <div className="pub-mock-kpi-label">En taller</div>
                  </div>
                  <div className="pub-mock-kpi">
                    <div className="pub-mock-kpi-val">9</div>
                    <div className="pub-mock-kpi-label">Órdenes activas</div>
                  </div>
                  <div className="pub-mock-kpi pub-mock-kpi--warn">
                    <div className="pub-mock-kpi-val">3</div>
                    <div className="pub-mock-kpi-label">Stock bajo</div>
                  </div>
                  <div className="pub-mock-kpi">
                    <div className="pub-mock-kpi-val">2</div>
                    <div className="pub-mock-kpi-label">Transferencias pend.</div>
                  </div>
                </div>

                <div className="pub-mock-section-label">Vehículos activos</div>

                <div className="pub-mock-table">
                  <div className="pub-mock-thead">
                    <span>Patente</span>
                    <span>Vehículo</span>
                    <span>Estado</span>
                    <span>Mecánico</span>
                  </div>
                  <div className="pub-mock-row">
                    <span className="pub-mock-plate">ABC 123</span>
                    <span>Toyota Corolla</span>
                    <span><span className="pub-mock-badge pub-mock-badge--repair">En reparación</span></span>
                    <span className="pub-mock-muted">M. García</span>
                  </div>
                  <div className="pub-mock-row">
                    <span className="pub-mock-plate">DEF 456</span>
                    <span>VW Golf</span>
                    <span><span className="pub-mock-badge pub-mock-badge--done">Listo</span></span>
                    <span className="pub-mock-muted">A. Torres</span>
                  </div>
                  <div className="pub-mock-row">
                    <span className="pub-mock-plate">GHI 789</span>
                    <span>Ford Ranger</span>
                    <span><span className="pub-mock-badge pub-mock-badge--wait">Esperando repuesto</span></span>
                    <span className="pub-mock-muted">L. Pérez</span>
                  </div>
                  <div className="pub-mock-row">
                    <span className="pub-mock-plate">JKL 012</span>
                    <span>Renault Clio</span>
                    <span><span className="pub-mock-badge pub-mock-badge--repair">En reparación</span></span>
                    <span className="pub-mock-muted">P. Ramírez</span>
                  </div>
                  <div className="pub-mock-row">
                    <span className="pub-mock-plate">MNO 345</span>
                    <span>Honda Civic</span>
                    <span><span className="pub-mock-badge pub-mock-badge--done">Listo</span></span>
                    <span className="pub-mock-muted">N. López</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default Hero
