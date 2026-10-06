import React from 'react';
import { useServicios } from '../../context/ServiciosContext.jsx';

import TarjetaServicio from '../molecules/TarjetaServicio.jsx';

export default function ListaServicios() {
  const { servicios } = useServicios();

  if (!servicios || servicios.length === 0) {
    return <p className="text-center mt-5 text-muted">Cargando servicios...</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {servicios.map((servicio) => (
        <div className="col" key={servicio.id}>
          <TarjetaServicio servicio={servicio} />
        </div>
      ))}
    </div>
  );
}