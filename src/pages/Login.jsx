import { useState } from 'react';

export const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', form);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '320px', margin: '40px auto' }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="email" 
          name="email" 
          placeholder="Correo electrónico" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Contraseña" 
          value={form.password} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;