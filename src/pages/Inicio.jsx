import { Container, Row, Col } from "react-bootstrap";
// 1. Importamos tu nuevo hook
import useTituloPagina from "../hooks/useTituloPagina.js";

function Inicio() {
  // 2. Lo llamamos aquí (siempre en el nivel superior de la función)
  useTituloPagina("Inicio");

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