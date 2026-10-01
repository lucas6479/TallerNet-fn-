function VistaVehiculos() {
  return (
    <div className="pub-sc-col-35">
      <div>
        <div className="pub-sc-lbl">Ficha del vehículo</div>
        <div className="pub-sc-vcard">
          <div className="pub-sc-vplate">GHI 789</div>
          <div className="pub-sc-vmodel">Ford Ranger 2019 · Diesel</div>
          <div className="pub-sc-field">
            <span className="pub-sc-fk">Propietario</span>
            <span className="pub-sc-fv">Luis Pérez</span>
          </div>
          <div className="pub-sc-field">
            <span className="pub-sc-fk">Kilometraje</span>
            <span className="pub-sc-fv">98.400 km</span>
          </div>
          <div className="pub-sc-field">
            <span className="pub-sc-fk">Última visita</span>
            <span className="pub-sc-fv">15/08/2025</span>
          </div>
          <div className="pub-sc-field">
            <span className="pub-sc-fk">Sucursal</span>
            <span className="pub-sc-fv">Centro</span>
          </div>
          <div className="pub-sc-field">
            <span className="pub-sc-fk">Estado</span>
            <span className="pub-sc-fv">
              <span className="pub-sc-badge pub-sc-badge--warn">Esperando repuesto</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="pub-sc-lbl">Historial de servicios</div>
        <div className="pub-sc-hist">
          <span className="pub-sc-hist-date">Sep 2025</span>
          <span className="pub-sc-hist-text">Suspensión delantera — en proceso</span>
        </div>
        <div className="pub-sc-hist">
          <span className="pub-sc-hist-date">Ago 2025</span>
          <span className="pub-sc-hist-text">Cambio de aceite y filtros</span>
        </div>
        <div className="pub-sc-hist">
          <span className="pub-sc-hist-date">May 2025</span>
          <span className="pub-sc-hist-text">Frenos traseros — reemplazo pastillas</span>
        </div>
        <div className="pub-sc-hist">
          <span className="pub-sc-hist-date">Feb 2025</span>
          <span className="pub-sc-hist-text">Revisión general + correa distribución</span>
        </div>
        <div className="pub-sc-hist">
          <span className="pub-sc-hist-date">Oct 2024</span>
          <span className="pub-sc-hist-text">Cambio de aceite y filtro de aire</span>
        </div>
        <div className="pub-sc-hist">
          <span className="pub-sc-hist-date">Jun 2024</span>
          <span className="pub-sc-hist-text">Diagnóstico eléctrico — batería</span>
        </div>
      </div>
    </div>
  )
}

export default VistaVehiculos
