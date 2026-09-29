import { createContext, useContext, useState } from 'react';
import * as servicioService from '../services/servicioService';

export const ServiciosContext = createContext(null);

export const ServiciosProvider = ({ children }) => {
  // Inicializamos el estado leyendo directamente del service
  const [servicios, setServicios] = useState(() => servicioService.listarServicios());
  const [cargando, setCargando] = useState(false); // Ya no necesitas el setTimeout

  function crear(datos) {
    servicioService.crearServicio(datos);
    setServicios(servicioService.listarServicios());
  }

  function actualizar(id, cambios) {
    servicioService.actualizarServicio(id, cambios);
    setServicios(servicioService.listarServicios());
  }

  function eliminar(id) {
    servicioService.eliminarServicio(id);
    setServicios(servicioService.listarServicios());
  }

  return (
    <ServiciosContext.Provider value={{ servicios, cargando, crear, actualizar, eliminar }}>
      {children}
    </ServiciosContext.Provider>
  );
};

// Hook personalizado para usar el contexto más fácil en tus componentes
export function useServicios() {
  const contexto = useContext(ServiciosContext);
  if (!contexto) {
    throw new Error('useServicios debe usarse dentro de un ServiciosProvider');
  }
  return contexto;
}