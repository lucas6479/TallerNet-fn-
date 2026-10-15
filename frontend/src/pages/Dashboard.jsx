import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router'
import Swal from 'sweetalert2'
import api from '../services/api'

function Dashboard() {
  const navigate = useNavigate()
  const usuario = JSON.parse(localStorage.getItem('tallernet_usuario'))

  // Estados para guardar los datos que vienen de la API
  const [vehiculos, setVehiculos] = useState([])
  const [ordenes, setOrdenes] = useState([])
  const [repuestos, setRepuestos] = useState([])
  const [sucursales, setSucursales] = useState([])
  const [error, setError] = useState(false)

  // Al cargar el componente, consulta la API según el rol del usuario
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        let resVehiculos, resOrdenes, resRepuestos, resSucursales

        if (usuario.rol === 'administrador') {
          // El administrador ve todos los datos de todas las sucursales
          resVehiculos = await api.get('/vehiculos')
          resOrdenes = await api.get('/ordenes')
          resRepuestos = await api.get('/repuestos')
          resSucursales = await api.get('/sucursales')
        } else {
          // Los demás roles solo ven los datos de su propia sucursal
          resVehiculos = await api.get(`/vehiculos?sucursalId=${usuario.sucursalId}`)
          resOrdenes = await api.get(`/ordenes?sucursalId=${usuario.sucursalId}`)
          resRepuestos = await api.get(`/repuestos?sucursalId=${usuario.sucursalId}`)
          resSucursales = await api.get(`/sucursales/${usuario.sucursalId}`)
        }

        setVehiculos(resVehiculos.data)
        setOrdenes(resOrdenes.data)
        setRepuestos(resRepuestos.data)
        setSucursales(usuario.rol === 'administrador' ? resSucursales.data : [resSucursales.data])
      } catch (error) {
        console.error(error)
        setError(true)
      }
    }

    obtenerDatos()
  }, [])

  // Muestra un diálogo de confirmación y luego elimina la sesión
  const handleCerrarSesion = async () => {
    const resultado = await Swal.fire({
      title: '¿Cerrar sesión?',
      text: 'Se eliminará tu sesión actual.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#22E58A',
      cancelButtonColor: '#6c757d',
      background: '#121614',
      color: '#ffffff'
    })

    if (resultado.isConfirmed) {
      localStorage.removeItem('tallernet_usuario')
      navigate('/login')
    }
  }

  // Si la API no responde, muestra un mensaje de error en lugar del dashboard
  if (error) {
    return (
      <main className="container py-5">
        <div className="alert alert-warning" role="alert">
          <i className="bi bi-exclamation-triangle me-2"></i>
          No se pudieron cargar los datos. Verificá que JSON Server esté activo en el puerto 3001.
        </div>
        <button className="btn btn-outline-primary btn-sm mt-2" onClick={handleCerrarSesion}>
          Cerrar sesión
        </button>
      </main>
    )
  }

  return (
    <main className="container-fluid p-4">
      {/* Encabezado: logo, nombre del usuario, sucursal y botón de cerrar sesión */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 pb-4 mb-4 border-bottom border-secondary border-opacity-25">
        <div className="d-flex align-items-center gap-3">
          <span className="pub-brand-icon">
            <i className="bi bi-tools"></i>
          </span>
          <div>
            <h1 className="h5 fw-semibold mb-0">TallerNet</h1>
            <p className="text-secondary small mb-0">
              Bienvenido/a, <span className="text-white">{usuario?.nombre}</span>
            </p>
            {usuario.rol !== 'administrador' && sucursales[0]?.nombre && (
              <p className="text-secondary small mb-0">
                <i className="bi bi-buildings me-1"></i>
                {sucursales[0].nombre}
              </p>
            )}
          </div>
        </div>
        <div className="d-flex align-items-center gap-2">
          <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25">
            {usuario?.rol}
          </span>
          <button className="btn btn-outline-danger btn-sm" onClick={handleCerrarSesion}>
            <i className="bi bi-box-arrow-right me-1" aria-hidden="true"></i>
            Cerrar sesión
          </button>
        </div>
      </div>

      {/* Indicadores KPI: cantidad de vehículos, órdenes, repuestos y sucursales */}
      <div className="row g-4 mb-4">

        <div className="col-sm-6 col-xl-3">
          <Link to="/sistema/vehiculos" className="text-decoration-none">
            <div className="card card-hover">
              <div className="card-body d-flex align-items-center gap-3">
                <span className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 lh-1 border border-primary border-opacity-25 ">
                  <i className="bi bi-car-front fs-5 text-primary"></i>
                </span>
                <div>
                  <p className="text-secondary small">Vehículos registrados</p>
                  <p className="fs-2 fw-bold mb-0">{vehiculos.length}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-6 col-xl-3">
          <Link to="/sistema/ordenes" className="text-decoration-none">
            <div className="card card-hover">
              <div className="card-body d-flex align-items-center gap-3">
                <span className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 lh-1 border border-primary border-opacity-25">
                  <i className="bi bi-card-checklist fs-5 text-primary"></i>
                </span>
                <div>
                  <p className="text-secondary small">Órdenes registradas</p>
                  <p className="fs-2 fw-bold mb-0">{ordenes.length}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-6 col-xl-3">
          <Link to="/sistema/repuestos" className="text-decoration-none">
            <div className="card card-hover">
              <div className="card-body d-flex align-items-center gap-3">
                <span className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 lh-1 border border-primary border-opacity-25">
                  <i className="bi bi-boxes fs-5 text-primary"></i>
                </span>
                <div>
                  <p className="text-secondary small">Repuestos registrados</p>
                  <p className="fs-2 fw-bold mb-0">{repuestos.length}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-6 col-xl-3">
          <Link to="/sistema/sucursales" className="text-decoration-none">
            <div className="card card-hover">
              <div className="card-body d-flex align-items-center gap-3">
                <span className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 lh-1 border border-primary border-opacity-25">
                  <i className="bi bi-buildings fs-5 text-primary"></i>
                </span>
                <div>
                  <p className="text-secondary small">Sucursales</p>
                  <p className="fs-2 fw-bold mb-0">{sucursales.length}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

      </div>

      {/* Botón para ir a la página de gestión de órdenes */}
      <div className="text-center my-4">
        <button className="btn btn-outline-success btn-lg px-5 rounded-2" onClick={() => navigate('/sistema/ordenes')}>
          <i className="bi bi-card-checklist me-2" aria-hidden="true"></i>
          Gestionar órdenes
        </button>
      </div>

      {/* Tabla de órdenes: lista todas las órdenes con patente, vehículo, estado y sucursal */}
      <div className="card">
        <div className="card-header border-bottom border-secondary border-opacity-25 py-3">
          <h2 className="h6 fw-semibold mb-0 text-white">
            <i className="bi bi-card-checklist me-2 text-primary"></i>
            Órdenes de trabajo
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

    </main>
  )
}

export default Dashboard
