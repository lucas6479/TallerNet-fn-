import Reveal from './ui/Reveal'

function Demo() {
  return (
    <section id="demo" className="min-vh-100 py-5 d-flex flex-column justify-content-center">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Intro */}
          <Reveal className="col-lg-5" onScroll>
            <span className="small text-primary text-uppercase fw-medium">Solicitar demo</span>
            <h2 className="display-6 mb-3">Probá TallerNet en tu taller</h2>
            <p className="lead text-white text-opacity-50">
              Completá el formulario y te contactamos para mostrarte cómo funciona.
            </p>
            <ul className="list-group list-group-flush mt-4">
              <li className="list-group-item d-flex align-items-start gap-2 bg-transparent border-secondary border-opacity-25 px-0 small text-secondary">
                <i className="bi bi-check2 text-primary mt-1" aria-hidden="true"></i>
                Demo personalizada según tu taller
              </li>
              <li className="list-group-item d-flex align-items-start gap-2 bg-transparent border-secondary border-opacity-25 px-0 small text-secondary">
                <i className="bi bi-check2 text-primary mt-1" aria-hidden="true"></i>
                Sin compromiso de contratación
              </li>
              <li className="list-group-item d-flex align-items-start gap-2 bg-transparent border-secondary border-opacity-25 px-0 small text-secondary">
                <i className="bi bi-check2 text-primary mt-1" aria-hidden="true"></i>
                Empezás cuando estés listo
              </li>
            </ul>
          </Reveal>

          {/* Formulario */}
          <Reveal className="col-lg-7" onScroll>
            <div className="card rounded-4 border border-secondary border-opacity-25">
              <div className="card-body p-4">
                <div className="row g-3">

                  <div className="col-12">
                    <label className="form-label fw-medium" htmlFor="f-nombre">Nombre</label>
                    <input id="f-nombre" type="text" className="form-control" placeholder="Tu nombre" />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-medium" htmlFor="f-taller">Nombre del taller</label>
                    <input id="f-taller" type="text" className="form-control" placeholder="Nombre de tu taller o empresa" />
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label fw-medium" htmlFor="f-sucursales">Cantidad de sucursales</label>
                    <select id="f-sucursales" className="form-select">
                      <option value="">Seleccioná…</option>
                      <option>1</option>
                      <option>2 a 5</option>
                      <option>6 o más</option>
                    </select>
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label fw-medium" htmlFor="f-telefono">Teléfono</label>
                    <input id="f-telefono" type="tel" className="form-control" placeholder="+54 11 …" />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-medium" htmlFor="f-email">Email</label>
                    <input id="f-email" type="email" className="form-control" placeholder="tu@email.com" />
                  </div>

                  <div className="col-12 pt-1">
                    <button type="submit" className="btn pub-demo-btn btn-lg w-100">
                      Solicitar demo
                      <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
                    </button>
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

export default Demo
