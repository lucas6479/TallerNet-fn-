import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import api from '../services/api'

function Sucursales() {
  const usuario = JSON.parse(localStorage.getItem('tallernet_usuario'))
  const esAdmin = usuario.rol === 'administrador'

  const [sucursales, setSucursales] = useState([])

  useEffect(() => {
    async function cargarDatos() {
      let res
      if (esAdmin) {
        res = await api.get('/sucursales')
        setSucursales(res.data)
      } else {
        // El encargado solo ve su propia sucursal
        res = await api.get(`/sucursales/${usuario.sucursalId}`)
        setSucursales([res.data])
      }
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
              <i className="bi bi-buildings"></i>
            </span>
            <div>
              <h1 className="h5 fw-semibold mb-0">Sucursales</h1>
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

        {/* Tabla de sucursales */}
        <div className="card">
          <div className="card-header py-3">
            <h2 className="h6 fw-semibold mb-0 text-white">
              <i className="bi bi-buildings me-2 text-primary"></i>
              {sucursales.length} sucursales registradas
            </h2>
          </div>
          <div className="table-responsive">
            <table className="table table-dark table-sm align-middle mb-0">
              <thead>
                <tr>
                  <th className="ps-3 py-3">Nombre</th>
                  <th className="py-3">Dirección</th>
                  <th className="py-3">Ciudad</th>
                  <th className="py-3">Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {sucursales.map(s => (
                  <tr key={s.id}>
                    <td className="ps-3 fw-medium">{s.nombre}</td>
                    <td className="text-secondary">{s.direccion}</td>
                    <td>{s.ciudad}</td>
                    <td className="text-secondary">{s.telefono}</td>
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

export default Sucursales
