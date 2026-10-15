import { Navbar as BSNavbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

function Navbar() {
  return (
    <BSNavbar expand="xl" className="pub-navbar fixed-top px-2" collapseOnSelect aria-label="Navegación principal">
      <div className="container border border-white border-opacity-10 p-4 rounded-4">

        <BSNavbar.Brand href="#inicio" className="d-flex align-items-center gap-2">
          <span className="pub-brand-icon">
            <i className="bi bi-tools" aria-hidden="true"></i>
          </span>
          <span className="fs-6 fw-medium text-white">TallerNet</span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-label="Menú" className="border border-white border-opacity-25 py-2 px-3" >
          <i className="bi bi-list text-white" aria-hidden="true"></i>
        </BSNavbar.Toggle>

        <BSNavbar.Collapse className="mt-3 mt-xl-0 pt-3 pt-xl-0 pb-2 pb-xl-0">
          <Nav className="mx-xl-auto gap-3">
            <Nav.Link href="#inicio" className="text-white">Inicio</Nav.Link>
            <Nav.Link href="#problema" className="text-white">Problema</Nav.Link>
            <Nav.Link href="#como-funciona" className="text-white">Flujo</Nav.Link>
            <Nav.Link href="#sucursales" className="text-white">Sucursales</Nav.Link>
            <Nav.Link href="#demo" className="text-white">Contacto</Nav.Link>
            <Nav.Link href="#equipo" className="text-white">Equipo</Nav.Link>
          </Nav>
          <div className="d-flex flex-column flex-xl-row gap-2 mt-2 mt-xl-0">
            <a href="#demo" className="btn pub-demo-btn">
              Solicitar demo
              <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
            </a>
            <Link to="/login" className="btn btn-outline-primary">
              <i className="bi bi-person me-1" aria-hidden="true"></i>
              Iniciar sesión
            </Link>
          </div>
        </BSNavbar.Collapse>

      </div>
    </BSNavbar>
  )
}

export default Navbar
