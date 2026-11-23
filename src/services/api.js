import axios from 'axios'

// Creamos una instancia configurada de Axios
export const api = axios.create({
  // Toma automáticamente la IP desde la que abriste la página (ej: la nueva IP de AWS o localhost)
  baseURL: `http://${window.location.hostname}:3000/api`, 
  timeout: 15000, // Si el backend no responde en 15 segundos, corta el intento
})