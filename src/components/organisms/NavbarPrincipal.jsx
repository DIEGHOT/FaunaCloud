import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavbarPrincipal() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    // Redirige de vuelta a la página de login
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow">
      <div className="container">
        <span className="navbar-brand fw-bold text-info">
          🐾 FaunaCloud
        </span>
        
        <div className="d-flex">
          <button onClick={cerrarSesion} className="btn btn-outline-danger btn-sm fw-semibold">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

