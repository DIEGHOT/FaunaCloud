// Valida que el correo tenga texto, un "@" y un punto después del "@"
export function validarEmail(email) {
  if (!email || email.trim() === '') {
    return 'El correo es obligatorio.';
  }
  
  if (!email.includes('@')) {
    return 'Falta el "@" en el correo electrónico.';
  }

  const partes = email.split('@');
  if (partes[0].length === 0) {
    return 'Debe haber algo escrito antes del "@".';
  }

  if (!partes[1].includes('.')) {
    return 'Falta un punto (.) después del "@".';
  }

  return ''; // Si devuelve vacío, es que está perfecto
}

// Valida que la clave tenga al menos 6 caracteres
export function validarClave(clave) {
  if (!clave || clave.trim() === '') {
    return 'La contraseña es obligatoria.';
  }
  
  if (clave.length < 6) {
    return 'La contraseña debe tener al menos 6 caracteres.';
  }

  return ''; // Si devuelve vacío, es que está perfecto
}