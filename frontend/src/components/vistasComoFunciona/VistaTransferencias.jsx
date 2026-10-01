function VistaTransferencias() {
  return (
    <>
      <div className="pub-sc-lbl">Transferencia #T-039 · Estado actual</div>
      <div className="pub-sc-pipe d-flex align-items-start">
        <div className="pub-sc-pipe-step pub-sc-pipe-step--done d-flex flex-column align-items-center">
          <div className="pub-sc-pipe-dot pub-sc-pipe-dot--done d-flex align-items-center justify-content-center position-relative">
            <i className="bi bi-check"></i>
          </div>
          <div className="pub-sc-pipe-lbl pub-sc-pipe-lbl--done">Solicitud</div>
        </div>
        <div className="pub-sc-pipe-step pub-sc-pipe-step--done d-flex flex-column align-items-center">
          <div className="pub-sc-pipe-dot pub-sc-pipe-dot--done d-flex align-items-center justify-content-center position-relative">
            <i className="bi bi-check"></i>
          </div>
          <div className="pub-sc-pipe-lbl pub-sc-pipe-lbl--done">Aprobada</div>
        </div>
        <div className="pub-sc-pipe-step d-flex flex-column align-items-center">
          <div className="pub-sc-pipe-dot pub-sc-pipe-dot--now d-flex align-items-center justify-content-center position-relative">
            <i className="bi bi-arrow-right"></i>
          </div>
          <div className="pub-sc-pipe-lbl pub-sc-pipe-lbl--now">En envío</div>
        </div>
        <div className="pub-sc-pipe-step d-flex flex-column align-items-center">
          <div className="pub-sc-pipe-dot d-flex align-items-center justify-content-center position-relative"></div>
          <div className="pub-sc-pipe-lbl">Recepción</div>
        </div>
      </div>

      <div className="pub-sc-lbl">Todas las transferencias</div>
      <div className="pub-sc-table">
        <div className="pub-sc-thead">
          <span className="pub-sc-cs">ID</span>
          <span className="pub-sc-cx">Producto</span>
          <span className="pub-sc-cs">Origen</span>
          <span className="pub-sc-cs">Destino</span>
          <span className="pub-sc-cm">Estado</span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#T-037</span>
          <span className="pub-sc-cx">Filtro de aceite (×5)</span>
          <span className="pub-sc-cs pub-mock-muted">Sur</span>
          <span className="pub-sc-cs pub-mock-muted">Centro</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--ok">Recibida</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#T-038</span>
          <span className="pub-sc-cx">Pastillas Bosch (×4)</span>
          <span className="pub-sc-cs pub-mock-muted">Centro</span>
          <span className="pub-sc-cs pub-mock-muted">Norte</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--ok">Recibida</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#T-039</span>
          <span className="pub-sc-cx">Amortiguadores (×2)</span>
          <span className="pub-sc-cs pub-mock-muted">Sur</span>
          <span className="pub-sc-cs pub-mock-muted">Norte</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--blue">En envío</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#T-040</span>
          <span className="pub-sc-cx">Correa distribución (×3)</span>
          <span className="pub-sc-cs pub-mock-muted">Norte</span>
          <span className="pub-sc-cs pub-mock-muted">Sur</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--muted">Solicitada</span></span>
        </div>
      </div>
    </>
  )
}

export default VistaTransferencias
