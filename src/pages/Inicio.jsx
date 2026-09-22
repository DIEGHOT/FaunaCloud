import { Container, Row, Col, Card } from "react-bootstrap";
import NavbarPrincipal from "../components/organisms/NavbarPrincipal";

function Inicio() {
  return (
    <>
      <NavbarPrincipal />
      <Container>
        <Row>
          <Col text="center" className="my-5 text-center">
            <h1>Bienvenido al Proyecto</h1>
            <p className="lead">Selecciona "Iniciar Sesión" en el menú para probar el componente responsivo.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Inicio;