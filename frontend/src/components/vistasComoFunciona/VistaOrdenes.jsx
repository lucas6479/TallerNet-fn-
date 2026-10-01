function VistaOrdenes() {
  return (
    <>
      <div className="pub-sc-lbl">Órdenes activas</div>
      <div className="pub-sc-table">
        <div className="pub-sc-thead">
          <span className="pub-sc-cs">N° OT</span>
          <span className="pub-sc-cn">Patente</span>
          <span className="pub-sc-cx">Descripción</span>
          <span className="pub-sc-cs">Mecánico</span>
          <span className="pub-sc-cm">Estado</span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#0143</span>
          <span className="pub-mock-plate pub-sc-cn">MNO 345</span>
          <span className="pub-sc-cx">Cambio de correa</span>
          <span className="pub-sc-cs pub-mock-muted">M. García</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--blue">En proceso</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#0144</span>
          <span className="pub-mock-plate pub-sc-cn">PQR 678</span>
          <span className="pub-sc-cx">Frenos traseros</span>
          <span className="pub-sc-cs pub-mock-muted">A. Torres</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--blue">En proceso</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#0145</span>
          <span className="pub-mock-plate pub-sc-cn">STU 901</span>
          <span className="pub-sc-cx">Diagnóstico eléctrico</span>
          <span className="pub-sc-cs pub-mock-muted">L. Pérez</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--warn">Esperando</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#0146</span>
          <span className="pub-mock-plate pub-sc-cn">VWX 234</span>
          <span className="pub-sc-cx">Cambio de aceite</span>
          <span className="pub-sc-cs pub-mock-muted">P. Ramírez</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--ok">Listo</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#0147</span>
          <span className="pub-mock-plate pub-sc-cn">YZA 567</span>
          <span className="pub-sc-cx">Suspensión delantera</span>
          <span className="pub-sc-cs pub-mock-muted">M. García</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--blue">En proceso</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cs pub-mock-muted">#0148</span>
          <span className="pub-mock-plate pub-sc-cn">BCD 890</span>
          <span className="pub-sc-cx">Embrague</span>
          <span className="pub-sc-cs pub-mock-muted">A. Torres</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--muted">Presupuesto</span></span>
        </div>
      </div>
    </>
  )
}

export default VistaOrdenes
