import React, { createContext, useState, useContext, useEffect } from 'react';
import { obtenerServicios } from '../services/servicioService';

const ServiciosContext = createContext();

export function ServiciosProvider({ children }) {
  const [servicios, setServicios] = useState([]);

  const recargarServicios = async () => {
    try {
      const datos = await obtenerServicios();
      setServicios(datos);
    } catch (error) {
      console.error("Error al cargar los servicios desde el backend:", error);
    }
  };

  useEffect(() => {
    recargarServicios();
  }, []);

  return (
    <ServiciosContext.Provider value={{ servicios, setServicios, recargarServicios }}>
      {children}
    </ServiciosContext.Provider>
  );
}

export function useServicios() {
  return useContext(ServiciosContext);
}