function Footer() {
  return (
    <footer className="bg-black py-5">
      <div className="container">
        <div className="row g-5">

          {/* Marca */}
          <div className="col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="pub-brand-icon">
                <i className="bi bi-tools" aria-hidden="true"></i>
              </span>
              <span className="fs-5 fw-medium text-white">TallerNet</span>
            </div>
            <p className="small text-white text-opacity-50">
              Sistema web de gestión para talleres mecánicos. Una sucursal o varias.
            </p>
          </div>

          {/* Navegación */}
          <div className="col-lg-4">
            <p className="text-uppercase fw-medium text-secondary small mb-3">Navegación</p>
            <a href="#sucursales" className="d-block py-1 small link-light link-opacity-50 link-opacity-100-hover text-decoration-none">Red de sucursales</a>
            <a href="#como-funciona" className="d-block py-1 small link-light link-opacity-50 link-opacity-100-hover text-decoration-none">De ingreso a entrega</a>
            <a href="#equipo" className="d-block py-1 small link-light link-opacity-50 link-opacity-100-hover text-decoration-none">El equipo</a>
          </div>

          {/* Demo */}
          <div className="col-lg-4">
            <p className="text-uppercase fw-medium text-secondary small mb-3">Demo</p>
            <p className="small text-white text-opacity-50 mb-3">
              Pedí una demo personalizada y te mostramos cómo funciona.
            </p>
            <a href="#demo" className="d-inline-flex align-items-center gap-2 small fw-medium text-primary text-decoration-none">
              Solicitar demo <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

        </div>

        <hr className="border-secondary border-opacity-25 mt-5 mb-4" />

        <span className="small text-white text-opacity-25">© 2026 TallerNet · Todos los derechos reservados.</span>

      </div>
    </footer>
  )
}

export default Footer
