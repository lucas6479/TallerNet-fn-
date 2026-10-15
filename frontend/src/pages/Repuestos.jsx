import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import api from '../services/api'

function Repuestos() {
  const usuario = JSON.parse(localStorage.getItem('tallernet_usuario'))
  const esAdmin = usuario.rol === 'administrador'

  const [repuestos, setRepuestos] = useState([])
  const [sucursales, setSucursales] = useState([])

  useEffect(() => {
    async function cargarDatos() {
      let res
      if (esAdmin) {
        res = await api.get('/repuestos')
      } else {
        res = await api.get(`/repuestos?sucursalId=${usuario.sucursalId}`)
      }
      setRepuestos(res.data)

      const resSucursales = await api.get('/sucursales')
      setSucursales(resSucursales.data)
    }
    cargarDatos()
  }, [])

  return (
    <main className="min-vh-100 py-4">
      <div className="container">

        {/* Encabezado */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 pb-4 mb-4 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3">
            <span className="pub-brand-icon">
              <i className="bi bi-boxes"></i>
            </span>
            <div>
              <h1 className="h5 fw-semibold mb-0">Repuestos</h1>
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

        {/* Tabla de repuestos */}
        <div className="card">
          <div className="card-header py-3">
            <h2 className="h6 fw-semibold mb-0 text-white">
              <i className="bi bi-boxes me-2 text-primary"></i>
              {repuestos.length} repuestos registrados
            </h2>
          </div>
          <div className="table-responsive">
            <table className="table table-dark table-sm align-middle mb-0">
              <thead>
                <tr>
                  <th className="ps-3 py-3">Referencia</th>
                  <th className="py-3">Nombre</th>
                  <th className="py-3">Stock</th>
                  <th className="py-3">Stock mínimo</th>
                  <th className="py-3">Sucursal</th>
                </tr>
              </thead>
              <tbody>
                {repuestos.map(r => (
                  <tr key={r.id}>
                    <td className="ps-3">
                      <span className="badge bg-secondary bg-opacity-25 text-white text-opacity-75 font-monospace fw-bold rounded-1">
                        {r.referencia}
                      </span>
                    </td>
                    <td>{r.nombre}</td>
                    <td>{r.stock}</td>
                    <td className="text-secondary">{r.stockMinimo}</td>
                    <td className="text-secondary">
                      {sucursales.find(s => Number(s.id) === Number(r.sucursalId))?.nombre}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Repuestos
