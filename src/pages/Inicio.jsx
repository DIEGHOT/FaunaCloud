import { Container, Row, Col } from "react-bootstrap";

function Inicio() {
  return (
    <Container as="main">
      <Row>
        <Col className="my-5 text-center">
          <h1>Bienvenido a Veterinaria San Marcos</h1>
          <p className="lead">Selecciona "Catálogo" o "Iniciar Sesión" en el menú para navegar sin recargar la página.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;