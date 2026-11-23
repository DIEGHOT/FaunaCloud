import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from "../components/templates/AuthLayout";
import FormularioLogin from "../components/organisms/FormularioLogin";
import { iniciarSesion } from '../services/authService'; 

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const handleLogin = async (datos) => {
    setIsLoading(true);
    setMensajeError(''); 

    try {
      const respuesta = await iniciarSesion({
        email: datos.email,
        password: datos.password
      });
      
      // Imprimimos la respuesta exacta del servidor en la consola del navegador
      console.log("Respuesta completa del login:", respuesta);

      // Buscamos el token en las propiedades más comunes
      const token = respuesta.token || respuesta.accessToken || respuesta.data?.token;
      
      if (typeof token === 'string') {
        localStorage.setItem('token', token);
        navigate('/catalogo');
      } else {
        setMensajeError('El servidor respondió, pero no se encontró un token válido. Revisa la consola.');
      }

    } catch (error) {
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