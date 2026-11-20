import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from "../components/templates/AuthLayout";
import FormularioLogin from "../components/organisms/FormularioLogin";
// Importamos el servicio que acabamos de crear
import { iniciarSesion } from '../services/authService'; 

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  // Agregamos async para poder usar await con Axios
  const handleLogin = async (datos) => {
    setIsLoading(true);
    setMensajeError(''); 

    try {
      // Llamada real al backend enviando el email y password
      const respuesta = await iniciarSesion({
        email: datos.email,
        password: datos.password
      });
      
      // Guardamos el token real que nos envía el backend
      // (Si tu backend devuelve un objeto { token: "..." }, usamos respuesta.token)
      const token = respuesta.token || respuesta;
      localStorage.setItem('token', token); 
      
      // Redirigimos al usuario
      navigate('/catalogo'); 

    } catch (error) {
      // Si el backend responde con error 401 (Credenciales incorrectas según tu Swagger)
      if (error.response && error.response.status === 401) {
        setMensajeError('Correo o contraseña incorrectos. Intenta nuevamente.');
      } else {
        setMensajeError('Error al conectar con el servidor. Revisa si la API está encendida.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <FormularioLogin 
        onLoginSubmit={handleLogin} 
        isLoading={isLoading} 
        mensajeError={mensajeError} 
      />
    </AuthLayout>
  );
}

export default Login;