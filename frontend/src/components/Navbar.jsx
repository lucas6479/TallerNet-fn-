import { Navbar as BSNavbar, Nav } from 'react-bootstrap'

function Navbar() {
  return (
    <BSNavbar expand="xl" className="pub-navbar" collapseOnSelect>
      <div className="container">

        <BSNavbar.Brand href="#inicio" className="pub-brand d-flex align-items-center text-decoration-none">
          <span className="pub-brand-icon d-flex align-items-center justify-content-center flex-shrink-0">
            <i className="bi bi-tools"></i>
          </span>
          <span className="pub-brand-name">TallerNet</span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-label="Menú">
          <i className="bi bi-list"></i>
        </BSNavbar.Toggle>

        <BSNavbar.Collapse>
          <Nav className="mx-xl-auto gap-3">
            <Nav.Link href="#inicio" className="pub-nav-link">Inicio</Nav.Link>
            <Nav.Link href="#problema" className="pub-nav-link">Problema</Nav.Link>
            <Nav.Link href="#showcase" className="pub-nav-link">Cómo funciona</Nav.Link>
            <Nav.Link href="#como-funciona" className="pub-nav-link">Flujo</Nav.Link>
            <Nav.Link href="#sucursales" className="pub-nav-link">Sucursales</Nav.Link>
            <Nav.Link href="#faq" className="pub-nav-link">FAQ</Nav.Link>
            <Nav.Link href="#demo" className="pub-nav-link">Contacto</Nav.Link>
            <Nav.Link href="#equipo" className="pub-nav-link">Equipo</Nav.Link>
          </Nav>
          <Nav.Link href="#demo" className="pub-nav-cta">
            <i className="bi bi-arrow-right pub-nav-cta-arr-2" aria-hidden="true"></i>
            <span className="pub-nav-cta-text">Solicitar demo</span>
            <span className="pub-nav-cta-circle"></span>
            <i className="bi bi-arrow-right pub-nav-cta-arr-1" aria-hidden="true"></i>
          </Nav.Link>
        </BSNavbar.Collapse>

      </div>
    </BSNavbar>
  )
}

export default Navbar
