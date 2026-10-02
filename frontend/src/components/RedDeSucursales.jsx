import { motion } from 'motion/react'

function RedDeSucursales() {
  return (
    <section id="sucursales" className="pub-section pub-screen pub-bg-a d-flex flex-column justify-content-center">
      <div className="container">

        {/* Header */}
        <motion.div
          className="row justify-content-center mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="col-lg-8 text-center">
            <span className="pub-section-eyebrow d-block">Diferencial principal</span>
            <h2 className="pub-section-title">Tu stock no termina en una sucursal.</h2>
            <p className="pub-section-sub mx-auto">
              Antes de llamar a un proveedor, TallerNet te muestra si ese repuesto ya está
              disponible en otra sucursal de tu empresa.
            </p>
          </div>
        </motion.div>

        {/* Red de sucursales */}
        <motion.div
          className="row align-items-center gx-0 gy-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
        >

          {/* Sucursal Norte */}
          <div className="col-lg-3">
            <div className="pub-branch-card">
              <div className="pub-branch-head d-flex align-items-center">
                <div className="pub-branch-ico d-flex align-items-center justify-content-center flex-shrink-0">
                  <i className="bi bi-building" aria-hidden="true"></i>
                </div>
                <span className="pub-branch-name">Sucursal Norte</span>
              </div>
              <div>
                <div className="pub-branch-stock-item d-flex align-items-center justify-content-between">
                  <span className="pub-branch-stock-name">Filtro de aceite</span>
                  <span className="pub-branch-stock-qty pub-branch-stock-qty--ok">× 5</span>
                </div>
                <div className="pub-branch-stock-item d-flex align-items-center justify-content-between">
                  <span className="pub-branch-stock-name">Bujía NGK</span>
                  <span className="pub-branch-stock-qty">× 12</span>
                </div>
                <div className="pub-branch-stock-item d-flex align-items-center justify-content-between">
                  <span className="pub-branch-stock-name">Correa de distribución</span>
                  <span className="pub-branch-stock-qty">× 3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Conector */}
          <div className="col-lg-1 d-none d-lg-flex align-items-center px-2">
            <div className="pub-suc-conn-line"></div>
          </div>

          {/* TallerNet Hub */}
          <div className="col-lg-4">
            <div className="pub-hub-card">
              <div className="pub-hub-brand d-flex align-items-center gap-2">
                <i className="bi bi-hdd-network pub-hub-brand-ico" aria-hidden="true"></i>
                <span className="pub-hub-brand-name">TallerNet</span>
                <span className="pub-hub-brand-sub ms-auto">Stock conectado</span>
              </div>
              <div className="pub-hub-query mb-2">
                <div className="pub-hub-query-label">Buscando en la red</div>
                <div className="pub-hub-query-term d-flex align-items-center gap-2">
                  <i className="bi bi-search" aria-hidden="true"></i> Filtro de aceite
                </div>
              </div>
              <div className="pub-hub-result">
                <div className="pub-hub-result-status d-flex align-items-center">
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i> Encontrado
                </div>
                <div className="pub-hub-result-detail">Sucursal Norte · 5 unidades</div>
                <div className="pub-hub-result-meta">Disponible para transferencia</div>
                <div className="pub-hub-action d-inline-flex align-items-center">
                  <i className="bi bi-send" aria-hidden="true"></i> Solicitar transferencia
                </div>
              </div>
            </div>
          </div>

          {/* Conector */}
          <div className="col-lg-1 d-none d-lg-flex align-items-center px-2">
            <div className="pub-suc-conn-line"></div>
          </div>

          {/* Sucursal Centro (activa) */}
          <div className="col-lg-3">
            <div className="pub-branch-card pub-branch-card--active">
              <div className="pub-branch-head d-flex align-items-center">
                <div className="pub-branch-ico d-flex align-items-center justify-content-center flex-shrink-0">
                  <i className="bi bi-building" aria-hidden="true"></i>
                </div>
                <span className="pub-branch-name">Sucursal Centro</span>
                <span className="pub-branch-badge">Activo</span>
              </div>
              <div>
                <div className="pub-branch-stock-item d-flex align-items-center justify-content-between">
                  <span className="pub-branch-stock-name">Filtro de aceite</span>
                  <span className="pub-branch-stock-qty pub-branch-stock-qty--out">Sin stock</span>
                </div>
                <div className="pub-branch-stock-item d-flex align-items-center justify-content-between">
                  <span className="pub-branch-stock-name">Bujía NGK</span>
                  <span className="pub-branch-stock-qty">× 4</span>
                </div>
                <div className="pub-branch-stock-item d-flex align-items-center justify-content-between">
                  <span className="pub-branch-stock-name">Pastilla de freno</span>
                  <span className="pub-branch-stock-qty">× 2</span>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Flujo de transferencia */}
        <div className="pub-xfer d-flex align-items-start">
          <div className="pub-xfer-step d-flex flex-column align-items-center text-center position-relative">
            <div className="pub-xfer-dot d-flex align-items-center justify-content-center position-relative mb-2">
              <i className="bi bi-send" aria-hidden="true"></i>
            </div>
            <span className="pub-xfer-label">Solicitud</span>
          </div>
          <div className="pub-xfer-step d-flex flex-column align-items-center text-center position-relative">
            <div className="pub-xfer-dot d-flex align-items-center justify-content-center position-relative mb-2">
              <i className="bi bi-check2" aria-hidden="true"></i>
            </div>
            <span className="pub-xfer-label">Aprobación</span>
          </div>
          <div className="pub-xfer-step d-flex flex-column align-items-center text-center position-relative">
            <div className="pub-xfer-dot d-flex align-items-center justify-content-center position-relative mb-2">
              <i className="bi bi-truck" aria-hidden="true"></i>
            </div>
            <span className="pub-xfer-label">Envío</span>
          </div>
          <div className="pub-xfer-step pub-xfer-step--done d-flex flex-column align-items-center text-center position-relative">
            <div className="pub-xfer-dot d-flex align-items-center justify-content-center position-relative mb-2">
              <i className="bi bi-box-seam" aria-hidden="true"></i>
            </div>
            <span className="pub-xfer-label">Recepción</span>
          </div>
        </div>

        {/* Nota al pie */}
        <div className="text-center mt-4">
          <p className="pub-suc-footnote">
            Al recepcionar, el stock de ambas sucursales se actualiza automáticamente.
          </p>
        </div>

      </div>
    </section>
  )
}

export default RedDeSucursales
