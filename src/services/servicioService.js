import { api } from './api';
import { ServicioDTO } from '../dto/servicio.dto';

// Función estandarizada para manejar errores de Axios según la guía
const manejarErrorAxios = (error) => {
  if (error.response) {
    // El servidor respondió con estado fuera del rango 2xx (ej: 400, 401, 500)
    return error.response.data.message || `Error del servidor: ${error.response.status}`;
  } else if (error.request) {
    // La petición se envió pero no hubo respuesta (servidor caído o sin internet)
    return 'No hay respuesta del servidor. Verifica tu conexión a internet.';
  } else {
    // Error al configurar la petición
    return 'Error inesperado al procesar la solicitud.';
  }
};

// Función auxiliar para adjuntar el token de seguridad
const obtenerConfiguracion = () => {
  // Asegúrate de que 'token' sea el nombre de la variable donde guardas el JWT al hacer login
  const token = localStorage.getItem('token'); 
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const obtenerServicios = async () => {
  try {
    const response = await api.get('/servicios'); // Esta ruta es pública
    return response.data;
  } catch (error) {
    throw new Error(manejarErrorAxios(error));
  }
};

export const crearServicio = async (datosFormulario) => {
  try {
    const datosListos = ServicioDTO.paraEnviar(datosFormulario);
    // Adjuntamos la configuración con el token
    const response = await api.post('/servicios', datosListos, obtenerConfiguracion());
    return response.data;
  } catch (error) {
    throw new Error(manejarErrorAxios(error));
  }
};

export const actualizarServicio = async (id, datosFormulario) => {
  try {
    const datosListos = ServicioDTO.paraEnviar(datosFormulario);
    // Adjuntamos la configuración con el token
    const response = await api.put(`/servicios/${id}`, datosListos, obtenerConfiguracion());
    return response.data;
  } catch (error) {
    throw new Error(manejarErrorAxios(error));
  }
};

export const eliminarServicio = async (id) => {
  try {
    // Adjuntamos la configuración con el token
    const response = await api.delete(`/servicios/${id}`, obtenerConfiguracion());
    return response.data;
  } catch (error) {
    throw new Error(manejarErrorAxios(error));
  }
};