function VistaSucursales() {
  return (
    <>
      <div className="pub-sc-lbl">Red de sucursales</div>

      <div className="pub-sc-branch d-flex align-items-center">
        <div className="pub-sc-branch-dot"></div>
        <div className="pub-sc-branch-info">
          <div className="pub-sc-branch-name">Sucursal Centro</div>
          <div className="pub-sc-branch-meta">Av. Rivadavia 2840 · Abierta</div>
        </div>
        <div className="pub-sc-branch-stats d-flex">
          <div className="pub-sc-branch-stat text-end">
            <div className="pub-sc-branch-stat-val">5</div>
            <div className="pub-sc-branch-stat-key">vehículos</div>
          </div>
          <div className="pub-sc-branch-stat text-end">
            <div className="pub-sc-branch-stat-val">4</div>
            <div className="pub-sc-branch-stat-key">órdenes</div>
          </div>
          <div className="pub-sc-branch-stat text-end">
            <div className="pub-sc-branch-stat-val">1</div>
            <div className="pub-sc-branch-stat-key">bajo stock</div>
          </div>
        </div>
      </div>

      <div className="pub-sc-branch d-flex align-items-center">
        <div className="pub-sc-branch-dot"></div>
        <div className="pub-sc-branch-info">
          <div className="pub-sc-branch-name">Sucursal Norte</div>
          <div className="pub-sc-branch-meta">Calle Las Heras 580 · Abierta</div>
        </div>
        <div className="pub-sc-branch-stats d-flex">
          <div className="pub-sc-branch-stat text-end">
            <div className="pub-sc-branch-stat-val">4</div>
            <div className="pub-sc-branch-stat-key">vehículos</div>
          </div>
          <div className="pub-sc-branch-stat text-end">
            <div className="pub-sc-branch-stat-val">3</div>
            <div className="pub-sc-branch-stat-key">órdenes</div>
          </div>
          <div className="pub-sc-branch-stat text-end">
            <div className="pub-sc-branch-stat-val">2</div>
            <div className="pub-sc-branch-stat-key">bajo stock</div>
          </div>
        </div>
      </div>

      <div className="pub-sc-branch d-flex align-items-center">
        <div className="pub-sc-branch-dot pub-sc-branch-dot--off"></div>
        <div className="pub-sc-branch-info">
          <div className="pub-sc-branch-name">Sucursal Sur</div>
          <div className="pub-sc-branch-meta">Ruta 8, km 12 · Cerrada</div>
        </div>
        <div className="pub-sc-branch-stats d-flex">
          <div className="pub-sc-branch-stat text-end">
            <div className="pub-sc-branch-stat-val">3</div>
            <div className="pub-sc-branch-stat-key">vehículos</div>
          </div>
          <div className="pub-sc-branch-stat text-end">
            <div className="pub-sc-branch-stat-val">2</div>
            <div className="pub-sc-branch-stat-key">órdenes</div>
          </div>
          <div className="pub-sc-branch-stat text-end">
            <div className="pub-sc-branch-stat-val">0</div>
            <div className="pub-sc-branch-stat-key">bajo stock</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VistaSucursales
