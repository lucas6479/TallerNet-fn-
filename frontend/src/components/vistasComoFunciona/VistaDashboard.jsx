function VistaDashboard() {
  return (
    <>
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

      <div className="pub-sc-two-col">
        <div>
          <div className="pub-sc-lbl">Últimas órdenes</div>
          <div className="pub-sc-table">
            <div className="pub-sc-thead">
              <span className="pub-sc-cn">Patente</span>
              <span className="pub-sc-cx">Servicio</span>
              <span className="pub-sc-cm">Estado</span>
            </div>
            <div className="pub-sc-row">
              <span className="pub-mock-plate pub-sc-cn">ABC 123</span>
              <span className="pub-sc-cx">Cambio de aceite</span>
              <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--ok">Listo</span></span>
            </div>
            <div className="pub-sc-row">
              <span className="pub-mock-plate pub-sc-cn">DEF 456</span>
              <span className="pub-sc-cx">Frenos delanteros</span>
              <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--blue">En proceso</span></span>
            </div>
            <div className="pub-sc-row">
              <span className="pub-mock-plate pub-sc-cn">GHI 789</span>
              <span className="pub-sc-cx">Suspensión</span>
              <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--warn">Esperando</span></span>
            </div>
            <div className="pub-sc-row">
              <span className="pub-mock-plate pub-sc-cn">JKL 012</span>
              <span className="pub-sc-cx">Diagnóstico</span>
              <span className="pub-sc-cm"><span className="pub-sc-badge pub-sc-badge--blue">En proceso</span></span>
            </div>
          </div>
        </div>
        <div>
          <div className="pub-sc-lbl">Actividad reciente</div>
          <div className="pub-sc-hist">
            <span className="pub-sc-hist-date">hace 5 min</span>
            <span className="pub-sc-hist-text">Orden #0142 cerrada — Toyota Corolla</span>
          </div>
          <div className="pub-sc-hist">
            <span className="pub-sc-hist-date">hace 18 min</span>
            <span className="pub-sc-hist-text">Stock bajo: Filtro de aceite (Suc. Centro)</span>
          </div>
          <div className="pub-sc-hist">
            <span className="pub-sc-hist-date">hace 41 min</span>
            <span className="pub-sc-hist-text">Transferencia #T-038 aprobada</span>
          </div>
          <div className="pub-sc-hist">
            <span className="pub-sc-hist-date">hace 1 h</span>
            <span className="pub-sc-hist-text">Ingresó Ford Ranger — GHI 789</span>
          </div>
          <div className="pub-sc-hist">
            <span className="pub-sc-hist-date">hace 2 h</span>
            <span className="pub-sc-hist-text">Orden #0139 cerrada — VW Golf</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default VistaDashboard
