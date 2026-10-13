import { useEffect } from 'react';

export default function useTituloPagina(titulo) {
  useEffect(() => {
    // Cambia el título de la pestaña del navegador
    document.title = `${titulo} - Veterinaria San Marcos`;
  }, [titulo]); // Se vuelve a ejecutar solo si el título cambia
}