import { describe, it, expect } from 'vitest';
import { validarEmail, validarClave } from './validaciones';

describe('validarEmail', () => {
  it('devuelve error si el correo está vacío', () => {
    expect(validarEmail('')).toBe('El correo es obligatorio.');
  });

  it('devuelve error si el correo no tiene @ o punto', () => {
    expect(validarEmail('juan faunacloud.com')).toBe('Debes ingresar un correo válido.');
  });

  it('devuelve string vacío si el correo es válido', () => {
    expect(validarEmail('contacto@faunacloud.com')).toBe('');
  });
});

describe('validarClave', () => {
  it('devuelve error si la contraseña está vacía', () => {
    expect(validarClave('')).toBe('La contraseña es obligatoria.');
  });

  
  it('devuelve error si la contraseña tiene menos de 6 caracteres', () => {
  expect(validarClave('123')).toBe('La contraseña debe tener al menos 6 caracteres.');
});

  it('devuelve string vacío si la contraseña tiene 6 o más caracteres', () => {
    expect(validarClave('123456')).toBe('');
  });
});