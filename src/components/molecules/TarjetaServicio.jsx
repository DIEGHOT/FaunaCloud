import React from 'react';
import { useNavigate } from 'react-router-dom';
import { esAdmin } from '../../utils/auth';

export default function TarjetaServicio({ servicio, onEliminar }) {
  const navigate = useNavigate();

  const handleEliminar = () => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar "${servicio.nombre}"?`)) {
      if (onEliminar) {
        onEliminar(servicio.id);
      }
    }
  };

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <span className="badge bg-info text-dark">
            ⏱ {servicio.duracion_minutos} min
          </span>
        </div>

        <h5 className="card-title fw-bold">{servicio.nombre}</h5>
        
        <p className="card-text text-muted small mb-4 mt-2">
          {servicio.descripcion}
        </p>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-5 fw-bold text-success">
              ${Number(servicio.precio).toLocaleString('es-CL')}
            </span>
            <button 
              className="btn btn-outline-primary btn-sm"
              onClick={() => navigate(`/servicio/${servicio.id}`)}
            >
              Ver detalle
            </button>
          </div>

          {/* Botones exclusivos para administradores */}
          {esAdmin() && (
            <div className="d-flex gap-2 mt-3 pt-2 border-top">
              <button
                className="btn btn-outline-warning btn-sm w-50 fw-semibold"
                onClick={() => navigate(`/editar-servicio/${servicio.id}`)}
              >
                ✏️ Editar
              </button>
              <button
                className="btn btn-outline-danger btn-sm w-50 fw-semibold"
                onClick={handleEliminar}
              >
                🗑️ Eliminar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}