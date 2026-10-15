import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Modal } from 'react-bootstrap'
import Swal from 'sweetalert2'
import api from '../services/api'

function Vehiculos() {
  const usuario = JSON.parse(localStorage.getItem('tallernet_usuario'))
  const esAdmin = usuario.rol === 'administrador'

  const [vehiculos, setVehiculos] = useState([])
  const [sucursales, setSucursales] = useState([])

  // Estados del modal Crear
  const [mostrarCrear, setMostrarCrear] = useState(false)
  const [patente, setPatente] = useState('')
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [anio, setAnio] = useState('')
  const [cliente, setCliente] = useState('')
  const [sucursalIdCrear, setSucursalIdCrear] = useState('')

  // Estados del modal Editar
  const [mostrarEditar, setMostrarEditar] = useState(false)
  const [idEditar, setIdEditar] = useState(null)
  const [patenteEditar, setPatenteEditar] = useState('')
  const [marcaEditar, setMarcaEditar] = useState('')
  const [modeloEditar, setModeloEditar] = useState('')
  const [anioEditar, setAnioEditar] = useState('')
  const [clienteEditar, setClienteEditar] = useState('')
  const [sucursalIdEditar, setSucursalIdEditar] = useState('')

  async function listarVehiculos() {
    let res
    if (esAdmin) {
      res = await api.get('/vehiculos')
    } else {
      res = await api.get(`/vehiculos?sucursalId=${usuario.sucursalId}`)
    }
    setVehiculos(res.data)
  }

  useEffect(() => {
    async function cargarDatos() {
      await listarVehiculos()
      const res = await api.get('/sucursales')
      setSucursales(res.data)
    }
    cargarDatos()
  }, [])

  function abrirCrear() {
    setPatente('')
    setMarca('')
    setModelo('')
    setAnio('')
    setCliente('')
    setSucursalIdCrear('')
    setMostrarCrear(true)
  }

  async function crearVehiculo() {
    if (!patente.trim()) { alert('Ingresá la patente.'); return }
    if (!marca.trim()) { alert('Ingresá la marca.'); return }
    if (!modelo.trim()) { alert('Ingresá el modelo.'); return }
    if (!anio) { alert('Ingresá el año.'); return }
    if (!cliente.trim()) { alert('Ingresá el nombre del cliente.'); return }
    if (esAdmin && !sucursalIdCrear) { alert('Seleccioná una sucursal.'); return }

    let sucursalId
    if (esAdmin) {
      sucursalId = Number(sucursalIdCrear)
    } else {
      sucursalId = Number(usuario.sucursalId)
    }

    const nuevoVehiculo = {
      patente: patente.trim(),
      marca: marca.trim(),
      modelo: modelo.trim(),
      anio: Number(anio),
      cliente: cliente.trim(),
      sucursalId: sucursalId
    }

    await api.post('/vehiculos', nuevoVehiculo)
    await listarVehiculos()
    setMostrarCrear(false)
  }

  function abrirEditar(v) {
    setIdEditar(v.id)
    setPatenteEditar(v.patente)
    setMarcaEditar(v.marca)
    setModeloEditar(v.modelo)
    setAnioEditar(String(v.anio))
    setClienteEditar(v.cliente)
    setSucursalIdEditar(String(v.sucursalId))
    setMostrarEditar(true)
  }

  async function editarVehiculo() {
    if (!patenteEditar.trim()) { alert('Ingresá la patente.'); return }
    if (!marcaEditar.trim()) { alert('Ingresá la marca.'); return }
    if (!modeloEditar.trim()) { alert('Ingresá el modelo.'); return }
    if (!anioEditar) { alert('Ingresá el año.'); return }
    if (!clienteEditar.trim()) { alert('Ingresá el nombre del cliente.'); return }

    let sucursalId
    if (esAdmin) {
      sucursalId = Number(sucursalIdEditar)
    } else {
      sucursalId = Number(usuario.sucursalId)
    }

    const datos = {
      patente: patenteEditar.trim(),
      marca: marcaEditar.trim(),
      modelo: modeloEditar.trim(),
      anio: Number(anioEditar),
      cliente: clienteEditar.trim(),
      sucursalId: sucursalId
    }

    await api.patch(`/vehiculos/${idEditar}`, datos)
    await listarVehiculos()
    setMostrarEditar(false)
  }

  async function eliminarVehiculo(id) {
    const resultado = await Swal.fire({
      title: '¿Eliminar vehículo?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#22E58A',
      cancelButtonColor: '#6c757d',
      background: '#121614',
      color: '#ffffff'
    })

    if (resultado.isConfirmed) {
      await api.delete(`/vehiculos/${id}`)
      await listarVehiculos()
    }
  }

  return (
    <main className="min-vh-100 py-4">
      <div className="container">

        {/* Encabezado */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 pb-4 mb-4 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3">
            <span className="pub-brand-icon">
              <i className="bi bi-car-front"></i>
            </span>
            <div>
              <h1 className="h5 fw-semibold mb-0">Vehículos</h1>
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

        {/* Tabla de vehículos */}
        <div className="card">
          <div className="card-header py-3 d-flex justify-content-between align-items-center">
            <h2 className="h6 fw-semibold mb-0 text-white">
              <i className="bi bi-car-front me-2 text-primary"></i>
              {vehiculos.length} vehículos registrados
            </h2>
            <button className="btn btn-primary btn-sm" onClick={abrirCrear}>
              <i className="bi bi-plus-lg me-1" aria-hidden="true"></i>
              Nuevo vehículo
            </button>
          </div>
          <div className="table-responsive">
            <table className="table table-dark table-sm align-middle mb-0">
              <thead>
                <tr>
                  <th className="ps-3 py-3">Patente</th>
                  <th className="py-3">Vehículo</th>
                  <th className="py-3">Año</th>
                  <th className="py-3">Cliente</th>
                  <th className="py-3">Sucursal</th>
                  <th className="py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {vehiculos.map(v => (
                  <tr key={v.id}>
                    <td className="ps-3">
                      <span className="badge bg-secondary bg-opacity-25 text-white text-opacity-75 font-monospace fw-bold rounded-1">
                        {v.patente}
                      </span>
                    </td>
                    <td>{v.marca} {v.modelo}</td>
                    <td className="text-secondary">{v.anio}</td>
                    <td>{v.cliente}</td>
                    <td className="text-secondary">
                      {sucursales.find(s => Number(s.id) === Number(v.sucursalId))?.nombre}
                    </td>
                    <td>
                      <div className="d-flex gap-1">
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => abrirEditar(v)}
                        >
                          <i className="bi bi-pencil" aria-hidden="true"></i>
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => eliminarVehiculo(v.id)}
                        >
                          <i className="bi bi-trash" aria-hidden="true"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Crear */}
        <Modal show={mostrarCrear} onHide={() => setMostrarCrear(false)} centered>
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title className="h6 fw-semibold mb-0">
              <i className="bi bi-plus-circle me-2 text-primary"></i>
              Nuevo vehículo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div data-bs-theme="dark">

              <div className="mb-3">
                <label className="form-label text-secondary small">Patente</label>
                <input type="text" className="form-control" placeholder="Ej: ABC 123"
                  value={patente} onChange={e => setPatente(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small">Marca</label>
                <input type="text" className="form-control" placeholder="Ej: Toyota"
                  value={marca} onChange={e => setMarca(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small">Modelo</label>
                <input type="text" className="form-control" placeholder="Ej: Corolla"
                  value={modelo} onChange={e => setModelo(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small">Año</label>
                <input type="number" className="form-control" placeholder="Ej: 2021"
                  value={anio} onChange={e => setAnio(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small">Cliente</label>
                <input type="text" className="form-control" placeholder="Ej: Juan Pérez"
                  value={cliente} onChange={e => setCliente(e.target.value)} />
              </div>

              {esAdmin && (
                <div className="mb-3">
                  <label className="form-label text-secondary small">Sucursal</label>
                  <select className="form-select" value={sucursalIdCrear} onChange={e => setSucursalIdCrear(e.target.value)}>
                    <option value="">Seleccioná una sucursal...</option>
                    {sucursales.map(s => (
                      <option key={s.id} value={s.id}>{s.nombre}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="d-flex gap-2 pt-2">
                <button className="btn btn-primary btn-sm" onClick={crearVehiculo}>
                  <i className="bi bi-check-lg me-1" aria-hidden="true"></i>
                  Crear vehículo
                </button>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setMostrarCrear(false)}>
                  Cancelar
                </button>
              </div>

            </div>
          </Modal.Body>
        </Modal>

        {/* Modal Editar */}
        <Modal show={mostrarEditar} onHide={() => setMostrarEditar(false)} centered>
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title className="h6 fw-semibold mb-0">
              <i className="bi bi-pencil-square me-2 text-primary"></i>
              Editar vehículo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div data-bs-theme="dark">

              <div className="mb-3">
                <label className="form-label text-secondary small">Patente</label>
                <input type="text" className="form-control"
                  value={patenteEditar} onChange={e => setPatenteEditar(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small">Marca</label>
                <input type="text" className="form-control"
                  value={marcaEditar} onChange={e => setMarcaEditar(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small">Modelo</label>
                <input type="text" className="form-control"
                  value={modeloEditar} onChange={e => setModeloEditar(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small">Año</label>
                <input type="number" className="form-control"
                  value={anioEditar} onChange={e => setAnioEditar(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary small">Cliente</label>
                <input type="text" className="form-control"
                  value={clienteEditar} onChange={e => setClienteEditar(e.target.value)} />
              </div>

              {esAdmin && (
                <div className="mb-3">
                  <label className="form-label text-secondary small">Sucursal</label>
                  <select className="form-select" value={sucursalIdEditar} onChange={e => setSucursalIdEditar(e.target.value)}>
                    {sucursales.map(s => (
                      <option key={s.id} value={s.id}>{s.nombre}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="d-flex gap-2 pt-2">
                <button className="btn btn-primary btn-sm" onClick={editarVehiculo}>
                  <i className="bi bi-check-lg me-1" aria-hidden="true"></i>
                  Guardar cambios
                </button>
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setMostrarEditar(false)}>
                  Cancelar
                </button>
              </div>

            </div>
          </Modal.Body>
        </Modal>

      </div>
    </main>
  )
}

export default Vehiculos
