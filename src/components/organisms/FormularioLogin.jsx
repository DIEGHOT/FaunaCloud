import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Llamamos a las reglas de validación (que vamos a crear en el siguiente paso)
import { validarEmail, validarClave } from '../../utils/validaciones.js';

export default function FormularioLogin() {
  const navigate = useNavigate();

  // 1. Aquí React guarda lo que escribes (esto lo hace un "componente controlado")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // 2. Aquí guardamos los mensajes de error si te equivocas
  const [errores, setErrores] = useState({ email: '', password: '' });

  const manejarIngreso = (e) => {
    e.preventDefault(); // Evita que la página parpadee o se reinicie
    
    // Revisamos si hay errores usando el archivo de validaciones
    const errorEmail = validarEmail(email);
    const errorPassword = validarClave(password);

    // Guardamos los errores (si los hay) para que aparezcan en pantalla
    setErrores({ email: errorEmail, password: errorPassword });

    // Si todo está impecable (no hay texto de error), ¡viajamos al catálogo!
    if (errorEmail === '' && errorPassword === '') {
      navigate('/catalogo'); 
    }
  };

  return (
    <form onSubmit={manejarIngreso} className="p-4 border rounded shadow-sm bg-light">
      <h3 className="mb-3 text-center">Iniciar Sesión</h3>
      
      <div className="mb-3">
        <label>Correo Electrónico</label>
        <input 
          type="email" 
          className="form-control"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} // Se actualiza al teclear
          placeholder="Ej: recepcion@sanmarcos.cl" 
        />
        {/* Si hay error en el correo, aparece este texto en rojo */}
        {errores.email && <span className="text-danger small">{errores.email}</span>}
      </div>

      <div className="mb-4">
        <label>Contraseña</label>
        <input 
          type="password" 
          className="form-control"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} // Se actualiza al teclear
          placeholder="Mínimo 6 caracteres" 
        />
        {/* Si hay error en la clave, aparece este texto en rojo */}
        {errores.password && <span className="text-danger small">{errores.password}</span>}
      </div>

      <button type="submit" className="btn btn-primary w-100">Ingresar</button>
    </form>
  );
}