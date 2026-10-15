import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import api from '../services/api'

function Ordenes() {
  const usuario = JSON.parse(localStorage.getItem('tallernet_usuario'))
  const esAdmin = usuario.rol === 'administrador'
  const [ordenes, setOrdenes] = useState([])

  useEffect(() => {
    async function listarOrdenes() {
      let res
      if (esAdmin) {
        res = await api.get('/ordenes')
      } else {
        res = await api.get(`/ordenes?sucursalId=${usuario.sucursalId}`)
      }
      setOrdenes(res.data)
    }

    listarOrdenes()
  }, [])

  return (
    <main className="min-vh-100 py-4">
      <div className="container">

        {/* Encabezado */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 pb-4 mb-4 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3">
            <span className="pub-brand-icon">
              <i className="bi bi-card-checklist"></i>
            </span>
            <div>
              <h1 className="h5 fw-semibold mb-0">Órdenes de trabajo</h1>
              <p className="text-secondary small mb-0">
                {esAdmin ? 'Todas las sucursales' : usuario.nombre}
              </p>
            </div>
          </div>
          <Link to="/sistema/dashboard" className="btn btn-outline-primary btn-sm">
            <i className="bi bi-arrow-left me-1" aria-hidden="true"></i>
            Volver al Dashboard
          </Link>
        </div>

        {/* Tabla de órdenes */}
        <div className="card">
          <div className="card-header py-3">
            <h2 className="h6 fw-semibold mb-0 text-white">
              <i className="bi bi-card-checklist me-2 text-primary"></i>
              {ordenes.length} órdenes registradas
            </h2>
          </div>
          <div className="table-responsive">
            <table className="table table-dark table-sm align-middle mb-0">
              <thead>
                <tr>
                  <th className="ps-3 py-3">Patente</th>
                  <th className="py-3">Vehículo</th>
                  <th className="py-3">Estado</th>
                  <th className="py-3">Sucursal</th>
                </tr>
              </thead>
              <tbody>
                {ordenes.map(orden => {
                  let badgeClase = ''
                  let badgeTexto = ''

                  if (orden.estado === 'activa') {
                    badgeClase = 'badge rounded-pill bg-info bg-opacity-10 text-info border border-info border-opacity-25 fw-medium px-2 py-1'
                    badgeTexto = 'Activa'
                  }
                  if (orden.estado === 'completada') {
                    badgeClase = 'badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 fw-medium px-2 py-1'
                    badgeTexto = 'Completada'
                  }
                  if (orden.estado === 'en_espera') {
                    badgeClase = 'badge rounded-pill bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 fw-medium px-2 py-1'
                    badgeTexto = 'En espera'
                  }

                  return (
                    <tr key={orden.id}>
                      <td className="ps-3">
                        <span className="badge bg-secondary bg-opacity-25 text-white text-opacity-75 font-monospace fw-bold rounded-1">
                          {orden.patente}
                        </span>
                      </td>
                      <td>{orden.vehiculo}</td>
                      <td><span className={badgeClase}>{badgeTexto}</span></td>
                      <td className="text-secondary">{orden.sucursal}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Ordenes
