import serviciosData from '../data/servicios.json';

const CLAVE = 'servicios';

function leer() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado === null) {
    localStorage.setItem(CLAVE, JSON.stringify(serviciosData));
    return [...serviciosData];
  }
  return JSON.parse(guardado);
}

function guardar(lista) {
  localStorage.setItem(CLAVE, JSON.stringify(lista));
}

// READ (listar todos)
export function listarServicios() {
  return leer();
}

// READ (obtener uno)
export function obtenerServicio(id) {
  return leer().find((s) => s.id === id) ?? null;
}

// CREATE (crear)
export function crearServicio(datos) {
  const lista = leer();
  const nuevoId = Math.max(0, ...lista.map((s) => s.id)) + 1;
  const nuevo = { ...datos, id: nuevoId };
  
  guardar([...lista, nuevo]);
  return nuevo;
}

// UPDATE (actualizar)
export function actualizarServicio(id, cambios) {
  const lista = leer().map((s) => (s.id === id ? { ...s, ...cambios } : s));
  guardar(lista);
  return lista.find((s) => s.id === id) ?? null;
}

// DELETE (eliminar)
export function eliminarServicio(id) {
  guardar(leer().filter((s) => s.id !== id));
}