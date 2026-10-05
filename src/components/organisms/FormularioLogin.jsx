import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Importar el hook

export default function FormularioLogin() {
  const navigate = useNavigate(); // 2. Inicializarlo

  const manejarIngreso = (e) => {
    e.preventDefault();
    
    
    
    navigate('/catalogo'); 
  };

  return (
    <form onSubmit={manejarIngreso}>
      <input type="email" name="email" placeholder="Correo Electrónico" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <button type="submit" className="btn btn-primary">Ingresar</button>
    </form>
  );
}