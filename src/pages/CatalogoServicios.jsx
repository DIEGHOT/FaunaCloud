import React from 'react';
import ListaServicios from '../components/organisms/ListaServicios';

export default function CatalogoServicios() {
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
      </div>

      <ListaServicios />
    </div>
  );
}