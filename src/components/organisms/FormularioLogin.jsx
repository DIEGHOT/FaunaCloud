import React, { useState } from 'react';
import { validarEmail, validarClave } from '../../utils/validaciones.js';


export default function FormularioLogin({ onLoginSubmit, isLoading, mensajeError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({});

  const manejarIngreso = (e) => {
    e.preventDefault(); 
    
    const errorEmail = validarEmail(email);
    const errorClave = validarClave(password);

    if (errorEmail || errorClave) {
      setErrores({ email: errorEmail, clave: errorClave });
      return; 
    }

    setErrores({});
    onLoginSubmit({ email, password });
  };

  return (
    <form onSubmit={manejarIngreso} className="p-4 border rounded shadow-sm bg-white mx-auto" style={{maxWidth: '400px', marginTop: '50px'}}>
      <h2 className="mb-4 text-center fw-bold text-primary">Iniciar Sesión</h2>
      
      {/* 3. PROMPT DE ERROR: Muestra un mensaje visual si el backend rechaza el login */}
      {mensajeError && (
        <div className="alert alert-danger text-center" role="alert">
          {mensajeError}
        </div>
      )}

      <div className="mb-3">
        <label className="form-label">Correo Electrónico</label>
        <input 
          type="text" 
          className={`form-control ${errores.email ? 'is-invalid' : ''}`}
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          disabled={isLoading} 
        />
        {errores.email && <div className="invalid-feedback">{errores.email}</div>}
      </div>

      <div className="mb-4">
        <label className="form-label">Contraseña</label>
        <input 
          type="password" 
          className={`form-control ${errores.clave ? 'is-invalid' : ''}`}
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          disabled={isLoading}
        />
        {errores.clave && <div className="invalid-feedback">{errores.clave}</div>}
      </div>

      <button type="submit" className="btn btn-primary w-100 fw-bold" disabled={isLoading}>
        {/* 4. Feedback visual en el botón */}
        {isLoading ? 'Comprobando...' : 'Ingresar a FaunaCloud'}
      </button>
    </form>
  );
}