import { motion } from 'motion/react'

function Demo() {
  return (
    <section id="demo" className="pub-cta pub-screen pub-bg-a d-flex flex-column justify-content-center position-relative overflow-hidden">
      <div className="container position-relative">
        <div className="row align-items-center g-5">

          {/* Intro */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="pub-section-eyebrow d-block">Solicitar demo</span>
            <h2 className="pub-cta-title">Probá TallerNet en tu taller</h2>
            <p className="pub-cta-sub">
              Completá el formulario y te contactamos para mostrarte cómo funciona.
            </p>
            <ul className="pub-demo-trust">
              <li className="d-flex align-items-start">
                <i className="bi bi-check2" aria-hidden="true"></i>
                Demo personalizada según tu taller
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check2" aria-hidden="true"></i>
                Sin compromiso de contratación
              </li>
              <li className="d-flex align-items-start">
                <i className="bi bi-check2" aria-hidden="true"></i>
                Empezás cuando estés listo
              </li>
            </ul>
          </motion.div>

          {/* Formulario */}
          <motion.div
            className="col-lg-6 offset-lg-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          >
            <div className="pub-demo-form">
              <div className="row g-3">

                <div className="col-12">
                  <label className="form-label" htmlFor="f-nombre">Nombre</label>
                  <input id="f-nombre" type="text" className="form-control" placeholder="Tu nombre" />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="f-taller">Nombre del taller</label>
                  <input id="f-taller" type="text" className="form-control" placeholder="Nombre de tu taller o empresa" />
                </div>

                <div className="col-sm-6">
                  <label className="form-label" htmlFor="f-sucursales">Cantidad de sucursales</label>
                  <select id="f-sucursales" className="form-select">
                    <option value="">Seleccioná…</option>
                    <option>1</option>
                    <option>2 a 5</option>
                    <option>6 o más</option>
                  </select>
                </div>

                <div className="col-sm-6">
                  <label className="form-label" htmlFor="f-telefono">Teléfono</label>
                  <input id="f-telefono" type="tel" className="form-control" placeholder="+54 11 …" />
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="f-email">Email</label>
                  <input id="f-email" type="email" className="form-control" placeholder="tu@email.com" />
                </div>

                <div className="col-12 pt-1">
                  <button type="button" className="pub-nav-cta pub-nav-cta--form w-100">
                    <i className="bi bi-arrow-right pub-nav-cta-arr-2" aria-hidden="true"></i>
                    <span className="pub-nav-cta-text">Solicitar demo</span>
                    <span className="pub-nav-cta-circle"></span>
                    <i className="bi bi-arrow-right pub-nav-cta-arr-1" aria-hidden="true"></i>
                  </button>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Demo
