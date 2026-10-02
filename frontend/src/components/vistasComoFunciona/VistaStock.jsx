function VistaStock() {
  return (
    <>
      <div className="pub-sc-lbl">Inventario por sucursal</div>
      <div className="pub-sc-table">
        <div className="pub-sc-thead">
          <span className="pub-sc-cx">Producto</span>
          <span className="pub-sc-cs">Sucursal</span>
          <span className="pub-sc-cn">Cant.</span>
          <span className="pub-sc-cn">Mínimo</span>
          <span className="pub-sc-cm">Estado</span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cx">Filtro de aceite estándar</span>
          <span className="pub-sc-cs pub-mock-muted">Centro</span>
          <span className="pub-sc-cn">2</span>
          <span className="pub-sc-cn pub-mock-muted">5</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--warn">Bajo</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cx">Pastillas de freno Bosch</span>
          <span className="pub-sc-cs pub-mock-muted">Norte</span>
          <span className="pub-sc-cn">1</span>
          <span className="pub-sc-cn pub-mock-muted">4</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--crit">Crítico</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cx">Aceite motor 5W-30</span>
          <span className="pub-sc-cs pub-mock-muted">Centro</span>
          <span className="pub-sc-cn">18</span>
          <span className="pub-sc-cn pub-mock-muted">10</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--ok">Normal</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cx">Correa de distribución</span>
          <span className="pub-sc-cs pub-mock-muted">Sur</span>
          <span className="pub-sc-cn">6</span>
          <span className="pub-sc-cn pub-mock-muted">3</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--ok">Normal</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cx">Amortiguadores delanteros</span>
          <span className="pub-sc-cs pub-mock-muted">Norte</span>
          <span className="pub-sc-cn">3</span>
          <span className="pub-sc-cn pub-mock-muted">4</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--warn">Bajo</span></span>
        </div>
        <div className="pub-sc-row">
          <span className="pub-sc-cx">Bujías NGK</span>
          <span className="pub-sc-cs pub-mock-muted">Sur</span>
          <span className="pub-sc-cn">24</span>
          <span className="pub-sc-cn pub-mock-muted">8</span>
          <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--ok">Normal</span></span>
        </div>
      </div>
    </>
  )
}

export default VistaStock
