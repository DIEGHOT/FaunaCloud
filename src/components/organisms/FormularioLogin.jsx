import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import CampoFormulario from "../molecules/CampoFormulario";
import Boton from "../atoms/Boton";

function FormularioLogin({ onLoginSubmit }) {
  const [credenciales, setCredenciales] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSubmit(credenciales);
  };

  return (
    <Card className="shadow-lg border-0 rounded-4 p-4">
      <Card.Body>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Iniciar Sesión</h3>
          <p className="text-muted small">Ingresa tus credenciales para acceder</p>
        </div>

        <Form onSubmit={handleSubmit}>
          <CampoFormulario
            etiqueta="Correo Electrónico"
            tipo="email"
            nombre="email"
            placeholder="ejemplo@correo.cl"
            valor={credenciales.email}
            onChange={handleChange}
            requerido={true}
          />

          <CampoFormulario
            etiqueta="Contraseña"
            tipo="password"
            nombre="password"
            placeholder="••••••••"
            valor={credenciales.password}
            onChange={handleChange}
            requerido={true}
          />

          <div className="mt-4">
            <Boton texto="Ingresar" variante="primary" tipo="submit" />
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default FormularioLogin;