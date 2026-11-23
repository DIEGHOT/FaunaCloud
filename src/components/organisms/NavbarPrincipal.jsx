import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { esAdmin } from '../../utils/auth';

export default function NavbarPrincipal() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    // 1. Borramos el token del navegador para destruir la sesión (¡Importante para la nota!)
    localStorage.removeItem('token');
    // 2. Redirigimos al login
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow">
      <div className="container">
        {/* Cambiamos el span por un Link para que al hacer clic en el logo vaya al catálogo */}
        <Link to="/catalogo" className="navbar-brand fw-bold text-info text-decoration-none">
          🐾 FaunaCloud
        </Link>
        
        <div className="d-flex align-items-center gap-3">
          
          <Link to="/catalogo" className="text-light text-decoration-none fw-semibold">
            Catálogo
          </Link>

          {/* <-- RESTRICCIÓN DE ACCESO: Solo se muestra si es Admin --> */}
          {esAdmin() && (
            <Link to="/usuarios" className="btn btn-outline-warning btn-sm fw-semibold">
              Gestión de Usuarios
            </Link>
          )}

          <button onClick={cerrarSesion} className="btn btn-outline-danger btn-sm fw-semibold">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}