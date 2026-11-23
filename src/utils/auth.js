export const obtenerUsuarioActual = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const tokenLimpio = token.replace(/^"|"$/g, '');
    const payloadBase64 = tokenLimpio.split('.')[1];
    const payloadJson = atob(payloadBase64.replace(/-/g, '+').replace(/_/g, '/'));
    return JSON.parse(payloadJson);
  } catch (error) {
    console.error('Error al decodificar el token:', error);
    return null;
  }
};

export const esAdmin = () => {
  const usuario = obtenerUsuarioActual();
  return usuario?.rol === 'admin';
};