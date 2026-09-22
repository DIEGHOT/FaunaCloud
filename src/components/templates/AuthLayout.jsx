import { Container, Row, Col } from "react-bootstrap";

function AuthLayout({ children }) {
  return (
    <div className="min-vh-100 d-flex align-items-center bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          {/* Grilla responsiva adaptativa: 
              - xs={12}: 100% de ancho en móviles (<576px)
              - md={8}: ~66% de ancho en tablets (≥768px)
              - lg={5} / xl={4}: ~33% de ancho en escritorio (≥992px)
          */}
          <Col xs={12} md={8} lg={5} xl={4}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AuthLayout;