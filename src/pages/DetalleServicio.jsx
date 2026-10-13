import React from 'react';
// Importamos useParams para leer la URL y useNavigate para el botón de volver
import { useParams, useNavigate } from 'react-router-dom';
import { useServicios } from '../context/ServiciosContext.jsx';
import { useTituloPagina } from '../hooks/useTituloPagina.js';

export default function DetalleServicio() {
  const { id } = useParams(); // Leemos el ID desde la ruta
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

  // Si lo encuentra, mostramos los detalles:
  return (
    <div className="container py-5">
      <div className="card shadow border-0 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body p-5">
          <span className="badge bg-primary mb-3 fs-6">{servicioEncontrado.categoria}</span>
          <h2 className="card-title fw-bold mb-3">{servicioEncontrado.nombre}</h2>
          <p className="text-muted mb-4">Recomendado para: <strong>{servicioEncontrado.especie}</strong></p>
          
          <div className="bg-light p-3 rounded mb-4">
            <h5 className="fw-semibold">Descripción del servicio</h5>
            <p className="mb-0">{servicioEncontrado.observaciones}</p>
          </div>
          
          <div className="d-flex justify-content-between align-items-center mt-5">
            <h3 className="text-success fw-bold mb-0">
              ${servicioEncontrado.precio.toLocaleString('es-CL')}
            </h3>
            {/* navigate(-1) funciona como el botón "Atrás" del navegador */}
            <button className="btn btn-outline-secondary px-4" onClick={() => navigate(-1)}>
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}