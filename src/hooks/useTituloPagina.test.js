import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useTituloPagina } from './useTituloPagina';

describe('useTituloPagina', () => {
  it('establece el título de la pestaña correctamente', () => {
    // renderHook envuelve nuestro hook en un componente simulado
    renderHook(() => useTituloPagina('Inicio'));
    expect(document.title).toBe('Inicio | FaunaCloud');
  });

  it('actualiza el título si el texto cambia dinámicamente', () => {
    // Simulamos un cambio de página (re-render)
    const { rerender } = renderHook(({ titulo }) => useTituloPagina(titulo), {
      initialProps: { titulo: 'Catálogo' }
    });
    expect(document.title).toBe('Catálogo | FaunaCloud');

    rerender({ titulo: 'Detalle del Servicio' });
    expect(document.title).toBe('Detalle del Servicio | FaunaCloud');
  });

  it('funciona correctamente si se le pasa un texto vacío', () => {
    renderHook(() => useTituloPagina(''));
    expect(document.title).toBe('| FaunaCloud');
  });

  it('soporta textos largos con múltiples palabras', () => {
    renderHook(() => useTituloPagina('Panel de Control del Usuario'));
    expect(document.title).toBe('Panel de Control del Usuario | FaunaCloud');
  });
});