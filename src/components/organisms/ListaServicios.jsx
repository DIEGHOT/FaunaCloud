import React from 'react';
import { useServicios } from '../../context/ServiciosContext.jsx';
import { eliminarServicio } from '../../services/servicioService.js';
import TarjetaServicio from '../molecules/TarjetaServicio.jsx';

export default function ListaServicios() {
  const { servicios, setServicios } = useServicios();

  const handleEliminarServicio = async (id) => {
    try {
      await eliminarServicio(id);
      setServicios(servicios.filter((servicio) => servicio.id !== id));
      alert('Servicio eliminado con éxito.');
    } catch (error) {
      console.error('Error al eliminar el servicio:', error);
      alert('Hubo un error al eliminar el servicio. Revisa la consola.');
    }
  };

  if (!servicios || servicios.length === 0) {
    return <p className="text-center mt-5 text-muted">No hay servicios disponibles.</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {servicios.map((servicio) => (
        <div className="col" key={servicio.id}>
          <TarjetaServicio 
            servicio={servicio} 
            onEliminar={handleEliminarServicio} 
          />
        </div>
      ))}
    </div>
  );
}