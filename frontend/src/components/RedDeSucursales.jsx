import Reveal from './ui/Reveal'

function RedDeSucursales() {
  return (
    <section id="sucursales" className="min-vh-100 py-5 d-flex flex-column justify-content-center">
      <div className="container">

        {/* Header */}
        <Reveal className="row justify-content-center mb-5" onScroll>
          <div className="col-lg-8 text-center">
            <span className="small text-primary text-uppercase fw-medium">Diferencial principal</span>
            <h2 className="display-6 mb-3">Tu stock no termina en una sucursal.</h2>
            <p className="lead text-white text-opacity-50">
              Antes de llamar a un proveedor, TallerNet te muestra si ese repuesto ya está
              disponible en otra sucursal de tu empresa.
            </p>
          </div>
        </Reveal>

        {/* Red de sucursales */}
        <Reveal className="row align-items-center gx-0 gy-4" onScroll>

          {/* Sucursal Norte */}
          <div className="col-lg-3">
            <div className="card p-3 rounded-4">
              <div className="card-header d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-building text-primary" aria-hidden="true"></i>
                <span className="fw-semibold text-white small">Sucursal Norte</span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center justify-content-between py-2">
                  <span className="small">Filtro de aceite</span>
                  <span className="font-monospace small text-primary">× 5</span>
                </li>
                <li className="list-group-item d-flex align-items-center justify-content-between py-2">
                  <span className="small">Bujía NGK</span>
                  <span className="font-monospace small text-secondary">× 12</span>
                </li>
                <li className="list-group-item d-flex align-items-center justify-content-between py-2">
                  <span className="small">Correa de distribución</span>
                  <span className="font-monospace small text-secondary">× 3</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conector */}
          <div className="col-lg-1 d-none d-lg-flex align-items-center px-2">
            <hr className="w-100" />
          </div>

          {/* TallerNet Hub */}
          <div className="col-lg-4">
            <div className="card border border-secondary border-opacity-25 rounded-4">
              <div className="card-header d-flex align-items-center gap-2">
                <i className="bi bi-hdd-network text-primary" aria-hidden="true"></i>
                <span className="fw-bold small text-primary">TallerNet</span>
                <span className="text-secondary small ms-auto">Stock conectado</span>
              </div>
              <div className="card-body">
                <div className="border border-secondary border-opacity-25 rounded p-2 mb-2">
                  <div className="text-secondary text-uppercase d-block small fw-bold mb-1">Buscando en la red</div>
                  <div className="d-flex align-items-center gap-2 fw-semibold small">
                    <i className="bi bi-search text-secondary" aria-hidden="true"></i> Filtro de aceite
                  </div>
                </div>
                <div className="bg-primary bg-opacity-10 border border-primary border-opacity-25 rounded p-2">
                  <div className="d-flex align-items-center gap-1 text-primary small fw-bold text-uppercase mb-1">
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i> Encontrado
                  </div>
                  <div className="fw-medium small">Sucursal Norte · 5 unidades</div>
                  <div className="text-secondary small">Disponible para transferencia</div>
                  <div className="d-inline-flex align-items-center gap-1 text-secondary small mt-2">
                    <i className="bi bi-send text-primary" aria-hidden="true"></i> Solicitar transferencia
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conector */}
          <div className="col-lg-1 d-none d-lg-flex align-items-center px-2">
            <hr className="w-100" />
          </div>

          {/* Sucursal Centro (activa) */}
          <div className="col-lg-3">
            <div className="card h-100 border-primary border-opacity-25 bg-primary bg-opacity-10 rounded-4 p-3">
              <div className="card-header d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-building text-primary" aria-hidden="true"></i>
                <span className="fw-semibold small flex-grow-1 text-white">Sucursal Centro</span>
                <span className="badge text-bg-primary">Activo</span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center justify-content-between py-2">
                  <span className="small">Filtro de aceite</span>
                  <span className="font-monospace small text-danger text-opacity-75">Sin stock</span>
                </li>
                <li className="list-group-item d-flex align-items-center justify-content-between py-2">
                  <span className="small">Bujía NGK</span>
                  <span className="font-monospace small text-secondary">× 4</span>
                </li>
                <li className="list-group-item d-flex align-items-center justify-content-between py-2">
                  <span className="small">Pastilla de freno</span>
                  <span className="font-monospace small text-secondary">× 2</span>
                </li>
              </ul>
            </div>
          </div>

        </Reveal>

        {/* Flujo de transferencia */}
        <div className="row g-3 text-center mt-4">
          <div className="col-3">
            <div className="my-4">
              <span className="d-inline-flex align-items-center justify-content-center border border-primary border-opacity-25 rounded-circle p-3 lh-1">
                <i className="bi bi-send fs-5 text-primary" aria-hidden="true"></i>
              </span>
            </div>
            <div className="text-secondary small">Solicitud</div>
          </div>
          <div className="col-3">
            <div className="my-4">
              <span className="d-inline-flex align-items-center justify-content-center border border-primary border-opacity-25 rounded-circle p-3 lh-1">
                <i className="bi bi-check2 fs-5 text-primary" aria-hidden="true"></i>
              </span>
            </div>
            <div className="text-secondary small">Aprobación</div>
          </div>
          <div className="col-3">
            <div className="my-4">
              <span className="d-inline-flex align-items-center justify-content-center border border-primary border-opacity-25 rounded-circle p-3 lh-1">
                <i className="bi bi-truck fs-5 text-primary" aria-hidden="true"></i>
              </span>
            </div>
            <div className="text-secondary small">Envío</div>
          </div>
          <div className="col-3">
            <div className="my-4">
              <span className="d-inline-flex align-items-center justify-content-center border border-primary border-opacity-25 rounded-circle p-3 lh-1">
                <i className="bi bi-box-seam fs-5 text-primary" aria-hidden="true"></i>
              </span>
            </div>
            <div className="text-secondary small">Recepción</div>
          </div>
        </div>

        {/* Nota al pie */}
        <div className="text-center mt-5">
          <p className="text-secondary small">
            Al recepcionar, el stock de ambas sucursales se actualiza automáticamente.
          </p>
        </div>

      </div>
    </section>
  )
}

export default RedDeSucursales
