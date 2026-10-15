import { Link } from 'react-router'

function NotFound() {
  return (
    <main className="min-vh-100 d-flex flex-column align-items-center justify-content-center text-center px-3">
      <i className="bi bi-compass fs-1 text-primary mb-3"></i>
      <p className="page-404-number text-primary fw-bold lh-1 mb-2">404</p>
      <h1 className="h3 text-white fw-semibold mb-2">Página no encontrada</h1>
      <p className="text-secondary mb-4">La página que estás buscando no existe o fue movida.</p>
      <Link to="/" className="btn btn-outline-success px-4">
        Volver al inicio
      </Link>
    </main>
  )
}

export default NotFound
