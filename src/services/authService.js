import { api } from './api'

export async function iniciarSesion(credenciales) {
  // credenciales es el objeto { email, password }
  // Asumimos que la ruta de tu backend para loguearse es /auth/login
  const respuesta = await api.post('/auth/login', credenciales)
  return respuesta.data
}