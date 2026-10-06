import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarPrincipal() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Mantenemos tu enlace original a San Marcos */}
          <Navbar.Brand as={Link} to="/catalogo">San Marcos</Navbar.Brand>
          
          {/* Este botón hace que el menú funcione en celulares */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
              <Nav.Link as={Link} to="/login">Cerrar Sesión</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavbarPrincipal;