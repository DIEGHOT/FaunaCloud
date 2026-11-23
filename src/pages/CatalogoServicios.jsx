import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListaServicios from '../components/organisms/ListaServicios.jsx';
import { esAdmin } from '../utils/auth.js';

export default function CatalogoServicios() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="badge bg-info text-dark px-3 py-2 mb-2 rounded-pill fw-semibold">
          Veterinaria San Marcos
        </span>
        <h1 className="fw-bold display-6">Catálogo de Servicios Médicos</h1>
        <p className="text-muted col-lg-8 mx-auto">
          Atención médica integral para la salud y el cuidado de tus mascotas en Rancagua.
        </p>

        {/* Botón visible solo para administradores */}
        {esAdmin() && (
          <div className="mt-4">
            <button
              onClick={() => navigate('/crear-servicio')}
              className="btn btn-success px-4 py-2 fw-semibold shadow-sm"
            >
              + Crear Nuevo Servicio
            </button>
          </div>
        )}
      </div>

      <ListaServicios />
    </div>
  );
}