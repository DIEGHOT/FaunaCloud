import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarPrincipal() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          {/* Enlace al Inicio usando Link para que no recargue */}
          <Navbar.Brand as={Link} to="/">San Marcos</Navbar.Brand>
          
          {/* Este botón hace que el menú funcione en celulares */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
              <Nav.Link as={Link} to="/login">Ingresar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavbarPrincipal;