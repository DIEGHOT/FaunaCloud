import React from 'react';
import { Link } from 'react-router-dom';

export default function NavbarPrincipal() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/catalogo">San Marcos</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              
              <Link className="nav-link" to="/catalogo">Catálogo</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link" to="/login">Cerrar Sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}