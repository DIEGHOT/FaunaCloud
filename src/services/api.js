import axios from 'axios'

// Creamos una instancia configurada de Axios
export const api = axios.create({
  // Asegúrate de que este sea el puerto correcto donde corre tu backend de la Veterinaria
  baseURL: 'http://localhost:3000/api', 
  timeout: 5000, // Si el backend no responde en 5 segundos, corta el intento
})