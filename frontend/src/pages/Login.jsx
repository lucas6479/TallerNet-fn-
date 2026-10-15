import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'
import api from '../services/api'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setCargando(true)

    try {
      const respuesta = await api.get(`/usuarios?email=${email}`)
      const usuario = respuesta.data[0]

      if (!usuario || usuario.password !== password) {
        Swal.fire({
          icon: 'error',
          title: 'Credenciales incorrectas',
          text: 'El correo o la contraseña son incorrectos.',
          confirmButtonColor: '#22E58A',
          background: '#121614',
          color: '#ffffff'
        })
        return
      }

      const sesion = {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
        sucursalId: usuario.sucursalId
      }

      localStorage.setItem('tallernet_usuario', JSON.stringify(sesion))

      await Swal.fire({
        icon: 'success',
        title: `¡Bienvenido/a, ${usuario.nombre}!`,
        text: 'Sesión iniciada correctamente.',
        confirmButtonColor: '#22E58A',
        background: '#121614',
        color: '#ffffff'
      })

      navigate('/sistema/dashboard')
    } catch (error) {
      console.error(error)
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'No se pudo conectar con el servidor. Verificá que la API esté activa.',
        confirmButtonColor: '#22E58A',
        background: '#121614',
        color: '#ffffff'
      })
    } finally {
      setCargando(false)
    }
  }

  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="col-11 col-sm-8 col-md-5 col-lg-4">
        <div className="card p-4 p-md-5">
          <div className="text-center mb-4">
            <span className="pub-brand-icon mx-auto mb-3">
              <i className="bi bi-tools"></i>
            </span>
            <h1 className="h4 fw-semibold mb-1 text-white">TallerNet</h1>
            <p className="small mb-0 text-white">Ingresá con tu cuenta</p>
          </div>

          <Form data-bs-theme="dark" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="small text-secondary">Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="usuario@tallernet.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="small text-secondary">Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </Form.Group>

            <button
              type="submit"
              className="btn btn-outline-success w-100"
              disabled={cargando}
            >
              {cargando ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </Form>

          <div className="text-center mt-4">
            <Link to="/" className="text-secondary small text-decoration-none">
              <i className="bi bi-arrow-left me-1"></i>
              Volver al inicio
            </Link>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Login
