import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useServicios } from '../context/ServiciosContext.jsx';
import { useTituloPagina } from '../hooks/useTituloPagina.js';

export default function DetalleServicio() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { servicios } = useServicios();
  
  useTituloPagina('Detalle del Servicio');

  const servicioEncontrado = servicios?.find((s) => s.id === Number(id));

  if (!servicioEncontrado) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Servicio no encontrado</h2>
        <p>No existe un servicio con el código "{id}".</p>
        <button className="btn btn-primary mt-3" onClick={() => navigate('/catalogo')}>
          Volver al catálogo
        </button>
      </div>
    );
  }
  
  return (
    <div className="container py-5">
      <div className="card shadow border-0 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body p-5">
          <span className="badge bg-info text-dark mb-3 fs-6">
            ⏱ {servicioEncontrado.duracion_minutos} min
          </span>
          <h2 className="card-title fw-bold mb-3">{servicioEncontrado.nombre}</h2>
          
          <div className="bg-light p-3 rounded mb-4 mt-4">
            <h5 className="fw-semibold">Descripción del servicio</h5>
            <p className="mb-0">{servicioEncontrado.descripcion}</p>
          </div>
          
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h3 className="text-success fw-bold mb-0">
              ${Number(servicioEncontrado.precio).toLocaleString('es-CL')}
            </h3>
            <button className="btn btn-outline-secondary px-4" onClick={() => navigate(-1)}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}