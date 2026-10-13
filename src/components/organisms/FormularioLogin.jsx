import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// 1. Importamos nuestras funciones puras
import { validarEmail, validarClave } from '../../utils/validaciones.js';

export default function FormularioLogin() {
  const navigate = useNavigate(); 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 2. Nuevo estado para guardar los errores
  const [errores, setErrores] = useState({});

  const manejarIngreso = (e) => {
    e.preventDefault(); // Evita recargar la página

    // 3. Ejecutamos las validaciones
    const errorEmail = validarEmail(email);
    const errorClave = validarClave(password);

    // Si alguno devuelve un mensaje (no está vacío), guardamos los errores y detenemos el envío
    if (errorEmail || errorClave) {
      setErrores({ email: errorEmail, clave: errorClave });
      return; 
    }

    // Si todo está correcto, limpiamos errores y navegamos al catálogo
    setErrores({});
    navigate('/catalogo'); 
  };

  return (
    <form onSubmit={manejarIngreso} className="p-4 border rounded shadow-sm bg-white mx-auto" style={{maxWidth: '400px', marginTop: '50px'}}>
      <h2 className="mb-4 text-center fw-bold text-primary">Iniciar Sesión</h2>
      
      <div className="mb-3">
        <label className="form-label">Correo Electrónico</label>
        <input 
          type="text" 
          className={`form-control ${errores.email ? 'is-invalid' : ''}`}
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {/* Mostramos el error solo si existe */}
        {errores.email && <div className="invalid-feedback">{errores.email}</div>}
      </div>

      <div className="mb-4">
        <label className="form-label">Contraseña</label>
        <input 
          type="password" 
          className={`form-control ${errores.clave ? 'is-invalid' : ''}`}
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {errores.clave && <div className="invalid-feedback">{errores.clave}</div>}
      </div>

      <button type="submit" className="btn btn-primary w-100 fw-bold">
        Ingresar a FaunaCloud
      </button>
    </form>
  );
}