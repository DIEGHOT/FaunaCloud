import React, { createContext, useState, useContext } from 'react';


const ServiciosContext = createContext();


export function ServiciosProvider({ children }) {
  
  const [servicios, setServicios] = useState([
    { id: 1, categoria: "Consulta", nombre: "Consulta General", especie: "Perros y Gatos", observaciones: "Evaluación médica completa.", precio: 15000 },
    { id: 2, categoria: "Urgencia", nombre: "Atención de Urgencia", especie: "Todas", observaciones: "Atención prioritaria inmediata.", precio: 35000 },
    { id: 3, categoria: "Peluquería", nombre: "Baño y Corte", especie: "Perros", observaciones: "Incluye corte de uñas.", precio: 22000 },
    { id: 4, categoria: "Vacunación", nombre: "Vacuna Antirrábica", especie: "Perros y Gatos", observaciones: "Obligatoria anual.", precio: 12000 }
  ]);

  return (
    <ServiciosContext.Provider value={{ servicios, setServicios }}>
      {children}
    </ServiciosContext.Provider>
  );
}


export function useServicios() {
  return useContext(ServiciosContext);
}