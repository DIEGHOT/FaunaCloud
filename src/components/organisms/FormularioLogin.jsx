import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validarEmail, validarClave } from '../../utils/validaciones.js';

export default function FormularioLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errores, setErrores] = useState({ email: '', password: '' });

  const manejarIngreso = (e) => {
    e.preventDefault();
    
    const errorEmail = validarEmail(email);
    const errorPassword = validarClave(password);

    setErrores({ email: errorEmail, password: errorPassword });

    if (!errorEmail && !errorPassword) {
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
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ej: recepcion@sanmarcos.cl" 
        />
        {errores.email && <span className="text-danger small">{errores.email}</span>}
      </div>

      <div className="mb-4">
        <label>Contraseña</label>
        <input 
          type="password" 
          className="form-control"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mínimo 6 caracteres" 
        />
        {errores.password && <span className="text-danger small">{errores.password}</span>}
      </div>

      <button type="submit" className="btn btn-primary w-100">Ingresar</button>
    </form>
  );
}