import React from 'react';
// 1. Importamos el hook de navegación
import { useNavigate } from 'react-router-dom';

export default function TarjetaServicio({ servicio }) {
  const navigate = useNavigate(); // 2. Lo inicializamos

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column">
        <span className="badge bg-primary mb-2 align-self-start">
          {servicio.categoria}
        </span>
        <h5 className="card-title fw-bold">{servicio.nombre}</h5>
        <p className="card-text text-muted mb-1">Especie: {servicio.especie}</p>
        <p className="card-text small mb-4">{servicio.observaciones}</p>
        
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fs-5 fw-bold text-success">
            ${servicio.precio.toLocaleString('es-CL')}
          </span>
          {/* 3. Conectamos el botón mandando el ID del servicio a la ruta */}
          <button 
            className="btn btn-outline-primary btn-sm"
            onClick={() => navigate(`/servicio/${servicio.id}`)}
          >
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
}